import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 pt-12 lg:py-24 lg:pt-20"
    >
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl py-8 px-10 text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life?
                Let&apos;s connect and discuss how I can
                help you achieve your goals.
              </p>
            </div>
            <div>
              <a
                href="mailto:your-email@example.com"
                className="btn-dark"
              >
                <span className="font-semibold">
                  Contact Me
                </span>
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
