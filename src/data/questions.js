export const QUESTIONS = [
  {
    id: 1,
    phase: "gate",
    question: "What best describes you today?",
    options: [
      { id: "1a", label: "I am already contributing to freedom tech professionally or as an active volunteer", action: "continue" },
      { id: "1b", label: "I am exploring freedom tech and just getting started", action: "route_beginner" },
    ],
  },
  {
    id: 2,
    phase: "broad",
    question: "Which of these best describes your role in freedom tech?",
    options: [
      { id: "2a", label: "I build software, protocols, or technical infrastructure", scores: { dev: 3 } },
      { id: "2b", label: "I design how people interact with products and tools", scores: { design: 3 } },
      { id: "2c", label: "I organise people, events, or contributor networks", scores: { community: 3 } },
      { id: "2d", label: "I work in policy, advocacy, education, or humanitarian deployment", scores: { policy: 1, education: 1, human_rights: 1 } },
    ],
  },
  {
    id: 3,
    phase: "broad",
    question: "When you encounter a broken system in this space, your instinct is to...",
    options: [
      { id: "3a", label: "Fix it — write a patch, build an alternative", scores: { dev: 3 } },
      { id: "3b", label: "Redesign the experience so the problem doesn't arise", scores: { design: 3 } },
      { id: "3c", label: "Find out who is harmed and get them protected first", scores: { human_rights: 3 } },
      { id: "3d", label: "Investigate the structural or regulatory cause", scores: { policy: 3 } },
    ],
  },
  {
    id: 4,
    phase: "broad",
    question: "Which of these activities would you spend a free week doing?",
    options: [
      { id: "4a", label: "Building and shipping a tool that solves a real problem", scores: { dev: 2, design: 1 } },
      { id: "4b", label: "Teaching a cohort of newcomers until they can teach others", scores: { education: 3 } },
      { id: "4c", label: "Running a local event that brings new people into the community", scores: { community: 3 } },
      { id: "4d", label: "Getting privacy tools into the hands of journalists or activists", scores: { human_rights: 2, policy: 1 } },
    ],
  },
  {
    id: 5,
    phase: "differentiation",
    question: "What does success look like for your work?",
    options: [
      { id: "5a", label: "Someone I mentored now teaches others independently", scores: { education: 3 } },
      { id: "5b", label: "A network I helped build sustains itself without me", scores: { community: 3 } },
      { id: "5c", label: "Software I wrote runs reliably in production", scores: { dev: 2, design: 1 } },
      { id: "5d", label: "A policy I influenced protects people at scale", scores: { policy: 2, human_rights: 1 } },
    ],
  },
  {
    id: 6,
    phase: "differentiation",
    question: "What do you obsess over?",
    options: [
      { id: "6a", label: "System architecture, performance, and protocol correctness", scores: { dev: 3 } },
      { id: "6b", label: "Clarity, usability, and how something feels to use", scores: { design: 3 } },
      { id: "6c", label: "Whether the most vulnerable people can actually access this", scores: { human_rights: 2, education: 1 } },
      { id: "6d", label: "Whether the legal and political environment will allow this to exist", scores: { policy: 3 } },
    ],
  },
  {
    id: 7,
    phase: "differentiation",
    question: "Which scenario keeps you up at night?",
    options: [
      { id: "7a", label: "A journalist in a hostile country has no encrypted tools that actually work", scores: { human_rights: 3 } },
      { id: "7b", label: "A government quietly passes legislation that criminalises open source development", scores: { policy: 3 } },
      { id: "7c", label: "Critical freedom tech infrastructure has three maintainers and no funding", scores: { dev: 2, community: 1 } },
      { id: "7d", label: "Millions of people use freedom tech daily but have no idea how it works", scores: { education: 2, design: 1 } },
    ],
  },
  {
    id: 8,
    phase: "differentiation",
    question: "When someone new enters the freedom tech space, your first move is to...",
    options: [
      { id: "8a", label: "Connect them with the right people and groups", scores: { community: 3 } },
      { id: "8b", label: "Sit down and explain the fundamentals until it clicks", scores: { education: 3 } },
      { id: "8c", label: "Point them to the best tools and help them set up", scores: { dev: 1, design: 1, human_rights: 1 } },
      { id: "8d", label: "Help them understand the political stakes of what they're entering", scores: { policy: 2, human_rights: 1 } },
    ],
  },
  {
    id: 9,
    phase: "confirmation",
    question: "You are given full resources to lead one project. You choose...",
    options: [
      { id: "9a", label: "A new open source protocol that solves a hard technical problem", scores: { dev: 3 } },
      { id: "9b", label: "A complete redesign of how a critical freedom tool works for non-technical users", scores: { design: 3 } },
      { id: "9c", label: "A global network of self-sustaining freedom tech community chapters", scores: { community: 2, education: 1 } },
      { id: "9d", label: "A legal and humanitarian campaign protecting people who build or use open tools", scores: { policy: 2, human_rights: 2 } },
    ],
  },
  {
    id: 10,
    phase: "confirmation",
    question: "In ten years, you want to be known as someone who...",
    options: [
      { id: "10a", label: "Built foundational infrastructure that others build on", scores: { dev: 3 } },
      { id: "10b", label: "Made freedom tech usable for ordinary people", scores: { design: 2, education: 1 } },
      { id: "10c", label: "Grew a movement that sustained itself", scores: { community: 3 } },
      { id: "10d", label: "Protected the rights and safety of those who needed it most", scores: { human_rights: 3 } },
    ],
  },
];
