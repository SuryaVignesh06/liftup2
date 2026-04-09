import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================
  // 1. SCROLL REVEAL — with stagger
  // ===========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  // Stagger children in grids
  const gridParents = document.querySelectorAll(
    '.overview-left, .participate-cards, .rewards-grid, .voices-grid, .why-items'
  );
  gridParents.forEach(parent => {
    const children = parent.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      (child as HTMLElement).setAttribute('data-delay', String(i * 100));
    });
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===========================================
  // 2. HAMBURGER + MOBILE NAV
  // ===========================================
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link, .nav-links a');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav?.classList.toggle('open');
    document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileNav?.classList.contains('open')) {
        hamburger?.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hamburger animation
  const bars = hamburger?.querySelectorAll('.bar');
  if (bars && bars.length >= 3) {
    const updateBars = () => {
      const isOpen = hamburger?.classList.contains('open');
      (bars[0] as HTMLElement).style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
      (bars[1] as HTMLElement).style.opacity = isOpen ? '0' : '1';
      (bars[2] as HTMLElement).style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
    };
    hamburger?.addEventListener('click', () => setTimeout(updateBars, 10));
  }

  // ===========================================
  // 3. FAQ ACCORDION
  // ===========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q') as HTMLButtonElement;
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close all
      faqItems.forEach(i => i.classList.remove('open'));
      // toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  // ===========================================
  // 4. NAV ACTIVE LINK ON SCROLL
  // ===========================================
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = '#' + section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveLink);
  });

});
