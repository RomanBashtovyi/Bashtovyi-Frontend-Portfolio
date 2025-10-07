import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/RomanBashtovyi',
  },
  {
    title: 'Telegram',
    href: 'https://t.me/romanuss',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roman-bashtovyi/',
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none" />
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 ">
          <div className="text-white/40 text-center">
            &copy; 2025 Roman Bashtovyi.
            <br /> All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-white/70 hover:text-emerald-300 transition-all duration-300"
              >
                <span className="font-semibold group-hover:translate-x-0.5 transition-transform duration-300">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
