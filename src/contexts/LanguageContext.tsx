'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

type Language = 'uk' | 'en'

interface LanguageContextType {
  language: Language
  locale: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    )
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

// Імпортуємо переклади
import ukCommon from '@/locales/uk/common.json'
import ukSections from '@/locales/uk/sections.json'
import enCommon from '@/locales/en/common.json'
import enSections from '@/locales/en/sections.json'

const translations = {
  uk: { ...ukCommon, ...ukSections },
  en: { ...enCommon, ...enSections },
}

export const LanguageProvider: React.FC<
  LanguageProviderProps
> = ({ children }) => {
  const [language, setLanguageState] =
    useState<Language>('uk')

  useEffect(() => {
    // Перевіряємо збережену мову в localStorage
    const savedLanguage = localStorage.getItem(
      'language'
    ) as Language
    if (
      savedLanguage &&
      (savedLanguage === 'uk' || savedLanguage === 'en')
    ) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)

    // Оновлюємо lang атрибут HTML
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback до української якщо ключ не знайдено
        value = translations.uk
        for (const fallbackKey of keys) {
          value = value?.[fallbackKey]
        }
        break
      }
    }

    // Дебаг логування
    if (
      process.env.NODE_ENV === 'development' &&
      (!value || value === key)
    ) {
      console.log(
        `Translation missing for key: ${key}, language: ${language}`,
        translations[language]
      )
    }

    return value || key
  }

  return (
    <LanguageContext.Provider
      value={{ language, locale: language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
