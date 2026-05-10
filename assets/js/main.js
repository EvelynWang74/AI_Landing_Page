/* ================================================================
   main.js — Interactions & progressive enhancement
   No dependencies. Runs after DOM is ready (script at bottom of body).
================================================================ */

(function () {
  'use strict';


  /* --------------------------------------------------------------
     1. AUTO YEAR — footer copyright
  -------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* --------------------------------------------------------------
     2. SCROLL REVEAL
     Observes every .reveal element and adds .is-visible when it
     enters the viewport. Staggers siblings inside the same parent.
  -------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  // Carousel layout — show all panels immediately
  revealEls.forEach((el) => el.classList.add('is-visible'));


  /* --------------------------------------------------------------
     3. FLOATING SOCIAL BAR
     Shows after user scrolls past the hero section height.
     Hides again if user scrolls back to top.
  -------------------------------------------------------------- */
  const floatingBar = document.querySelector('.floating-bar');
  const hero = document.querySelector('.hero');

  if (floatingBar && hero) {
    const showBar = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        floatingBar.classList.add('is-visible');
      } else {
        floatingBar.classList.remove('is-visible');
      }
    };

    // Throttle scroll handler to ~60fps
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          showBar();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Run once on load in case page is already scrolled
    showBar();
  }


  /* --------------------------------------------------------------
     4. GALLERY CAROUSEL — thumbnail → main image swap
  -------------------------------------------------------------- */
  const mainImg     = document.querySelector('.gallery__main-img');
  const mainCaption = document.querySelector('.gallery__main-caption');
  const counter     = document.querySelector('.gallery__counter');
  const thumbs      = document.querySelectorAll('.gallery__thumb');

  if (mainImg && thumbs.length) {
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        // Swap main image
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = thumb.dataset.src;
          mainImg.alt = thumb.dataset.alt;
          mainImg.style.opacity = '1';
        }, 150);

        // Swap caption
        if (mainCaption) mainCaption.innerHTML = thumb.dataset.caption;

        // Update counter
        if (counter) counter.textContent = `${i + 1} / ${thumbs.length}`;

        // Update active state
        thumbs.forEach(t => {
          t.classList.remove('is-active');
          t.removeAttribute('aria-current');
        });
        thumb.classList.add('is-active');
        thumb.setAttribute('aria-current', 'true');
      });
    });
  }


  /* --------------------------------------------------------------
     5. SLIDE NAV DOTS — horizontal page carousel
  -------------------------------------------------------------- */
  const slider    = document.querySelector('.page-slider');
  const dots      = document.querySelectorAll('.slide-nav__dot');
  const panels    = Array.from(document.querySelectorAll('.page-slider > section, .page-slider > footer'));

  if (slider && dots.length && panels.length) {
    // Click dot → scroll to panel
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = parseInt(dot.dataset.slide, 10);
        panels[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });
    });

    // Observe panels → update active dot
    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = panels.indexOf(entry.target);
          dots.forEach((d) => d.classList.remove('is-active'));
          if (dots[i]) dots[i].classList.add('is-active');
        });
      },
      { root: slider, threshold: 0.5 }
    );

    panels.forEach((panel) => dotObserver.observe(panel));
  }


  /* --------------------------------------------------------------
     6. SMOOTH SCROLL — anchor links
  -------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      const offset = 32; // px breathing room above section
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* --------------------------------------------------------------
     6. REDUCED MOTION — respect user OS preference
     Disables all transitions/animations for users who prefer it.
  -------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const applyReducedMotion = (mq) => {
    if (mq.matches) {
      document.documentElement.style.setProperty('--duration-fast', '0ms');
      document.documentElement.style.setProperty('--duration-base', '0ms');
      document.documentElement.style.setProperty('--duration-slow', '0ms');
      // Show all reveal elements immediately
      document.querySelectorAll('.reveal').forEach((el) => {
        el.style.transitionDelay = '0ms';
        el.classList.add('is-visible');
      });
    }
  };

  applyReducedMotion(prefersReducedMotion);
  prefersReducedMotion.addEventListener('change', applyReducedMotion);

})();
