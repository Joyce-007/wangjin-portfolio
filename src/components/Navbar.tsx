import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/60 bg-white/70 shadow-sm backdrop-blur-xl' : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3" onClick={handleNav}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-berry to-violet text-lg font-semibold text-white shadow-glass">
            WJ
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-ink">王瑾</span>
            <span className="block text-xs uppercase tracking-[0.18em] text-muted">Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/50 p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-berry lg:inline-flex">
          联系我
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-ink shadow-sm lg:hidden"
          aria-label={open ? '关闭导航' : '打开导航'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/60 bg-white/90 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted hover:bg-blush hover:text-berry" onClick={handleNav}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
