'use client'
import { useState, useEffect } from 'react'
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { useLanguage } from '@/contexts/LanguageContext'
import TelegramIcon from '@/assets/icons/telegram.svg'
import PhoneIcon from '@/assets/icons/phone.svg'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'

export const ContactSection = () => {
  const { t } = useLanguage()
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()
    const email = 'bashtovyi.roman@gmail.com'

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowToast(true)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <section
      id="contact"
      className="py-16 pt-8 lg:py-24 lg:pt-12"
    >
      <div className="container">
        <div className="bg-white/5 border border-white/10 text-white rounded-3xl py-10 px-6 md:px-10 text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
            <div className="md:flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                <span>{t('contact.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif mt-3">
                {t('contact.ctaTitle')}
              </h2>
              <p className="text-sm md:text-base mt-2 text-white/60">
                {t('contact.ctaSubtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-lg">
              <a
                href="https://t.me/romanuss"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-white/5 border border-white/10 px-3 h-12 md:h-14 w-full flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                  <div className="size-8 md:size-9 rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 flex items-center justify-center">
                    <TelegramIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white leading-5 text-sm md:text-base">
                      {t('contact.telegram')}
                    </div>
                    <div className="text-xs md:text-sm text-white/70 truncate">
                      @romanuss
                    </div>
                  </div>
                </div>
                <ArrowRightIcon className="hidden sm:block size-4 text-white/70 group-hover:text-white flex-shrink-0" />
              </a>
              <a
                href="mailto:bashtovyi.roman@gmail.com"
                onClick={handleEmailClick}
                className="group rounded-xl bg-white/5 border border-white/10 px-3 h-12 md:h-14 w-full flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                  <div className="size-8 md:size-9 rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 flex items-center justify-center font-bold">
                    @
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white leading-5 text-sm md:text-base">
                      {t('contact.email')}
                    </div>
                    <div className="text-xs md:text-sm text-white/70 truncate">
                      bashtovyi.roman@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowRightIcon className="hidden sm:block size-4 text-white/70 group-hover:text-white flex-shrink-0" />
              </a>
              <a
                href="tel:+380682651936"
                className="group rounded-xl bg-white/5 border border-white/10 px-3 h-12 md:h-14 w-full flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                  <div className="size-8 md:size-9 rounded-lg bg-gradient-to-br from-sky-300 to-emerald-300 text-gray-900 flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white leading-5 text-sm md:text-base">
                      {t('contact.phone')}
                    </div>
                    <div className="text-xs md:text-sm text-white/70 truncate">
                      +380 68 265 19 36
                    </div>
                  </div>
                </div>
                <ArrowRightIcon className="hidden sm:block size-4 text-white/70 group-hover:text-white flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          showToast
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[400px] opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-emerald-400 to-sky-500 text-gray-900 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 min-w-[280px] border-2 border-white/20">
          <div className="size-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <CheckCircleIcon className="w-4 h-4 text-gray-900" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm leading-tight">
              {t('contact.emailCopied') || 'Email Copied!'}
            </div>
            <div className="text-xs text-gray-900/70 mt-0.5">
              bashtovyi.roman@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
