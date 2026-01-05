export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Redux', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'HTML5/CSS3', level: 'expert' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'Framer Motion', level: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express.js', level: 'expert' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'Redis', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Sequelize', level: 'advanced' },
      { name: 'MySQL', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'GitLab', level: 'advanced' },
      { name: 'GitHub', level: 'advanced' },
      { name: 'Webpack', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'CI/CD', level: 'intermediate' },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: 'Users',
    skills: [
      { name: 'Team Leadership', level: 'advanced' },
      { name: 'Code Review', level: 'expert' },
      { name: 'Mentoring', level: 'advanced' },
      { name: 'Architecture Design', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'advanced' },
    ],
  },
]

export const topSkills = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Redux',
  'Team Leadership',
]
