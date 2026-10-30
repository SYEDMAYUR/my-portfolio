
import { motion } from 'framer-motion'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react'

import Navbar from './components/Navbar'
import Scene3D from './components/Scene3D'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

// ============================================
// PERSONAL PROFILE
// Update your information here.
// ============================================

const profile = {
  name: 'Syed Mayur Haque',
  shortName: 'Mayur',
  email: 'mayurhaque266@gmail.com',

  github: 'https://github.com/SYEDMAYUR',

  linkedin:
    'https://www.linkedin.com/in/syed-mayur-haque-b2063a288/',

  location: 'India',
  role: 'Developer in progress.',
}

// ============================================
// SKILLS
// ============================================

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Python', 'Rust', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: Sparkles,
    items: [
      'React',
      'HTML & CSS',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend & Data',
    icon: Cpu,
    items: [
      'SQLite',
      'MySQL',
      'REST APIs',
      'Node.js basics',
    ],
  },
  {
    title: 'Tools & Interests',
    icon: Rocket,
    items: [
      'Git & GitHub',
      'Linux / WSL',
      'Systems Programming',
      'Three.js',
    ],
  },
]

// ============================================
// EDUCATION AND JOURNEY
// ============================================

const journey = [
  {
    date: 'CURRENT',
    title: 'B.Tech — Computer Science & Engineering',
    place:
      'University of Science and Technology, Meghalaya',
    detail:
      'Building a strong foundation in software engineering, computer systems, and practical application development.',
  },
  {
    date: 'PROJECT WORK',
    title: 'Desktop & Web Application Development',
    place: 'Independent and academic projects',
    detail:
      'Developed projects involving Python desktop interfaces, SQLite databases, and React-based web experiences.',
  },
]

// ============================================
// MAIN APP
// ============================================

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* ====================================
            HERO SECTION
        ==================================== */}

        <section className="hero container" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="status-dot" />
              OPEN TO INTERESTING OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              HELLO, WORLD! I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.3,
              }}
            >
              {profile.shortName}
              <span className="hero-period">.</span>

              <br />

              <span className="gradient-text">
                {profile.role}
              </span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
            >
              I build thoughtful software, explore how systems
              work, and turn curious ideas into useful digital
              experiences.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58 }}
            >
              <a
                className="button button-primary"
                href="#projects"
              >
                Explore my work
                <ArrowRight size={17} />
              </a>

              <a
                className="button button-secondary"
                href="#contact"
              >
                Get in touch
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

            {/* GitHub, LinkedIn and location */}

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <Github size={17} />
                GitHub
              </a>

              <span />

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <span />

              <div className="location">
                <MapPin size={15} />
                {profile.location}
              </div>
            </motion.div>
          </div>

          {/* Animated 3D visual */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
          >
            <div className="visual-label label-top">
              <span>FIG. 001</span>
              <span>CREATIVE COMPUTING</span>
            </div>

            <Scene3D />

            <div className="floating-note note-top">
              <span className="note-icon">✳</span>

              <span>
                Curiosity
                <br />
                <b>drives creation</b>
              </span>
            </div>

            <div className="floating-note note-bottom">
              <span className="note-pulse" />

              <span>
                Currently exploring
                <br />
                <b>Systems + Web</b>
              </span>
            </div>

            <div className="visual-label label-bottom">
              <span>INTERACTIVE OBJECT</span>
              <span>01 / 03</span>
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        {/* ====================================
            ABOUT SECTION
        ==================================== */}

        <section
          className="about-section section container"
          id="about"
        >
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Code with purpose.
                <br />

                <span className="muted-heading">
                  Curiosity without limits.
                </span>
              </>
            }
          />

          <div className="about-grid">
            <div className="about-intro">
              <span className="big-quote">“</span>

              <p>
                I'm a Computer Science student who enjoys
                understanding what happens beneath the surface —
                from how software is designed to how systems
                communicate and scale.
              </p>

              <p>
                I like learning by building: experimenting with
                tools, solving practical problems, and improving
                each project one iteration at a time.
              </p>

              <a
                className="text-link"
                href="#journey"
              >
                More about my journey
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-index">
                  01 / MINDSET
                </span>

                <h3>Build to learn</h3>

                <p>
                  Turning concepts into working projects and
                  learning from every iteration.
                </p>
              </div>

              <div className="stat-card">
                <span className="stat-index">
                  02 / INTEREST
                </span>

                <h3>Systems thinking</h3>

                <p>
                  Exploring programming languages, architecture,
                  and the foundations of computing.
                </p>
              </div>

              <div className="stat-card">
                <span className="stat-index">
                  03 / FOCUS
                </span>

                <h3>Useful experiences</h3>

                <p>
                  Creating software that is clear, reliable, and
                  pleasant to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================
            SKILLS SECTION
        ==================================== */}

        <section
          className="skills-section section"
          id="skills"
        >
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title={
                <>
                  Tools for turning
                  <br />

                  <span className="muted-heading">
                    ideas into reality.
                  </span>
                </>
              }
              text="A growing toolkit across programming, frontend development, data, and systems."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon

                return (
                  <motion.div
                    className="skill-card"
                    key={group.title}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <div className="skill-card-heading">
                      <span className="skill-icon">
                        <Icon size={19} />
                      </span>

                      <span className="skill-count">
                        0{index + 1}
                      </span>
                    </div>

                    <h3>{group.title}</h3>

                    <div className="tag-list skill-tags">
                      {group.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <p className="skills-note">
              <span className="status-dot" />

              My toolkit is always evolving — these are tools I
              use or am actively learning.
            </p>
          </div>
        </section>

        {/* ====================================
            PROJECTS SECTION
        ==================================== */}

        <section
          className="projects-section section container"
          id="projects"
        >
          <div className="projects-heading-row">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title={
                <>
                  A few things I've
                  <br />

                  <span className="muted-heading">
                    been building.
                  </span>
                </>
              }
              text="A selection of academic and personal projects. Each one is a chance to learn something new."
            />

            <a
              className="text-link all-projects"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ====================================
            JOURNEY SECTION
        ==================================== */}

        <section
          className="journey-section section"
          id="journey"
        >
          <div className="container journey-layout">
            <div>
              <SectionHeading
                eyebrow="THE JOURNEY SO FAR"
                title={
                  <>
                    Learning by
                    <br />

                    <span className="muted-heading">
                      doing.
                    </span>
                  </>
                }
                text="A snapshot of the path I'm on and the work shaping my skills."
              />

              <div className="journey-note">
                <GraduationCap size={21} />

                <p>
                  Every project is a step forward. I'm focused on
                  learning deeply, building consistently, and
                  staying open to new challenges.
                </p>
              </div>
            </div>

            <div className="timeline">
              {journey.map((item, index) => (
                <motion.article
                  className="timeline-item"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                >
                  <div className="timeline-marker">
                    <span />
                  </div>

                  <span className="timeline-date">
                    {item.date}
                  </span>

                  <h3>{item.title}</h3>

                  <h4>{item.place}</h4>

                  <p>{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================
            CONTACT SECTION
        ==================================== */}

        <section
          className="contact-section section container"
          id="contact"
        >
          <div className="contact-panel">
            <div className="contact-orb" />

            <div className="contact-content">
              <span className="eyebrow">
                <span className="eyebrow-line" />
                WHAT'S NEXT?
              </span>

              <h2>
                Have an idea?
                <br />

                <span className="muted-heading">
                  Let's make it real.
                </span>
              </h2>

              <p>
                I'm always glad to connect about software,
                projects, internships, and ideas worth exploring.
              </p>

              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Say hello
                <Mail size={17} />
              </a>
            </div>

            <div className="contact-side">
              <span className="contact-side-label">
                REACH OUT DIRECTLY
              </span>

              <a href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={16} />
              </a>

              <div className="contact-divider" />

              <span className="contact-side-label">
                FIND ME ONLINE
              </span>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <Github size={16} />
                <ArrowUpRight size={16} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <Linkedin size={16} />
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================
          FOOTER
      ==================================== */}

      <footer className="footer container">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span>

          <span>
            {profile.name}
            <span className="brand-dot">.</span>
          </span>
        </a>

        <span>
          Designed & built with curiosity.
        </span>

        <a
          href="#home"
          className="back-top"
        >
          BACK TO TOP ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </>
  )
}

export default App
