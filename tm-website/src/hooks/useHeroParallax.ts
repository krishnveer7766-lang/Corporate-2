import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, initGsap, killScrollTriggers, prefersReducedMotion } from '../lib/gsap';

export function useHeroParallax(heroRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero || prefersReducedMotion()) return;

    initGsap();
    const media = hero.querySelector('.hero-media') as HTMLElement | null;
    const img = hero.querySelector('.hero-media img') as HTMLElement | null;
    if (!media || !img) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(img, {
        x: x * 24,
        y: y * 16,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(img, { x: 0, y: 0, duration: 1.4, ease: 'power3.out' });
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    const ctx = gsap.context(() => {
      gsap.set(img, { scale: 1.08, transformOrigin: 'center center' });

      gsap.to(img, {
        yPercent: 18,
        scale: 1.18,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, hero);

    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      ctx.revert();
      killScrollTriggers(hero);
    };
  }, [heroRef]);
}
