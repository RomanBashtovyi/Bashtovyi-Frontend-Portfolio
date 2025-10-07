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
      'Розробляв React-застосунки в команді з 4+ розробників',
      'Працював над адміністративною панеллю з багаторольовою системою та CRM-системою для великих наборів даних',
      'Створював React компоненти',
      'Інтегрував Auth0 автентифікацію та налаштовував роль-базований доступ',
      'Розробляв форми з автозаповненням, що покращило UX заповнення даних',
      'Впроваджував Redux Toolkit для керування стейтом замість Context API',
    ],
    achievementsEn: [
      'Developed React applications in a team of 4+ developers',
      'Worked on administrative panel with multi-role system and CRM system for large datasets',
      'Created React components',
      'Integrated Auth0 authentication and configured role-based access',
      'Developed forms with auto-completion, which improved data entry UX',
      'Implemented Redux Toolkit for state management instead of Context API',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Ant Design',
      'Auth0',
      'Axios',
      'Jest',
    ],
  },
  {
    period: 'КВІТЕНЬ 2022 - СІЧЕНЬ 2023',
    periodEn: 'APRIL 2022 - JANUARY 2023',
    company: 'Moar.tech',
    position: 'Верстальщик | Тестувальник',
    positionEn: 'Layout Designer | Tester',
    location: 'Віддалено',
    locationEn: 'Remote',
    achievements: [
      'Розпочинав як верстальник та тестувальник, поступово переходив до React розробки',
      'Верстав адаптивні лендинги та багатосторінкові сайти',
      'Освоював React хуки та Context API для керування локальним стейтом',
      'Інтегрував зовнішні бібліотеки (Swiper, AOS animations, Chart.js)',
    ],
    achievementsEn: [
      'Started as a layout designer and tester, gradually transitioning to React development',
      'Developed adaptive landing pages and multi-page websites',
      'Mastered React hooks and Context API for local state management',
      'Integrated external libraries (Swiper, AOS animations, Chart.js)',
    ],
    technologies: [
      'HTML5',
      'CSS3/SCSS',
      'JavaScript ES6+',
      'React',
      'Context API',
      'Webpack',
      'Figma',
    ],
  },
  {
    period: 'ВЕРЕСЕНЬ 2021 - СІЧЕНЬ 2022',
    periodEn: 'SEPTEMBER 2021 - JANUARY 2022',
    company: 'hyip studio',
    position: 'Верстальщик',
    positionEn: 'Layout Designer',
    location: 'Київ',
    locationEn: 'Kyiv',
    achievements: [
      'Перші кроки у frontend розробці. Спеціалізувався на верстці складних макетів із анімаціями та інтерактивними елементами',
      'Верстав лендинги з анімаціями та складним дизайном',
      'Освоїв JavaScript основи: DOM маніпуляції, події, асинхронні запити',
      'Налаштував деплой на хостинг та базову SEO оптимізацію',
    ],
    achievementsEn: [
      'First steps in frontend development. Specialized in layout design of complex mockups with animations and interactive elements',
      'Developed landing pages with animations and complex design',
      'Mastered JavaScript fundamentals: DOM manipulation, events, asynchronous requests',
      'Configured deployment to hosting and basic SEO optimization',
    ],
    technologies: [
      'HTML5',
      'CSS3/SCSS',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'AOS',
      'Swiper',
      'Figma',
    ],
  },
]

export const ExperienceSection = () => {
  const { t, locale } = useLanguage()

  return (
    <section id="experience" className="py-20 lg:py-28">
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
