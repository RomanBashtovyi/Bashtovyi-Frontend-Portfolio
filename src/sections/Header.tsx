'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import Image from 'next/image'
import avatarImage from '@/assets/images/avatar.png'

export const Header = () => {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Закриття меню при кліку за його межами
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(
          event.target as Node
        )
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    )
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [isMobileMenuOpen])

  return (
    <div className="flex justify-center items-start fixed top-3 w-full z-10 px-3">
      {/* Desktop & Tablet Navigation */}
      <nav className="hidden md:flex items-center gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => scrollToSection('hero')}
          className="nav-item flex items-center"
        >
          {t('navigation.home')}
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="nav-item flex items-center"
        >
          {t('navigation.projects')}
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="nav-item flex items-center"
        >
          {t('navigation.about')}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 flex items-center"
        >
          {t('navigation.contact')}
        </button>
        <div className="px-3 py-1.5 flex items-center justify-center">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Navigation - Full Width */}
      <div className="md:hidden w-full">
        {/* Main Header Container - розширюється по висоті */}
        <div
          ref={mobileMenuRef}
          className={`flex items-center justify-between w-full border border-white/15 bg-white/10 backdrop-blur transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'flex-col gap-4 py-4 px-4 rounded-2xl'
              : 'py-3 px-4 rounded-2xl'
          }`}
        >
          {/* Top Row: Logo and Hamburger */}
          <div
            className={`flex items-center justify-between ${
              isMobileMenuOpen ? 'w-full' : 'w-full'
            }`}
          >
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src={avatarImage}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 relative"
              aria-label="Toggle menu"
            >
              <span
                className={`hamburger-line absolute ${
                  isMobileMenuOpen
                    ? 'rotate-45'
                    : '-translate-y-2'
                }`}
              />
              <span
                className={`hamburger-line ${
                  isMobileMenuOpen
                    ? 'opacity-0'
                    : 'opacity-100'
                }`}
              />
              <span
                className={`hamburger-line absolute ${
                  isMobileMenuOpen
                    ? '-rotate-45'
                    : 'translate-y-2'
                }`}
              />
            </button>
          </div>

          {/* Expanded Navigation - показується всередині хедера */}
          {isMobileMenuOpen && (
            <div className="flex flex-col gap-2 w-full animate-in fade-in slide-in-from-top-2 duration-300">
              <button
                onClick={() => scrollToSection('hero')}
                className="nav-item flex items-center justify-center w-full"
              >
                {t('navigation.home')}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="nav-item flex items-center justify-center w-full"
              >
                {t('navigation.projects')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-item flex items-center justify-center w-full"
              >
                {t('navigation.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 flex items-center justify-center w-full"
              >
                {t('navigation.contact')}
              </button>
              <div className="px-3 py-1.5 flex items-center justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
