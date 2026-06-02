import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap, initGsap, easePremium, prefersReducedMotion } from '../lib/gsap';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: 'up' | 'blur' | 'left' | 'scale';
  staggerText?: boolean;
}

const textSelectors = '.eyebrow, h1, h2, h3, h4, p, li, .stat-label, .feature-title, .pillar-title, .output-name, .dl-title, .problem-stat-desc';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'blur',
  staggerText = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    initGsap();

    const fromVars: gsap.TweenVars = { opacity: 0, duration: 1.05, delay: delay / 1000, ease: easePremium };
    const toVars: gsap.TweenVars = { opacity: 1 };

    switch (variant) {
      case 'up':
        Object.assign(fromVars, { y: 48 });
        Object.assign(toVars, { y: 0 });
        break;
      case 'left':
        Object.assign(fromVars, { x: -40 });
        Object.assign(toVars, { x: 0 });
        break;
      case 'scale':
        Object.assign(fromVars, { scale: 0.92, y: 20 });
        Object.assign(toVars, { scale: 1, y: 0 });
        break;
      case 'blur':
      default:
        Object.assign(fromVars, { y: 40, filter: 'blur(12px)' });
        Object.assign(toVars, { y: 0, filter: 'blur(0px)' });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (staggerText) {
          const textEls = el.querySelectorAll<HTMLElement>(textSelectors);
          if (textEls.length > 1) {
            gsap.fromTo(Array.from(textEls), fromVars, { ...toVars, stagger: 0.08, duration: 0.9, delay: delay / 1000 });
            el.classList.add('visible');
            observer.disconnect();
            return;
          }
        }

        gsap.fromTo(el, fromVars, toVars);
        el.classList.add('visible');
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant, staggerText]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
