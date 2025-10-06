import { getRequestConfig } from 'next-intl/server'

const locales = ['uk', 'en']

export default getRequestConfig(async ({ locale }) => {
  // Використовуємо українську за замовчуванням якщо локаль не підтримується
  const validLocale = locales.includes(locale as any)
    ? locale
    : 'uk'

  return {
    messages: {
      common: (
        await import(
          `../locales/${validLocale}/common.json`
        )
      ).default,
      sections: (
        await import(
          `../locales/${validLocale}/sections.json`
        )
      ).default,
    },
  }
})
