import { links } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/50 px-5 py-8 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>© 2026 王瑾 Wang Jin. Portfolio for job applications.</p>
        <div className="flex flex-wrap gap-4">
          <a href={links.resume} download className="font-semibold hover:text-berry">
            Resume PDF
          </a>
          <a href={links.portfolio} download className="font-semibold hover:text-berry">
            Portfolio PDF
          </a>
          <a href={links.herbquest} target="_blank" rel="noreferrer" className="font-semibold hover:text-berry">
            HerbQuest
          </a>
        </div>
      </div>
    </footer>
  );
}
