import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, initGsap, easePremium, prefersReducedMotion } from '../lib/gsap';

const HERO_SELECTORS =
  '.hero-badge, .hero-title-line, .hero-sub, .hero-ctas, .stat-card';

function showHeroText(hero: HTMLElement) {
  hero.querySelectorAll<HTMLElement>(HERO_SELECTORS).forEach(el => {
    el.style.opacity = '1';
    el.style.filter = 'none';
    el.style.transform = 'none';
    el.style.visibility = 'visible';
  });
}

export function useHeroEntrance(heroRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    if (prefersReducedMotion()) {
      showHeroText(hero);
      return;
    }

    initGsap();

    const ctx = gsap.context(() => {
      const badge = hero.querySelector<HTMLElement>('.hero-badge');
      const lines = hero.querySelectorAll<HTMLElement>('.hero-title-line');
      const sub = hero.querySelector<HTMLElement>('.hero-sub');
      const ctas = hero.querySelector<HTMLElement>('.hero-ctas');
      const stats = hero.querySelectorAll<HTMLElement>('.stat-card');

      const tl = gsap.timeline({
        defaults: { ease: easePremium },
        onComplete: () => showHeroText(hero),
      });

      if (badge) {
        gsap.set(badge, { opacity: 0, y: 16, filter: 'blur(6px)' });
        tl.to(badge, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75 }, 0.1);
      }

      if (lines.length) {
        gsap.set(lines, { opacity: 0, y: 28 });
        tl.to(lines, { opacity: 1, y: 0, duration: 0.85, stagger: 0.14 }, 0.25);
      }

      if (sub) {
        gsap.set(sub, { opacity: 0, y: 20, filter: 'blur(6px)' });
        tl.to(sub, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }, 0.55);
      }

      if (ctas) {
        gsap.set(ctas, { opacity: 0, y: 16 });
        tl.to(ctas, { opacity: 1, y: 0, duration: 0.75 }, 0.75);
      }

      if (stats.length) {
        gsap.set(stats, { opacity: 0, y: 24, scale: 0.96 });
        tl.to(stats, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08 }, 0.85);
      }
    }, hero);

    return () => {
      ctx.revert();
      showHeroText(hero);
    };
  }, [heroRef]);
}
