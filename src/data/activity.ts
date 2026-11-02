export interface ActivityYear {
  year: number
  months: number[]
}

// Commits and merges per month by Denys across MI-C3 repositories
// (platform-v1, platform-ui, keycloak-theme-v1, automation-v1, mi-comply-frontend, telkom).
// Generated from git history.
export const activity: ActivityYear[] = [
  { year: 2020, months: [0, 3, 6, 8, 10, 6, 4, 8, 4, 13, 42, 29] },
  { year: 2021, months: [181, 198, 255, 156, 158, 191, 143, 188, 151, 108, 189, 186] },
  { year: 2022, months: [139, 308, 111, 116, 123, 100, 58, 83, 171, 43, 42, 111] },
  { year: 2023, months: [101, 75, 93, 79, 212, 154, 130, 106, 181, 125, 186, 50] },
  { year: 2024, months: [76, 191, 196, 123, 67, 93, 94, 134, 80, 66, 71, 68] },
  { year: 2025, months: [146, 121, 88, 62, 88, 78, 100, 184, 178, 107, 99, 96] },
  { year: 2026, months: [81, 123, 241, 172, 5, 2, 0, 107, 0, 0, 0, 0] },
]

export const activityTotal = activity.reduce(
  (sum, y) => sum + y.months.reduce((a, b) => a + b, 0),
  0,
)
