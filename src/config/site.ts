export type Project = {
  slug: string
  number: string
  title: string
  eyebrow: string
  summary: string
  description: string
  focus: string[]
  stack: string[]
  outcome: string
  accent: 'coral' | 'blue' | 'lime'
}

export const site = {
  name: 'Aban',
  title: 'AI products & interactive experiences',
  email: 'abandonpeter1@gmail.com',
  github: 'https://github.com/jinzhai001',
  linkedin: 'www.linkedin.com/in/aban-zhai-4436333a7',
  location: 'Hangzhou, China',
  school: 'Zhejiang University',
}

export const projects: Project[] = [
  {
    slug: 'taskradar',
    number: '01',
    title: 'TaskRadar',
    eyebrow: 'AI task intelligence',
    summary: 'Turn scattered screenshots and shared content into an actionable, de-duplicated plan.',
    description: 'TaskRadar explores a quieter kind of assistant: one that notices the commitments hiding in the things we already save and share. It extracts tasks, deadlines, times and places, then turns fragments into a useful next action.',
    focus: ['Screenshot & share-sheet import', 'Task / DDL / time / location extraction', 'Duplicate-aware task intelligence'],
    stack: ['React Native', 'Expo', 'TypeScript', 'OCR', 'LLM', 'DeepSeek'],
    outcome: 'From information capture to intent capture.',
    accent: 'coral',
  },
  {
    slug: 'cvget',
    number: '02',
    title: 'CVGet',
    eyebrow: 'Local-first talent intelligence',
    summary: 'A private workspace for turning a pile of resumes into a searchable candidate system.',
    description: 'CVGet is built around a simple belief: recruiting workflows can be intelligent without sending sensitive candidate data away. It gives headhunters a local-first workflow for importing, parsing, organizing, searching and de-duplicating resumes.',
    focus: ['Data stays on the user’s computer', 'Structured resume parsing & search', 'Fast candidate management without a cloud dependency'],
    stack: ['Tauri 2', 'React', 'TypeScript', 'Rust', 'SQLite', 'LLM Resume Parsing'],
    outcome: 'Intelligence that respects where the data lives.',
    accent: 'blue',
  },
  {
    slug: 'forgotten-drink',
    number: '03',
    title: '遗忘之饮',
    eyebrow: 'Interactive narrative experiment',
    summary: 'A small game about memory, forgetting, and the choices that remain after both.',
    description: '遗忘之饮 is an interactive narrative experiment where remembering is not automatically a gift. The player navigates a world shaped by selected memories, and every choice changes what can still be held onto.',
    focus: ['Choice as a narrative mechanic', 'Memory as world state', 'Emotional interaction through play'],
    stack: ['Interactive Narrative', 'Game Design', 'Choice Systems', 'Narrative Prototyping'],
    outcome: 'A story that asks what we choose to carry forward.',
    accent: 'lime',
  },
]

export const thoughts = [
  { title: 'Agent products need a better sense of timing', tag: 'AI Agent', date: 'Soon' },
  { title: 'Game AI is a design material, not just a feature', tag: 'Game AI', date: 'Soon' },
  { title: 'What makes an AI-native interaction feel natural?', tag: 'Product Thinking', date: 'Soon' },
]
