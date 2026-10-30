export type Project = {
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  accent: string
  repo: string
  demo?: string
}

// Replace the example repository URLs with your real GitHub repository URLs.
export const projects: Project[] = [
  {
    number: '01', title: 'FoodExpress', category: 'Desktop Application',
    description: 'A desktop food-ordering system with customer, admin, and rider workflows, order tracking, coupon support, receipts, and analytics.',
    stack: ['Python', 'Tkinter', 'SQLite', 'ReportLab'], accent: 'violet', repo: 'https://github.com/',
  },
  {
    number: '02', title: 'Smart Attendance', category: 'Productivity Tool',
    description: 'An attendance-management application with role-based access, digital attendance records, reporting, and parent notification concepts.',
    stack: ['Python', 'Tkinter', 'SQLite'], accent: 'blue', repo: 'https://github.com/',
  },
  {
    number: '03', title: 'Wildwood Records', category: 'Web Experience',
    description: 'A modern music-label website concept for showcasing artists, releases, news, and events with responsive layouts and motion.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'], accent: 'orange', repo: 'https://github.com/',
  },
]
