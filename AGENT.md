# CV Portfolio Project - Agent Instructions

## Project Overview

A modern, single-page CV/portfolio website inspired by [adocomplete.com](https://adocomplete.com/). The site should be minimalist, animated, mobile-first, and architecturally sound using the latest React/Next.js patterns.

## Tech Stack

### Core
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion

### Architecture
- **Feature-Sliced Design (FSD)** - modern architectural methodology for frontend
- **Server Components** by default, Client Components only when needed
- **Composition pattern** for reusable UI

### Additional Libraries
- `clsx` + `tailwind-merge` - conditional classnames
- `@tailwindcss/typography` - prose styling for content
- `lucide-react` - icons
- `next-themes` - dark/light mode (optional)

## Project Structure (Feature-Sliced Design)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (CV)
│   ├── globals.css        # Global styles + Tailwind
│   └── fonts/             # Local fonts (optional)
│
├── widgets/               # Large compositional blocks
│   ├── header/
│   │   ├── ui/
│   │   │   └── Header.tsx
│   │   └── index.ts
│   ├── hero/
│   │   ├── ui/
│   │   │   └── Hero.tsx
│   │   └── index.ts
│   ├── about/
│   │   ├── ui/
│   │   │   └── About.tsx
│   │   └── index.ts
│   ├── experience/
│   │   ├── ui/
│   │   │   └── Experience.tsx
│   │   └── index.ts
│   ├── skills/
│   │   ├── ui/
│   │   │   └── Skills.tsx
│   │   └── index.ts
│   ├── projects/
│   │   ├── ui/
│   │   │   └── Projects.tsx
│   │   └── index.ts
│   ├── contact/
│   │   ├── ui/
│   │   │   └── Contact.tsx
│   │   └── index.ts
│   └── footer/
│       ├── ui/
│       │   └── Footer.tsx
│       └── index.ts
│
├── features/              # User interactions & business logic
│   ├── theme-toggle/
│   │   ├── ui/
│   │   │   └── ThemeToggle.tsx
│   │   └── index.ts
│   └── scroll-to-section/
│       ├── lib/
│       │   └── useScrollTo.ts
│       └── index.ts
│
├── entities/              # Business entities
│   ├── experience/
│   │   ├── model/
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── project/
│   │   ├── model/
│   │   │   └── types.ts
│   │   └── index.ts
│   └── skill/
│       ├── model/
│       │   └── types.ts
│       └── index.ts
│
├── shared/                # Shared utilities & UI
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── AnimatedText.tsx
│   │   └── index.ts
│   ├── lib/
│   │   ├── cn.ts          # clsx + tailwind-merge helper
│   │   └── animations.ts  # Framer Motion variants
│   ├── config/
│   │   └── site.ts        # Site metadata & config
│   └── types/
│       └── index.ts
│
└── data/                  # Static content data
    ├── personal.ts        # Name, bio, contacts
    ├── experience.ts      # Work history
    ├── projects.ts        # Portfolio projects
    └── skills.ts          # Technical skills
```

## Design Requirements

### Layout
- Single-page scrollable layout
- Sticky/fixed header with smooth scroll navigation
- Full-width hero section
- Content sections with consistent max-width container
- Responsive: mobile-first approach

### Sections (in order)
1. **Header** - Logo/name + navigation links + theme toggle
2. **Hero** - Name, title, tagline, CTA buttons, optional photo
3. **About** - Brief bio, professional summary
4. **Experience** - Work history timeline
5. **Skills** - Technical skills grouped by category
6. **Projects** - Featured projects with links
7. **Contact** - Contact info, social links, optional form
8. **Footer** - Copyright, quick links

### Animations (Framer Motion)
- Fade-in on scroll for sections
- Staggered children animations
- Hover effects on cards and buttons
- Smooth page transitions
- Text reveal animations for hero

### Colors & Typography
- Clean, minimal color palette
- Dark/light mode support
- System font stack or modern sans-serif (Inter, Geist)
- Clear typography hierarchy

### Mobile Responsiveness
- Hamburger menu on mobile
- Touch-friendly tap targets (min 44px)
- Optimized images
- Readable font sizes

## Development Guidelines

### Component Patterns
```tsx
// Always use named exports
export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (...)
}

// Co-locate types with components
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}
```

### Animation Pattern
```tsx
// Use shared animation variants
import { fadeInUp, staggerContainer } from '@/shared/lib/animations'

export function Section({ children }: Props) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}
```

### Data Pattern
```tsx
// Keep content in data files
// src/data/experience.ts
export const experiences: Experience[] = [
  {
    company: 'Company Name',
    role: 'Senior Developer',
    period: '2022 - Present',
    description: '...',
  },
]
```

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npm run typecheck
```

## Implementation Phases

### Phase 1: Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up project structure (FSD)
- [ ] Create shared utilities (cn, animations)
- [ ] Configure ESLint & Prettier

### Phase 2: Core UI
- [ ] Build shared UI components (Button, Card, Container, Section)
- [ ] Create Header widget with navigation
- [ ] Build Hero section with animations
- [ ] Implement Footer

### Phase 3: Content Sections
- [ ] About section
- [ ] Experience timeline
- [ ] Skills grid
- [ ] Projects showcase
- [ ] Contact section

### Phase 4: Features
- [ ] Dark/light theme toggle
- [ ] Smooth scroll navigation
- [ ] Mobile menu
- [ ] Scroll animations

### Phase 5: Polish
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Final responsive tweaks

## Notes

- All content should be easily editable via data files
- Prioritize performance (Core Web Vitals)
- Ensure accessibility (WCAG 2.1 AA)
- Use semantic HTML throughout
