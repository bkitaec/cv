'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

// Libra constellation - coordinates relative to top-right area
// Scaled to fit in roughly 200x150 area
const LIBRA_PATTERN = [
  // Main balance beam (horizontal line)
  { x: 0, y: 60, brightness: 1 },      // Alpha Librae (Zubenelgenubi) - left
  { x: 100, y: 50, brightness: 0.9 },  // Center point
  { x: 200, y: 60, brightness: 1 },    // Beta Librae (Zubeneschamali) - right
  // Left pan
  { x: -20, y: 100, brightness: 0.7 }, // Gamma Librae
  { x: 30, y: 120, brightness: 0.6 },  // Lower left
  // Right pan
  { x: 170, y: 100, brightness: 0.7 }, // Sigma Librae
  { x: 220, y: 120, brightness: 0.6 }, // Lower right
  // Upper connection
  { x: 100, y: 0, brightness: 0.8 },   // Top star
]

// Connections between stars (indices)
const LIBRA_CONNECTIONS = [
  [0, 1], [1, 2],           // Main beam
  [0, 3], [3, 4], [0, 4],   // Left pan
  [2, 5], [5, 6], [2, 6],   // Right pan
  [1, 7],                    // Upper stem
]

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let libraStars: Star[] = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createLibraConstellation = () => {
      // Position constellation in top-right area
      const offsetX = canvas.width - 280
      const offsetY = 80
      const scale = Math.min(canvas.width / 1920, 1) * 1.2

      libraStars = LIBRA_PATTERN.map((star, i) => ({
        x: offsetX + star.x * scale,
        y: offsetY + star.y * scale,
        radius: 2 + star.brightness * 3,
        opacity: star.brightness,
        twinkleSpeed: 0.02 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      }))
    }

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000)
      particles = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const drawLibraConstellation = () => {
      // Draw connections first (behind stars)
      ctx.lineWidth = 1.5
      LIBRA_CONNECTIONS.forEach(([i, j]) => {
        const star1 = libraStars[i]
        const star2 = libraStars[j]

        const gradient = ctx.createLinearGradient(star1.x, star1.y, star2.x, star2.y)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.3 + Math.sin(time * 0.5) * 0.1})`)
        gradient.addColorStop(0.5, `rgba(200, 180, 255, ${0.4 + Math.sin(time * 0.5) * 0.1})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${0.3 + Math.sin(time * 0.5) * 0.1})`)

        ctx.beginPath()
        ctx.moveTo(star1.x, star1.y)
        ctx.lineTo(star2.x, star2.y)
        ctx.strokeStyle = gradient
        ctx.stroke()
      })

      // Draw stars with glow and twinkle effect
      libraStars.forEach((star) => {
        const twinkle = 0.7 + Math.sin(time * star.twinkleSpeed * 60 + star.twinklePhase) * 0.3
        const currentOpacity = star.opacity * twinkle

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 4
        )
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.8})`)
        glowGradient.addColorStop(0.3, `rgba(200, 180, 255, ${currentOpacity * 0.4})`)
        glowGradient.addColorStop(1, 'rgba(139, 92, 246, 0)')

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Star core
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()
      })
    }

    const drawParticle = (particle: Particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`
      ctx.fill()
    }

    const drawConnections = () => {
      const connectionDistance = 120

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
    }

    const animate = () => {
      time += 0.016 // ~60fps
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(updateParticle)
      drawConnections()
      particles.forEach(drawParticle)
      drawLibraConstellation()

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    createLibraConstellation()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
      createLibraConstellation()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
