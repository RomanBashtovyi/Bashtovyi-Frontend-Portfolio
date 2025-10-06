'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'uk' ? 'en' : 'uk'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-white hover:text-emerald-300 transition-colors duration-300 ease-in-out font-semibold"
      aria-label="Перемкнути мову"
    >
      {language === 'uk' ? 'EN' : 'УК'}
    </button>
  )
}
