import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const theme = project.theme;
  const modalShadow = `0 24px 80px ${theme.shadowTint}`;
  const galleryImages = project.gallery.length ? project.gallery : [project.cover, ...project.images];
  const displayedImages = showAllGallery ? galleryImages : galleryImages.slice(0, 8);
  const hasMoreGallery = galleryImages.length > displayedImages.length;
  const hasMultipleImages = galleryImages.length > 1;

  const showPreviousImage = () => {
    setActiveImageIndex((index) => {
      if (index === null) return index;
      return (index - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const showNextImage = () => {
    setActiveImageIndex((index) => {
      if (index === null) return index;
      return (index + 1) % galleryImages.length;
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null);
          return;
        }
        onClose();
      }

      if (activeImageIndex !== null && hasMultipleImages) {
        if (event.key === 'ArrowLeft') showPreviousImage();
        if (event.key === 'ArrowRight') showNextImage();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeImageIndex, galleryImages.length, hasMultipleImages, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink/40 px-4 py-6 backdrop-blur-md sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-scroll mx-auto max-h-[calc(100vh-3rem)] max-w-6xl overflow-y-auto rounded-[2rem] border shadow-glass"
        style={{ background: theme.background, borderColor: theme.border, boxShadow: modalShadow }}
        initial={{ y: 26, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b px-5 py-4 backdrop-blur-xl sm:px-7" style={{ background: theme.surface, borderColor: theme.border }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
              {project.type}
            </p>
            <h3 className="mt-1 text-xl font-semibold sm:text-2xl" style={{ color: theme.titleAccent }}>
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border text-muted transition hover:bg-white/70 hover:text-ink"
            style={{ borderColor: theme.border, color: theme.titleAccent }}
            onClick={onClose}
            aria-label="关闭项目详情"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <button type="button" className="group relative w-full cursor-zoom-in rounded-[1.5rem] border p-2 shadow-sm" style={{ background: theme.imageBg, borderColor: theme.border }} onClick={() => setActiveImageIndex(0)}>
              <img src={project.cover} alt={`${project.title} 封面`} className="max-h-[520px] w-full rounded-[1.25rem] object-contain" loading="lazy" />
              <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-cream/85 px-3 py-2 text-xs font-semibold text-ink opacity-0 shadow-sm backdrop-blur-xl transition group-hover:opacity-100">
                <ZoomIn size={15} />
                放大查看
              </span>
            </button>
            <div className="mt-4 grid gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{ background: theme.accent, boxShadow: `0 14px 30px ${theme.shadowTint}` }}
                >
                  打开 Live Demo
                  <ExternalLink size={18} />
                </a>
              )}
              <div className="grid grid-cols-2 gap-3">
                <Info label="角色" value={project.role} theme={theme} />
                <Info label="时间" value={project.period} theme={theme} />
              </div>
            </div>
          </div>

          <div>
            <p className="text-base leading-8 text-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold" style={{ background: theme.tagBg, borderColor: theme.border, color: theme.tagText }} key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-6">
              <DetailBlock title="项目背景" body={project.details.background ?? project.summary} theme={theme} />
              <DetailBlock title="问题洞察" body={project.details.problem} theme={theme} />
              <ListBlock title="设计方法" items={project.details.methods} theme={theme} />
              <ListBlock title="解决方案" items={project.details.solution} theme={theme} />
              <ListBlock title="我的贡献" items={project.details.contribution} theme={theme} />
              <ListBlock title="项目成果" items={project.details.outcome} theme={theme} />
              {project.details.next && <ListBlock title="后续优化" items={project.details.next} theme={theme} />}
            </div>
          </div>
        </div>

        <section className="border-t px-5 pb-8 pt-6 sm:px-7" style={{ borderColor: theme.border }}>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="text-xl font-semibold" style={{ color: theme.titleAccent }}>
              项目图片
            </h4>
            <p className="text-sm text-muted">点击图片可放大查看细节 · 共 {galleryImages.length} 张</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {displayedImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className="group relative min-h-[230px] cursor-zoom-in rounded-[1.5rem] border p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift sm:h-80"
                style={{ background: theme.imageBg, borderColor: theme.border }}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt={`${project.title} 项目图 ${index + 1}`} className="h-full w-full rounded-[1.25rem] object-contain" loading="lazy" />
                <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-cream/85 px-3 py-2 text-xs font-semibold text-ink opacity-0 shadow-sm backdrop-blur-xl transition group-hover:opacity-100">
                  <ZoomIn size={15} />
                  放大
                </span>
              </button>
            ))}
          </div>
          {hasMoreGallery && (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                style={{ background: theme.accent, boxShadow: `0 14px 30px ${theme.shadowTint}` }}
                onClick={() => setShowAllGallery(true)}
              >
                展开全部图片 / 查看全部页面（{galleryImages.length} 张）
              </button>
            </div>
          )}
        </section>
      </motion.div>

      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/75 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex(null);
            }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-cream/90 text-ink shadow-sm transition hover:bg-white sm:right-8 sm:top-8"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImageIndex(null);
              }}
              aria-label="关闭图片预览"
            >
              <X size={20} />
            </button>

            {hasMultipleImages && (
              <button
                type="button"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-cream/90 text-ink shadow-sm transition hover:bg-white sm:left-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="上一张图片"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <img
              src={galleryImages[activeImageIndex]}
              alt={`${project.title} 放大图 ${activeImageIndex + 1}`}
              className="max-h-[86vh] max-w-[92vw] rounded-[1.25rem] border object-contain shadow-glass"
              style={{ background: theme.surface, borderColor: theme.border }}
              onClick={(event) => event.stopPropagation()}
            />

            {hasMultipleImages && (
              <button
                type="button"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-cream/90 text-ink shadow-sm transition hover:bg-white sm:right-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="下一张图片"
              >
                <ChevronRight size={22} />
              </button>
            )}

            <p className="absolute bottom-5 rounded-full bg-cream/90 px-4 py-2 text-xs font-semibold text-ink shadow-sm">
              {activeImageIndex + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Info({ label, value, theme }: { label: string; value: string; theme: Project['theme'] }) {
  return (
    <div className="rounded-2xl border p-4" style={{ background: theme.accentSoft, borderColor: theme.border }}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: theme.titleAccent }}>
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}

function DetailBlock({ title, body, theme }: { title: string; body: string; theme: Project['theme'] }) {
  return (
    <div>
      <h4 className="text-lg font-semibold" style={{ color: theme.titleAccent }}>
        {title}
      </h4>
      <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
    </div>
  );
}

function ListBlock({ title, items, theme }: { title: string; items: string[]; theme: Project['theme'] }) {
  return (
    <div>
      <h4 className="text-lg font-semibold" style={{ color: theme.titleAccent }}>
        {title}
      </h4>
      <ul className="mt-2 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: theme.bulletColor }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
