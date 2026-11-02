/** Month the CV content was last refreshed; drives "present" bars. */
export const lastUpdated = '2026-11'

export interface TimelineItem {
  id: string
  label: string
  company: string
  start: string
  end?: string
}

// Chronological career bars; end omitted means current.
export const timeline: TimelineItem[] = [
  { id: 'mi-c3-lead', label: 'Team Lead Front End', company: 'MI-C3', start: '2020-02' },
  { id: 'reservble', label: 'Co-founder & CTO', company: 'Reservble', start: '2019-03' },
  { id: 'mi-c3-dev', label: 'Front End Developer', company: 'MI-C3', start: '2018-02', end: '2020-01' },
  { id: 'wanderbeat', label: 'JavaScript Developer', company: 'Wanderbeat', start: '2016-09', end: '2018-07' },
  { id: 'codenetix', label: 'Frontend Developer', company: 'Codenetix', start: '2017-05', end: '2017-12' },
  { id: 'ekatong', label: 'Web Engineer', company: 'e卡通', start: '2016-02', end: '2016-09' },
  { id: 'newaion', label: 'PHP Engineer', company: 'Newaion', start: '2010-08', end: '2015-11' },
]
