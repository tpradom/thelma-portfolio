/* ─── Dark mode toggle ────────────────────────────── */
(function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
})();

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

/* ─── Nav scroll shadow ───────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── Scroll reveal ───────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

// Immediately show hero elements without waiting for scroll
document.querySelectorAll('#top .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 80 + i * 120);
});

// Observe everything else
document.querySelectorAll('.reveal:not(#top .reveal)').forEach(el => revealObserver.observe(el));

/* ─── Work filter ─────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems  = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    workItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ─── Particle Swell ──────────────────────────────── */
(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('top');
  const SPACING = 44;
  const MOUSE_RADIUS = 160;
  const SWELL_MAX = 4;
  // lerp factors tuned to 150ms approach / 700ms retreat at 60fps
  const LERP_IN  = 0.18;
  const LERP_OUT = 0.04;

  let particles = [];
  let mouse = { x: -9999, y: -9999 };
  let rafId;

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    buildGrid();
  }

  function buildGrid() {
    particles = [];
    const cols = Math.ceil(canvas.width  / SPACING) + 1;
    const rows = Math.ceil(canvas.height / SPACING) + 1;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        particles.push({
          x:     c * SPACING,
          y:     r * SPACING,
          phase: Math.random() * Math.PI * 2,
          speed: 0.35 + Math.random() * 0.45,
          base:  0.4 + Math.random() * 0.3,
          pull:  0,
        });
      }
    }
  }

  function tick(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const target = Math.max(0, 1 - dist / MOUSE_RADIUS);

      // fast approach, slow retreat — mirrors cubic-bezier(0.4, 0, 0.2, 1)
      p.pull += (target - p.pull) * (target > p.pull ? LERP_IN : LERP_OUT);

      const wave  = (Math.sin(t * 0.0007 * p.speed + p.phase) + 1) / 2;
      const r     = p.base + wave * 0.8 + p.pull * SWELL_MAX;
      const alpha = 0.07 + wave * 0.06 + p.pull * 0.2;

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(90,80,255,${alpha})`;
      ctx.fill();
    }

    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  window.addEventListener('resize', resize, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(tick);
    }
  });

  resize();
  rafId = requestAnimationFrame(tick);
}());

/* ─── Work Carousel ───────────────────────────────── */
(function () {
  const carousel = document.getElementById('work-carousel');
  if (!carousel) return;
  const slides = carousel.querySelectorAll('.work-slide');
  const prevBtn = document.getElementById('work-prev');
  const nextBtn = document.getElementById('work-next');
  const currentEl = document.getElementById('work-current');
  let current = 0;

  function scrollTo(idx) {
    current = Math.max(0, Math.min(slides.length - 1, idx));
    slides[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    if (currentEl) currentEl.textContent = current + 1;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => scrollTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollTo(current + 1));

  // drag-to-scroll
  let isDown = false, startX, scrollLeft;
  carousel.addEventListener('mousedown', e => {
    isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => isDown = false);
  carousel.addEventListener('mouseup', () => isDown = false);
  carousel.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });

  // sync counter on scroll
  carousel.addEventListener('scroll', () => {
    const slideW = slides[0].offsetWidth + 20;
    const idx = Math.round(carousel.scrollLeft / slideW);
    if (idx !== current) { current = idx; if (currentEl) currentEl.textContent = current + 1; }
  }, { passive: true });
}());

/* ─── Smooth anchor links ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
