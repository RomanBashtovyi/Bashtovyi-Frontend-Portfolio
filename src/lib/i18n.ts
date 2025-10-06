import { getRequestConfig } from 'next-intl/server'

const locales = ['uk', 'en']

export default getRequestConfig(async ({ locale }) => {
  // Використовуємо українську за замовчуванням якщо локаль не підтримується
  const validLocale: string = locales.includes(
    locale as any
  )
    ? (locale as string)
    : 'uk'

  return {
    locale: validLocale,
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
