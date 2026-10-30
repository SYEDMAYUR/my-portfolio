import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className={`project-card accent-${project.accent}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <div className="project-visual">
        <div className="project-visual-top"><span>FEATURED PROJECT / {project.number}</span><span className="visual-dot" /></div>
        <div className="project-art" aria-hidden="true"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-core">{project.number}</div><span className="art-orbit orbit-a" /><span className="art-orbit orbit-b" /></div>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-body">
        <div className="project-title-row"><h3>{project.title}</h3><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}><ArrowUpRight size={20} /></a></div>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={project.repo} target="_blank" rel="noreferrer"><Github size={15} /> View repository <ArrowUpRight size={14} /></a>
      </div>
    </motion.article>
  )
}
