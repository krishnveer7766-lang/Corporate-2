import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap, initGsap, easePremium, prefersReducedMotion } from '../lib/gsap';

interface Props {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  split?: 'words' | 'chars';
  delay?: number;
}

export default function TextReveal({
  children,
  as: Tag = 'span',
  className = '',
  split = 'words',
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      return;
    }

    initGsap();
    const units = split === 'chars' ? children.split('') : children.split(/\s+/);
    el.innerHTML = units
      .map((unit, i) => {
        const content = split === 'chars' ? unit : unit + (i < units.length - 1 ? '&nbsp;' : '');
        return `<span class="split-wrap" aria-hidden="true"><span class="split-unit">${content}</span></span>`;
      })
      .join(split === 'chars' ? '' : ' ');

    const units_el = el.querySelectorAll<HTMLElement>('.split-unit');
    gsap.set(units_el, { y: '110%', opacity: 0, transformOrigin: '50% 100%' });

    const tween = gsap.to(units_el, {
      y: 0,
      opacity: 1,
      duration: 0.95,
      stagger: split === 'chars' ? 0.02 : 0.06,
      delay,
      ease: easePremium,
    });

    return () => {
      tween.kill();
      units_el.forEach(u => {
        u.style.opacity = '1';
        u.style.transform = 'none';
      });
    };
  }, [children, split, delay]);

  return <Tag ref={ref as never} className={`text-reveal ${className}`} aria-label={children} />;
}

/** Line-by-line wrapper for gradient / long phrases */
export function TextRevealLine({ children, className = '', delay = 0 }: { children: string; className?: string; delay?: number }) {
  return <TextReveal as="span" className={className} delay={delay}>{children}</TextReveal>;
}

export function TextRevealBlock({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    initGsap();
    gsap.fromTo(
      el,
      { y: 28, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: easePremium, delay: 0.15 }
    );
  }, []);

  return (
    <div ref={ref} className={`text-reveal-block ${className}`} style={{ opacity: prefersReducedMotion() ? 1 : 0 }}>
      {children}
    </div>
  );
}
