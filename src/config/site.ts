export type Project = {
  slug: string
  number: string
  title: string
  eyebrow: string
  role: string
  summary: string
  description: string
  contribution: string[]
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
  linkedin: 'https://www.linkedin.com/in/aban-zhai-4436333a7',
  location: 'Hangzhou, China',
  school: 'Zhejiang University',
}

export const projects: Project[] = [
  {
    slug: 'taskradar',
    number: '01',
    title: 'TaskRadar',
    eyebrow: 'AI task intelligence',
    role: 'Product framing · interaction model · prototype',
    summary: 'From a screenshot to a next action — without asking people to reorganize their lives.',
    description: 'TaskRadar explores a quieter kind of assistant: one that notices commitments hidden inside what we already save and share. It turns loose fragments into candidate tasks, then makes the result legible enough for a person to trust and act on.',
    contribution: ['Framed the capture-to-action product problem', 'Designed the extraction and confirmation interaction', 'Defined task de-duplication as a product behaviour'],
    focus: ['Screenshot & share-sheet import', 'Task / DDL / time / location extraction', 'Duplicate-aware task intelligence'],
    stack: ['React Native', 'Expo', 'TypeScript', 'OCR', 'LLM', 'DeepSeek'],
    outcome: 'Designing for the moment information becomes intent.',
    accent: 'coral',
  },
  {
    slug: 'cvget',
    number: '02',
    title: 'CVGet',
    eyebrow: 'Local-first talent intelligence',
    role: 'Product direction · workflow design · local-first system',
    summary: 'A private candidate workspace for turning a stack of resumes into a working talent system.',
    description: 'CVGet starts with a constraint that changes the product: candidate data should remain on the user’s computer. From that principle, I shaped a local workflow for importing, parsing, searching and de-duplicating resumes without treating privacy as an afterthought.',
    contribution: ['Set the local-first product principle', 'Mapped the resume import-to-search workflow', 'Explored an LLM-assisted structured candidate profile'],
    focus: ['Data stays on the user’s computer', 'Structured resume parsing & search', 'Fast candidate management without a cloud dependency'],
    stack: ['Tauri 2', 'React', 'TypeScript', 'Rust', 'SQLite', 'LLM Resume Parsing'],
    outcome: 'Making privacy a product advantage, not a limitation.',
    accent: 'blue',
  },
  {
    slug: 'forgotten-drink',
    number: '03',
    title: '遗忘之饮',
    eyebrow: 'Interactive narrative experiment',
    role: 'Narrative premise · choice system · game design',
    summary: 'An interactive narrative about memory, forgetting, and the choices that remain after both.',
    description: '遗忘之饮 is a small game experiment where remembering is not automatically a gift. I used choice as a way to change what can be held onto, so the player’s decisions shape both the world and the meaning of memory.',
    contribution: ['Built the premise around selective memory', 'Designed choice as a narrative state change', 'Prototyped an emotional interaction through play'],
    focus: ['Choice as a narrative mechanic', 'Memory as world state', 'Emotional interaction through play'],
    stack: ['Interactive Narrative', 'Game Design', 'Choice Systems', 'Narrative Prototyping'],
    outcome: 'Treating interaction as a way to make a story felt.',
    accent: 'lime',
  },
]

export const thoughts = [
  { title: 'Agent products need a better sense of timing', tag: 'AI Agent', date: 'In progress' },
  { title: 'Game AI is a design material, not just a feature', tag: 'Game AI', date: 'In progress' },
  { title: 'What makes an AI-native interaction feel natural?', tag: 'Product thinking', date: 'In progress' },
]
