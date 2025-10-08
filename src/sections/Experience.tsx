'use client'

import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { useLanguage } from '@/contexts/LanguageContext'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import StarIcon from '@/assets/icons/star.svg'

const experienceData = [
  {
    period: 'ЛЮТИЙ 2023 - ЧЕРВЕНЬ 2025',
    periodEn: 'FEBRUARY 2023 - JUNE 2025',
    company: 'Moar.tech',
    position: 'Front-end Developer',
    positionEn: 'Front-end Developer',
    location: 'Віддалено',
    locationEn: 'Remote',
    achievements: [
      'Працював над 8+ React проектами в команді з 5 розробників: багаторольова адмін-панель, CRM системи з великими таблицями, PWA медичний додаток',
      'Впроваджував управління стейтом: Redux Toolkit, WebSocket для сповіщень у реальному часі, Auth0/Google OAuth, JWT токени',
      'Створював інтерфейси таблиць для роботи з великими обсягами даних, розширена фільтрація та масові операції',
      'Розробляв AI інтеграції: генератор сторінок з ChatGPT та DALL-E, система регенерації контенту, превʼю через iframe, інтеграція з AI API для автоматизації контентних процесів',
      'Впроваджував PWA функціональність: Service Workers для офлайн режиму, Web Push Notifications',
      'Оптимізував продуктивність: розділення коду, ліниве завантаження, зменшення розміру bundle на 30% використовуючи Preact',
      'Працював з інструментами розробки: Jira, Notion, ClickUp, Trello, Confluence, Cursor',
    ],
    achievementsEn: [
      'Worked on 8+ React projects in a team of 5 developers: multi-role admin panel, CRM systems with large tables, PWA medical application',
      'Implemented state management: Redux Toolkit, WebSocket for real-time notifications, Auth0/Google OAuth, JWT tokens',
      'Created table interfaces for working with large data volumes, extended filtering and mass operations',
      'Developed AI integrations: page generator with ChatGPT and DALL-E, content regeneration system, preview via iframe, integration with AI API for automating content processes',
      'Implemented PWA functionality: Service Workers for offline mode, Web Push Notifications',
      'Optimized performance: code splitting, lazy loading, bundle size reduced by 30% using Preact',
      'Worked with development tools: Jira, Notion, ClickUp, Trello, Confluence, Cursor',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Material UI',
      'Ant Design',
      'Tailwind CSS',
      'Bootstrap',
      'Auth0',
      'Axios',
      'React Query',
    ],
  },
  {
    period: 'КВІТЕНЬ 2022 - СІЧЕНЬ 2023',
    periodEn: 'APRIL 2022 - JANUARY 2023',
    company: 'Moar.tech',
    position: 'Верстальщик | Тестувальник',
    positionEn: 'Web Developer | Tester',
    location: 'Віддалено',
    locationEn: 'Remote',
    achievements: [
      'Розробляв велику кількість адаптивних сайтів: лендинги, багатосторінкові сайти, великі лендинги за специфікаціями для різних бізнес-доменів з підтримкою багатомовності',
      'Освоював JavaScript та інтегрував різні бібліотеки: AOS, Jarallax, Bootstrap Icons, ET Line Icons та інші для створення інтерактивних елементів',
      'Тестування продуктів: функціональне тестування, UI/UX тестування, тестування продуктивності, SEO тестування, кросбраузерне тестування',
    ],
    achievementsEn: [
      'Developed a large number of adaptive websites: landing pages, multi-page sites, large landing pages according to specifications for various business domains with multi-language support',
      'Mastered JavaScript and integrated various libraries: AOS, Jarallax, Bootstrap Icons, ET Line Icons and others for creating interactive elements',
      'Product testing: functional testing, UI/UX testing, performance testing, SEO testing, cross-browser testing',
    ],
    technologies: [
      'HTML5',
      'CSS3/SCSS',
      'JavaScript ES6+',
      'Bootstrap 5',
      'AOS',
      'Jarallax',
      'jQuery',
      'Git',
      'Figma',
    ],
  },
  {
    period: 'ВЕРЕСЕНЬ 2021 - СІЧЕНЬ 2022',
    periodEn: 'SEPTEMBER 2021 - JANUARY 2022',
    company: 'hyip studio',
    position: 'Верстальщик',
    positionEn: 'Web Developer',
    location: 'Віддалено',
    locationEn: 'Remote',
    achievements: [
      'Верстка багатосторінкових проектів для фінансових/криптовалютних компаній на основі готових макетів: лендинги, користувацькі кабінети з адаптацією під необхідний сценарій',
      'Освоював основи веб-розробки: HTML/CSS верстка, JavaScript для інтерактивності, робота з формами та анімаціями',
      'Базова SEO оптимізація: мета-теги, структура сайту, оптимізація зображень',
    ],
    achievementsEn: [
      'Layout of multi-page projects for financial/cryptocurrency companies based on ready-made layouts: landing pages, user cabinets with adaptation to the required scenario',
      'Mastered web development basics: HTML/CSS layout, JavaScript for interactivity, working with forms and animations',
      'Basic SEO optimization: meta-tags, site structure, image optimization',
    ],
    technologies: [
      'HTML5',
      'CSS3/SCSS',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'AOS',
      'Swiper',
    ],
  },
]

export const ExperienceSection = () => {
  const { t, locale } = useLanguage()

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 pt-0 lg:pt-0"
    >
      <div className="container">
        <SectionHeader
          title={t('experience.title')}
          eyebrow={t('experience.eyebrow')}
          description={t('experience.description')}
        />

        <div className="mt-20 space-y-8">
          {experienceData.map((job, index) => (
            <Card key={index} className="p-8 lg:p-10">
              <div className="flex gap-6">
                {/* Timeline indicator - full height line */}
                <div className="relative flex-shrink-0 w-6">
                  {/* Full height line with gradient */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-300/50 to-transparent"></div>
                  {/* Circle marker */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center left-1/2 -translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
                    <div className="relative w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                </div>

                {/* Job content - all text to the right of the line */}
                <div className="flex-1">
                  {/* Period and Location */}
                  <div className="mb-4">
                    <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider block">
                      {locale === 'uk'
                        ? job.period
                        : job.periodEn}
                    </span>
                    <span className="text-white/60 text-sm">
                      {locale === 'uk'
                        ? job.location
                        : job.locationEn}
                    </span>
                  </div>

                  {/* Position and Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-serif text-white">
                        {locale === 'uk'
                          ? job.position
                          : job.positionEn}
                      </h3>
                      <p className="text-lg text-emerald-300 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <StarIcon
                          key={starIndex}
                          className="w-4 h-4 text-emerald-300 star-animate"
                          style={{
                            animationDelay: `${
                              starIndex * 0.8
                            }s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-300" />
                      {locale === 'uk'
                        ? 'Ключові досягнення'
                        : 'Key Achievements'}
                    </h4>
                    <ul className="space-y-2">
                      {(locale === 'uk'
                        ? job.achievements
                        : job.achievementsEn
                      ).map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm lg:text-base">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      {locale === 'uk'
                        ? 'Використані технології'
                        : 'Technologies Used'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map(
                        (tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
