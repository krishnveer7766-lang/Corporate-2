import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, initGsap, easePremium, prefersReducedMotion } from '../lib/gsap';

export default function ScrollAnimations() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    initGsap();
    const ctx = gsap.context(() => {
      /* Page hero backgrounds — scroll parallax */
      document.querySelectorAll<HTMLElement>('.page-hero').forEach(hero => {
        const img = hero.querySelector('.page-hero-bg img') as HTMLElement | null;
        if (!img) return;

        gsap.set(img, { scale: 1.1, transformOrigin: 'center center' });
        gsap.to(img, {
          yPercent: 12,
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });

      /* Page hero text entrance (skip when wrapped in Reveal) */
      document.querySelectorAll<HTMLElement>('.page-hero-content').forEach(content => {
        if (content.querySelector('.reveal')) return;

        const items = content.querySelectorAll<HTMLElement>('.eyebrow, h1, p');
        if (!items.length) return;

        gsap.from(items, {
          y: 36,
          opacity: 0,
          filter: 'blur(12px)',
          duration: 1.05,
          stagger: 0.12,
          ease: easePremium,
          delay: 0.1,
        });
      });

      /* Trust strip */
      const trustItems = document.querySelectorAll<HTMLElement>('.trust-item');
      if (trustItems.length) {
        gsap.from(trustItems, {
          scrollTrigger: {
            trigger: '.trust-strip',
            start: 'top 88%',
          },
          y: 20,
          opacity: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: easePremium,
        });
      }

      /* Section titles not inside Reveal — subtle stagger */
      document.querySelectorAll<HTMLElement>('.section-title-animate').forEach(block => {
        const parts = block.querySelectorAll<HTMLElement>('.eyebrow, h2, h3, p');
        gsap.from(parts, {
          scrollTrigger: { trigger: block, start: 'top 82%' },
          y: 32,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.9,
          stagger: 0.1,
          ease: easePremium,
        });
      });

      /* CTA band text */
      document.querySelectorAll<HTMLElement>('.cta-band-content').forEach(band => {
        const parts = band.querySelectorAll<HTMLElement>(':scope > *');
        gsap.from(parts, {
          scrollTrigger: { trigger: band, start: 'top 80%' },
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: easePremium,
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
