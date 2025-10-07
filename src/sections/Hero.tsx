'use client'

import memojiImage from '@/assets/images/avatar-laptop.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import { HeroOrbit } from '@/components/HeroOrbit'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { useLanguage } from '@/contexts/LanguageContext'
import GithubIcon from '@/assets/icons/github.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'

export const HeroSection = () => {
  const { t } = useLanguage()
  return (
    <section
      id="hero"
      className="pt-20 pb-32 md:pt-24 md:pb-48 lg:pt-28 lg:pb-60 relative z-0 overflow-x-clip"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={150}
          rotation={30}
          shouldOrbit
          orbitDuration="22s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-4 text-emerald-300/50" />
        </HeroOrbit>
        <HeroOrbit
          size={220}
          rotation={120}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="7s"
        >
          <SparkleIcon className="size-10 text-emerald-300/25" />
        </HeroOrbit>
        <HeroOrbit
          size={180}
          rotation={210}
          shouldOrbit
          orbitDuration="25s"
          shouldSpin
          spinDuration="7s"
        >
          <div className="size-2 bg-emerald-300/70 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={280}
          rotation={300}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-6 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit
          size={340}
          rotation={75}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="9s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={310}
          rotation={165}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-3 bg-emerald-300/35 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={250}
          rotation={255}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="7s"
        >
          <StarIcon className="size-5 text-emerald-300/60" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={250}
          shouldOrbit
          orbitDuration="41s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={310}
          shouldOrbit
          orbitDuration="47s"
          shouldSpin
          spinDuration="11s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={350}
          shouldOrbit
          orbitDuration="51s"
          shouldSpin
          spinDuration="12s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={55}
          shouldOrbit
          orbitDuration="53s"
          shouldSpin
          spinDuration="13s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={115}
          shouldOrbit
          orbitDuration="57s"
          shouldSpin
          spinDuration="14s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={170}
          shouldOrbit
          orbitDuration="61s"
          shouldSpin
          spinDuration="15s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={225}
          shouldOrbit
          orbitDuration="67s"
          shouldSpin
          spinDuration="16s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={280}
          shouldOrbit
          orbitDuration="71s"
          shouldSpin
          spinDuration="17s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={330}
          shouldOrbit
          orbitDuration="73s"
          shouldSpin
          spinDuration="18s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={180}
          shouldOrbit
          orbitDuration="79s"
          shouldSpin
          spinDuration="20s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="hero-avatar"
            alt="Person peeking from behind computer"
            width={128}
            height={192}
            priority
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              {t('hero.available')}
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {t('hero.greeting')}{' '}
            <span className="text-white">
              {t('hero.name')}
            </span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {t('hero.description')}
          </p>
          <div className=" flex flex-col items-center gap-3">
            <div className=" flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
              <a href="#projects" className="btn-secondary">
                <span className="font-semibold">
                  {t('hero.cta')}
                </span>
                <ArrowDown className="size-4" />
              </a>
              <a href="#contact" className="btn-primary">
                <span>👋</span>
                <span className="font-semibold">
                  {t('hero.connect')}
                </span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="https://t.me/romanuss"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <div className="p-1 rounded-md bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900">
                  <TelegramIcon className="size-4 text-gray-900" />
                </div>
                <span className="font-semibold text-sm">
                  Telegram
                </span>
              </a>
              <a
                href="https://github.com/RomanBashtovyi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <div className="p-1 rounded-md bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900">
                  <GithubIcon className="size-4 text-gray-900" />
                </div>
                <span className="font-semibold text-sm">
                  GitHub
                </span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
                {t('hero.experience')}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Redux Toolkit',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Bootstrap',
                'jQuery',
                'AOS',
                'Swiper',
                'Figma',
                'Webpack',
                'GitHub',
                'Ant Design',
                'Tailwind CSS',
                'shadcn/ui',
                'Auth0',
                'Prisma',
                'Axios',
                'Recharts',
                'Jest',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-200 will-change-transform hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
