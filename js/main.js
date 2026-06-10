/* =============================================================================
   main.js — Vanilla JS, no dependencies. Two responsibilities:
     1. Mobile nav toggle (hamburger shows/hides .nav__links).
     2. Active-section highlight on the home page using IntersectionObserver.
   ============================================================================= */


/* Mobile nav toggle — clicking the hamburger toggles .is-open on the link list. */
(function initNavToggle() {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Auto-close after a link is tapped (better UX on small screens). */
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') links.classList.remove('is-open');
  });
})();


/* Active-section highlight — adds .is-active to the nav link whose section
   is currently the most visible. Only runs on pages that have anchor sections. */
(function initActiveSection() {
  const sections = document.querySelectorAll('main section[id]');
  if (sections.length === 0 || !('IntersectionObserver' in window)) return;

  const linkFor = (id) =>
    document.querySelector(`.nav__links a[href="#${id}"]`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = linkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) link.classList.add('is-active');
      else link.classList.remove('is-active');
    });
  }, {
    /* Trigger when section crosses the middle band of the viewport. */
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0,
  });

  sections.forEach((s) => observer.observe(s));
})();
