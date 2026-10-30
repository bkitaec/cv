export interface MIC3Project {
  id: string
  name: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  link?: string
  aiPowered?: boolean
  aiPercentage?: number
}

export const mic3Projects: MIC3Project[] = [
  {
    id: 'platform-v1',
    name: 'Affectli Platform',
    period: '2018 - Present',
    description:
      'Ontology-based "Business Operating System" that unifies legacy systems, IoT devices and data streams into a real-time single pane of glass. Used in oil & gas, telecom, mining, utilities and security operations. Top contributor to the frontend: ~26% of the current codebase and 3,500+ merge requests reviewed and merged into master.',
    highlights: [
      'No-code Form Designer: 46 field types (authored 13), versioning, import/export, input masks, device-aware fields',
      'BPMN Process Designer on bpmn-js: script tasks, Java delegates, listeners, signals, gateways, versioning',
      'Data Pipeline Designer & Monitor: node editor with connectors, live status, validation and versioning',
      'Keycloak security admin console: auth flows, identity/OpenID providers (PKCE), tokens, OTP, brute-force protection',
      'Ontology & entity UI: classes, relationships graph, sharing and permissions, calculated attributes',
      'Bryntum grids and task boards, print templates, background jobs, events monitor, workspaces & teams',
      'GraphQL layer of 400+ operations with Apollo Client and WebSocket subscriptions',
      'Engineering health: removed Flow from 1,400+ files, dropped PrimeReact, moved builds to Rspack',
      'Release management across 17 release branches; maintainer of the shared component library and Keycloak themes',
      'Migrated the E2E suite from Puppeteer to Playwright (Cucumber/Gherkin, GitLab CI)',
    ],
    tech: [
      'React',
      'Redux',
      'GraphQL',
      'Apollo Client',
      'BPMN.js',
      'Bryntum',
      'Keycloak',
      'OpenLayers',
      'Rspack',
      'Playwright',
    ],
    link: 'https://affectli.com',
  },
  {
    id: 'comply-respond',
    name: 'ComplyRespond.ai (Mi-Comply)',
    period: '2025 - Present',
    description:
      'White-label, multi-tenant third-party risk & compliance platform with Customer, Vendor and Reviewer portals. Main frontend developer: 389 of 426 commits. Built with Claude Code as part of the team.',
    aiPowered: true,
    aiPercentage: 95,
    highlights: [
      '~95% of the code written with Claude Code (CLAUDE.md, custom agents, ADRs, spec-then-plan workflow)',
      'Customer, Vendor and Reviewer portals: questionnaires, sharing, notifications, incident wizard',
      'Questionnaire runner and form builder shared with the Affectli renderer',
      'Risk analytics: risk scoring, gauges, heatmaps and a Risk Flow Sankey with maturity layers',
      '"Glass" design system, white-label theming and dark mode',
      'v2: migration from REST auth to Keycloak SSO with an Apollo GraphQL client',
      'Playwright E2E suite: 17 specs covering auth, customer, vendor, reviewer and lifecycle flows',
    ],
    tech: [
      'React 18',
      'Vite',
      'Ant Design',
      'Redux Toolkit',
      'Zustand',
      'TanStack Router',
      'ECharts',
      'Playwright',
      'Claude AI',
    ],
    link: 'https://complyrespond.ai',
  },
  {
    id: 'telkom',
    name: 'Telkom — Telco Incident Management',
    period: '2026 - Present',
    description:
      'Incident management system for a telecom operator built on Affectli: site alarms become NOC tickets, NOC operators dispatch field tickets to engineers on a mobile app. Wrote most of the application code across NOC, field and shared apps.',
    aiPowered: true,
    highlights: [
      'Migrated the NOC UI to TypeScript, Apollo Client and Tailwind; incidents, alarm events, Kanban boards, ECharts',
      'Digital twins of sites: live sensor data, CCTV zones, gate/lock state, Digital Twin Manager',
      'Security incident flow across NOC and field apps, with Google Maps directions for engineers',
      'Command Centre: MapLibre globe control room, app launcher, entity catalog for 23 entity types',
      'Six Affectli LLM agents (orchestrator, dispatch, handover, incidents, sites, field) with entity cards in chat',
      'Tenant SLA & service-credit reporting with CSV export; multi-tenant workspace isolation',
      'Helm/Kubernetes deploy pipeline on GitLab CI and Makefile-driven dev/deploy tooling',
    ],
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Apollo Client',
      'MapLibre GL',
      'Keycloak',
      'Kubernetes',
      'Claude AI',
    ],
  },
]
