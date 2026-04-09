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

  // ===========================================
  // 5. COHORT ZERO CAROUSEL + YOUTUBE API
  // ===========================================
  const czTrack = document.getElementById('czTrack');
  const czSlides = document.querySelectorAll('.cz-slide');
  const czPrev = document.getElementById('czPrev');
  const czNext = document.getElementById('czNext');
  
  const studentName = document.getElementById('czStudentName');
  const studentBranch = document.getElementById('czStudentBranch');
  const studentClg = document.getElementById('czStudentClg');

  let czIndex = 0;
  let players: any[] = [];

  // Initialize YouTube Players
  window.onYouTubeIframeAPIReady = () => {
    czSlides.forEach((slide, idx) => {
      const playerDiv = slide.querySelector('[id^="czPlayer"]');
      if (playerDiv) {
        const videoId = (playerDiv as HTMLElement).dataset.videoId;
        players[idx] = new (window as any).YT.Player(playerDiv.id, {
          height: '100%',
          width: '100%',
          videoId: videoId,
          playerVars: {
            'playsinline': 1,
            'rel': 0,
            'modestbranding': 1
          }
        });
      }
    });
  };

  // Load YouTube IFrame API
  if (!document.getElementById('yt-api-script')) {
    const tag = document.createElement('script');
    tag.id = 'yt-api-script';
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }

  function updateCZCarousel() {
    if (!czTrack || czSlides.length === 0) return;

    // Pause all videos
    players.forEach(p => {
      if (p && p.pauseVideo) p.pauseVideo();
    });

    // Remove active class from all
    czSlides.forEach(s => s.classList.remove('active'));
    
    // Add active class to current
    const activeSlide = czSlides[czIndex] as HTMLElement;
    activeSlide.classList.add('active');

    // Shift track
    const offset = -czIndex * 100;
    czTrack.style.transform = `translateX(${offset}%)`;

    // Update Info
    if (studentName) studentName.textContent = activeSlide.dataset.name || '';
    if (studentBranch) studentBranch.textContent = activeSlide.dataset.branch || '';
    if (studentClg) studentClg.textContent = activeSlide.dataset.clg || '';
  }

  czPrev?.addEventListener('click', () => {
    czIndex = (czIndex > 0) ? czIndex - 1 : czSlides.length - 1;
    updateCZCarousel();
  });

  czNext?.addEventListener('click', () => {
    czIndex = (czIndex < czSlides.length - 1) ? czIndex + 1 : 0;
    updateCZCarousel();
  });

  // Initial call to set states
  updateCZCarousel();

});
