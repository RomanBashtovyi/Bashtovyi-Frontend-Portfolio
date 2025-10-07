'use client'

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { ProjectGallery } from '@/components/ProjectGallery'
import { TechIcon } from '@/components/TechIcon'
import { useLanguage } from '@/contexts/LanguageContext'
import ReactIconSvg from '@/assets/icons/react.svg'
import NextJsIcon from '@/assets/icons/next-dot-js.svg'
import TypeScriptIcon from '@/assets/icons/typescript-16.svg'
import PrismaIcon from '@/assets/icons/prisma.svg'
import PostgreSQLIcon from '@/assets/icons/postgresql.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import ShadcnIcon from '@/assets/icons/shadcn-ui.svg'
import RechartsIcon from '@/assets/icons/recharts.svg'

const portfolioProjects = [
  {
    name: 'PowerLogs',
    year: '2025',
    type: 'Pet Project',
    description: {
      en: 'A modern fitness tracker I built for myself and friends. We use it to plan workouts, log results, and analyze progress with detailed charts and stats. Focused on speed and simple UX.',
      uk: 'Сучасний трекер тренувань, який я зробив для себе та друзів. Ми користуємося ним для планування, фіксації результатів і аналізу прогресу через детальні графіки та статистику. Акцент на швидкодії та простому UX.',
    },
    techStack: [
      { name: 'React', icon: ReactIconSvg },
      { name: 'Next.js 14', icon: NextJsIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Prisma ORM', icon: PrismaIcon },
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'NextAuth.js', icon: NextJsIcon },
      { name: 'Shadcn/ui', icon: ShadcnIcon },
      { name: 'Recharts', icon: RechartsIcon },
    ],
    features: {
      en: [
        'Detailed analytics - 1RM progress charts, volume and reps tracking',
        'Personal records tracking with automatic calculations',
        'Custom workout templates and ready-made programs',
        'Mobile-optimized responsive design for gym use',
        'Quick set input with RPE and percentage support',
        'Secure data protection with modern authentication',
      ],
      uk: [
        "Детальна аналітика - графіки прогресу 1RM, об'єму та повторень",
        'Відстеження персональних рекордів з автоматичними розрахунками',
        'Власні шаблони тренувань та готові програми',
        'Мобільна оптимізація для використання в залі',
        'Швидкий ввід сетів з підтримкою RPE та відсотків',
        'Безпека даних з сучасними стандартами аутентифікації',
      ],
    },
    githubLink:
      'https://github.com/RomanBashtovyi/PowerLogs',
    liveLink: 'https://power-logs.vercel.app',
    screenshots: [
      {
        src: '/screenshots/powerlogs/home.png',
        alt: 'PowerLogs Home Page',
      },
      {
        src: '/screenshots/powerlogs/dashoboard.png',
        alt: 'PowerLogs Dashboard',
      },
      {
        src: '/screenshots/powerlogs/workouts.png',
        alt: 'PowerLogs Workouts',
      },
      {
        src: '/screenshots/powerlogs/workouts-details.png',
        alt: 'PowerLogs Workout Details',
      },
      {
        src: '/screenshots/powerlogs/exercises.png',
        alt: 'PowerLogs Exercises',
      },
      {
        src: '/screenshots/powerlogs/templates.png',
        alt: 'PowerLogs Templates',
      },
      {
        src: '/screenshots/powerlogs/calendar.png',
        alt: 'PowerLogs Calendar',
      },
      {
        src: '/screenshots/powerlogs/progress-tracking.png',
        alt: 'PowerLogs Progress Tracking',
      },
    ],
  },
]

export const ProjectsSection = () => {
  const { language, t } = useLanguage()

  return (
    <section id="projects" className="pb-16 lg:pb-24">
      <div className="container">
        <SectionHeader
          title={t('projects.title')}
          eyebrow={t('projects.eyebrow')}
          description={t('projects.description')}
        />
        <div className="flex flex-col mt-10 gap-12 md:mt-16 md:gap-16 lg:gap-20">
          {portfolioProjects.map(
            (project, projectIndex) => (
              <Card
                key={project.name}
                className="px-6 pt-6 pb-6 md:pt-8 md:px-8 lg:px-12 lg:pt-10 lg:pb-10 sticky"
                style={{
                  top: `calc(64px + ${
                    projectIndex * 40
                  }px)`,
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Project Info */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                    {/* Left Side - Header & Description */}
                    <div className="lg:flex-1">
                      {/* Project Header */}
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.type}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-xl font-serif mt-2 md:text-3xl lg:text-4xl md:mt-4">
                        {project.name}
                      </h3>

                      <p className="text-sm md:text-base text-white/60 mt-3 md:mt-4 leading-relaxed">
                        {
                          project.description[
                            language as keyof typeof project.description
                          ]
                        }
                      </p>

                      {/* Links */}
                      <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4  h-12 rounded-xl bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-semibold"
                        >
                          <span>
                            {t('projects.visitSite')}
                          </span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 h-12 rounded-xl border border-white/15 hover:bg-white/10 hover:border-white/25 hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-semibold"
                        >
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>
                            {t('projects.github')}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Right Side - Tech Stack & Features */}
                    <div className="mt-6 lg:mt-0 lg:w-96">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                          {t('projects.techStack')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <div
                              key={tech.name}
                              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                              <TechIcon
                                component={tech.icon}
                              />
                              <span className="text-xs font-medium text-white/90">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mt-5">
                        <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                          {t('projects.keyFeatures')}
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features[
                            language as keyof typeof project.features
                          ]
                            .slice(0, 4)
                            .map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm text-white/60"
                              >
                                <span className="text-emerald-400 mt-1 text-xs">
                                  ▸
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="lg:max-h-[600px] lg:overflow-hidden lg:rounded-lg">
                    <ProjectGallery
                      images={project.screenshots}
                    />
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}
