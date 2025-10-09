'use client'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import StarIcon from '@/assets/icons/star.svg'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTML5Icon from '@/assets/icons/html5.svg'
import CSS3Icon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GitHubIcon from '@/assets/icons/github.svg'
import { TechIcon } from '@/components/TechIcon'
import mapImage from '@/assets/images/map.png'
import smileEmoji from '@/assets/images/avatar.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import DocumentIcon from '@/assets/icons/document.svg'
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTML5Icon,
  },
  {
    title: 'CSS3',
    iconType: CSS3Icon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  },
]

const hobbies = [
  {
    titleUk: 'Ігри',
    titleEn: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '20%',
  },
  {
    titleUk: 'Пауерліфтинг',
    titleEn: 'Powerlifting',
    emoji: '🏋️',
    left: '65%',
    top: '18%',
  },
  {
    titleUk: 'Машини',
    titleEn: 'Cars',
    emoji: '🚗',
    left: '35%',
    top: '8%',
  },
  {
    titleUk: 'Фотографія',
    titleEn: 'Photography',
    emoji: '📸',
    left: '5%',
    top: '65%',
  },
  {
    titleUk: 'Музика',
    titleEn: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '55%',
  },
  {
    titleUk: 'Рибалка',
    titleEn: 'Fishing',
    emoji: '🎣',
    left: '40%',
    top: '70%',
  },
  {
    titleUk: 'Велосипед',
    titleEn: 'Cycling',
    emoji: '🚴',
    left: '25%',
    top: '40%',
  },
]

const certificates = [
  {
    title:
      'React – Full Course: React, Redux & Redux Toolkit',
    url: 'https://www.udemy.com/certificate/UC-1de09707-57d8-449b-8dc5-4c07f4aaea10/',
  },
  {
    title:
      'Redux for State Management in React Applications',
    url: 'https://www.udemy.com/certificate/UC-eea47f18-1659-4d18-8239-3d7eed9b46ee/',
  },
  {
    title:
      'TypeScript from Scratch – Full Course and Design Patterns',
    url: 'https://www.udemy.com/certificate/UC-86063e19-725c-46ed-a343-cee0a68d470f/',
  },
]

const education = [
  {
    titleUk: 'Кібербезпека',
    titleEn: 'Cybersecurity',
    schoolUk: 'Військова кафедра | ВІТІ ім. Героїв Крут',
    schoolEn:
      'Military Department | VITI (Heroes of Kruty Institute)',
    period: '2024-2026',
  },
  {
    titleUk: "Комп'ютерні науки",
    titleEn: 'Computer Science (Master)',
    schoolUk: 'Магістр | УДУ ім. М.П. Драгоманова',
    schoolEn: 'Master | Dragomanov University',
    period: '2023-2025',
  },
  {
    titleUk: 'Інженерія програмного забезпечення',
    titleEn: 'Software Engineering (Bachelor)',
    schoolUk: 'Бакалавр | УДУ ім. М.П. Драгоманова',
    schoolEn: 'Bachelor | Dragomanov University',
    period: '2019-2023',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  const { t, locale } = useLanguage()
  const [showScrollHint, setShowScrollHint] = useState(true)

  const FloatingBadge = ({
    label,
    emoji,
    leftPercent,
    topPercent,
  }: {
    label: string
    emoji: string
    leftPercent: number
    topPercent: number
  }) => {
    const badgeRef = useRef<HTMLDivElement | null>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const velocity = useRef({
      vx: 40 + Math.random() * 40,
      vy: 40 + Math.random() * 40,
    })
    const paused = useRef(false)

    useEffect(() => {
      const container =
        constraintRef.current as HTMLDivElement | null
      const el = badgeRef.current
      if (!container || !el) return
      const { width, height } =
        container.getBoundingClientRect()
      const initX =
        (leftPercent / 100) * (width - el.offsetWidth)
      const initY =
        (topPercent / 100) * (height - el.offsetHeight)
      x.set(Math.max(0, initX))
      y.set(Math.max(0, initY))
    }, [leftPercent, topPercent, x, y])

    useAnimationFrame((t, delta) => {
      if (paused.current) return
      const container =
        constraintRef.current as HTMLDivElement | null
      const el = badgeRef.current
      if (!container || !el) return
      const { width, height } =
        container.getBoundingClientRect()
      const maxX = width - el.offsetWidth
      const maxY = height - el.offsetHeight

      const dt = Math.min(delta, 32) / 1000
      let nextX = x.get() + velocity.current.vx * dt
      let nextY = y.get() + velocity.current.vy * dt

      if (nextX <= 0 || nextX >= maxX) {
        velocity.current.vx *= -1
        nextX = Math.max(0, Math.min(maxX, nextX))
      }
      if (nextY <= 0 || nextY >= maxY) {
        velocity.current.vy *= -1
        nextY = Math.max(0, Math.min(maxY, nextY))
      }

      x.set(nextX)
      y.set(nextY)
    })

    return (
      <motion.div
        ref={badgeRef}
        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
        style={{ x, y }}
        drag
        dragConstraints={constraintRef}
        dragMomentum={false}
        onDragStart={() => {
          paused.current = true
        }}
        onDragEnd={() => {
          const speed = 10 + Math.random() * 30
          const angle = Math.random() * Math.PI * 2
          velocity.current = {
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          }
          paused.current = false
        }}
      >
        <span className="text-gray-950 font-medium">
          {label}
        </span>
        <span>{emoji}</span>
      </motion.div>
    )
  }

  return (
    <section
      id="about"
      className="py-20 pb-12 lg:py-28 lg:pb-16"
    >
      <div className="container">
        <SectionHeader
          title={t('about.title')}
          eyebrow={t('about.eyebrow')}
          description={t('about.description')}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1 p-5 rounded-3xl bg-white/5 border border-white/10 h-[320px] flex flex-col">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <StarIcon className="w-4 h-4 text-emerald-300" />
                <span>
                  {t(
                    'about.achievements.courseCertificates'
                  )}
                </span>
              </div>
              <ul className="mt-3 flex flex-1 flex-col justify-between">
                {certificates.map((c) => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <StarIcon className="w-5 h-5 text-emerald-300 mt-0.5" />
                      <p className="text-white text-sm font-medium leading-snug group-hover:underline">
                        {c.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 md:col-span-3 lg:col-span-2 h-[320px] flex flex-col">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <StarIcon className="w-4 h-4 text-emerald-300" />
                <span>{t('about.education.title')}</span>
              </div>
              <p className="mt-1 text-white/60 text-sm">
                {t('about.education.description')}
              </p>
              <div
                className="mt-3 relative flex-1 overflow-auto pr-2"
                onScroll={(e) => {
                  const atTop =
                    e.currentTarget.scrollTop <= 2
                  if (showScrollHint !== atTop) {
                    setShowScrollHint(atTop)
                  }
                }}
              >
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10" />
                {education.map((ed, idx) => (
                  <div
                    key={idx}
                    className="relative pl-14 py-3"
                  >
                    <div className="absolute left-3 top-4 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold leading-tight truncate sm:whitespace-normal">
                          {locale === 'uk'
                            ? ed.titleUk
                            : ed.titleEn}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {locale === 'uk'
                            ? ed.schoolUk
                            : ed.schoolEn}
                        </p>
                      </div>
                      <span className="text-white/60 text-sm sm:text-base whitespace-nowrap pt-1 sm:pt-0">
                        {ed.period}
                      </span>
                    </div>
                  </div>
                ))}
                <motion.div
                  className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-3 sm:bottom-12 sm:translate-x-0 lg:hidden"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: showScrollHint ? 1 : 0,
                    y: showScrollHint ? 0 : 6,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative rounded-full p-1.5 bg-white/10 border border-white/10">
                    <ArrowDownIcon className="w-3.5 h-3.5 text-white/80 animate-bounce" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:col-span-3 lg:col-span-2 min-h-[320px]">
              <div className="px-0 pb-4">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <StarIcon className="w-4 h-4 text-emerald-300" />
                  <span>{t('about.hobbies.title')}</span>
                </div>
                <p className="mt-1 text-white/60 text-sm">
                  {t('about.hobbies.description')}
                </p>
              </div>
              <div
                className="relative flex-1"
                ref={constraintRef}
              >
                {hobbies.map((hobby) => (
                  <FloatingBadge
                    key={hobby.titleEn}
                    label={
                      locale === 'uk'
                        ? hobby.titleUk
                        : hobby.titleEn
                    }
                    emoji={hobby.emoji}
                    leftPercent={parseFloat(hobby.left)}
                    topPercent={parseFloat(hobby.top)}
                  />
                ))}
              </div>
            </div>
            <div className="p-0 relative md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-[center_40%]"
                width={400}
                height={320}
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2  after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileEmoji}
                  alt="Smile Emoji"
                  className="size-20"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 md:p-6 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 ">
              <div className="flex items-center gap-3">
                <div className="size-10 md:size-12 rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 flex items-center justify-center flex-shrink-0">
                  <DocumentIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {t('about.cv.title')}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm truncate">
                    PDF • Frontend Developer
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-col gap-3 w-full lg:w-auto md:justify-around md:mt-4 sm:mt-4 md:flex-row">
                <a
                  href="/CV_Bashtovyi_frontend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group w-full sm:w-auto justify-center px-4"
                >
                  <span className="text-sm md:text-base">
                    {t('about.cv.view')}
                  </span>
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/CV_Bashtovyi_frontend.pdf"
                  download
                  className="btn-primary group w-full sm:w-auto justify-center px-4"
                >
                  <DocumentIcon className="size-4" />
                  <span className="text-sm md:text-base">
                    {t('about.cv.download')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
