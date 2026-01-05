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
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Redux', level: 'expert' },
      { name: 'HTML5/CSS3', level: 'expert' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'Node.js', level: 'expert' },

    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Express.js', level: 'expert' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'Redis', level: 'intermediate' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Sequelize.js', level: 'advanced' },
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
  'Node.js',
  'PostgreSQL',
  'Redux',
  'Team Leadership',
]
