'use strict';

// Element toggle function for showing/hiding elements
const toggleActiveClass = (elem) => {
  elem.classList.toggle("active");
};

// Sidebar toggle setup
// Sidebar toggle setup
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => toggleActiveClass(sidebar));
}

// Testimonials modal setup
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the modal and overlay
const toggleTestimonialsModal = () => {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

// Set up each testimonial item to open the modal when clicked
if (testimonialsItems.length > 0) {
  testimonialsItems.forEach(item => {
    item.addEventListener("click", () => {
      const avatar = item.querySelector("[data-testimonials-avatar]").src;
      const title = item.querySelector("[data-testimonials-title]").innerText;
      const text = item.querySelector("[data-testimonials-text]").innerText;

      if (modalContainer) {
        modalContainer.querySelector("[data-modal-img]").src = avatar;
        modalContainer.querySelector("[data-modal-title]").innerText = title;
        modalContainer.querySelector("[data-modal-text] p").innerText = text;

        toggleTestimonialsModal();
      }
    });
  });
}

// Contact items (Email / Phone / Location) should open the same modal with contact details
const contactLinks = document.querySelectorAll('.contact-link');

if (contactLinks.length > 0) {
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const item = link.closest('.contact-item');
      if (!item) return;

      const title = item.querySelector('.contact-title')?.innerText || 'Contact';
      const value = link.innerText.trim();

      // Use the profile avatar for contact modal
      const profileAvatar = document.querySelector('.avatar-box img')?.src || '';

      if (modalContainer) {
        modalContainer.querySelector('[data-modal-img]').src = profileAvatar;
        modalContainer.querySelector('[data-modal-title]').innerText = title;
        modalContainer.querySelector('[data-modal-text] p').innerText = value;

        toggleTestimonialsModal();
      }
    });
  });
}

// Close modal on overlay or close button click
if (modalCloseBtn) modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
if (overlay) overlay.addEventListener("click", toggleTestimonialsModal);

// Custom select box for project filtering
const selectBox = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValueDisplay = document.querySelector("[data-select-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll("[data-filter-item]");

// Toggle visibility of select dropdown
if (selectBox) {
  selectBox.addEventListener("click", () => toggleActiveClass(selectBox));
}

// Function to filter project items based on selected category
const applyFilter = (category) => {
  console.log("Filtering category:", category); // Debug statement
  if (projectItems.length > 0) {
      projectItems.forEach(item => {
        console.log("Project category:", item.dataset.category); // Debug statement
        if (category === "all" || category === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
  }
};

// Set up each select item to filter projects
if (selectItems.length > 0) {
  selectItems.forEach(item => {
    item.addEventListener("click", () => {
      const category = item.innerText.toLowerCase();
      console.log("Selected category:", category); // Debug statement
      selectValueDisplay.innerText = item.innerText;
      toggleActiveClass(selectBox);
      applyFilter(category);
    });
  });
}

// Set up each filter button to filter projects
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.innerText.toLowerCase();
      console.log("Button category:", category); // Debug statement
      if (selectValueDisplay) selectValueDisplay.innerText = button.innerText;
      applyFilter(category);

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable form submit button only if form is valid
if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

// Page navigation setup
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to handle page navigation
if (navigationLinks.length > 0) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      const pageName = link.innerText.toLowerCase();

      // Remove 'active' class from all pages and navigation links
      pages.forEach(page => page.classList.remove("active"));
      navigationLinks.forEach(navLink => navLink.classList.remove("active"));

      // Activate the clicked page and link
      const currentPage = document.querySelector(`[data-page="${pageName}"]`);
      if (currentPage) {
        currentPage.classList.add("active");
        link.classList.add("active");
      }

      // Scroll to the top after navigation
      window.scrollTo(0, 0);
    });
  });
}

// Theme toggle functionality with localStorage support
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme preference
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light-mode');
  if (themeToggle) themeToggle.classList.add('light-mode');
  // notify canvases that theme is light on load so they can pick correct colors
  document.dispatchEvent(new Event('themechange'));
}

// Toggle theme and save the current preference to localStorage
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    themeToggle.classList.toggle('light-mode');
    
    const currentTheme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    // notify other modules (canvases) to update colors when theme changes
    document.dispatchEvent(new Event('themechange'));
  });
}


  /* --------- Canvas animated background (lightweight) --------- */
  (function animatedBackground() {
    // Respect user preference for reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const DPR = window.devicePixelRatio || 1;
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.mixBlendMode = 'screen';
    canvas.style.opacity = '0.9';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;

    function resize() {
      width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    // Blob definition
    const blobs = [];

    function getBlobColors() {
      const isLight = document.documentElement.classList.contains('light-mode');
      if (isLight) {
        return [
          'rgba(255,204,0,0.16)', // gold
          'rgba(255,180,30,0.12)', // warm gold
          'rgba(255,220,120,0.08)'
        ];
      }
      return [
        'rgba(160,77,255,0.15)', // purple
        'rgba(0,229,255,0.12)',  // cyan
        'rgba(255,77,79,0.08)'   // soft red
      ];
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function createBlobs(n = 6) {
      blobs.length = 0;
      for (let i = 0; i < n; i++) {
        const colors = getBlobColors();
        blobs.push({
          x: rand(0, width),
          y: rand(0, height),
          r: rand(Math.min(width, height) * 0.15, Math.min(width, height) * 0.45),
          vx: rand(-0.02, 0.02),
          vy: rand(-0.01, 0.01),
          color: colors[i % colors.length]
        });
      }
    }

    let last = 0;
    const fpsInterval = 1000 / 30; // throttle to ~30fps

    function animate(ts) {
      requestAnimationFrame(animate);
      if (!last) last = ts;
      const elapsed = ts - last;
      if (elapsed < fpsInterval) return;
      last = ts - (elapsed % fpsInterval);

      // update
      for (const b of blobs) {
        b.x += b.vx * width;
        b.y += b.vy * height;
        // wrap-around
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;
      }

      // draw
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(0.6, b.color.replace(/,[^,]+\)$/, ',0.06)'));
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // initialize and run
    function init() {
      resize();
      createBlobs(6);
      requestAnimationFrame(animate);
    }

    // update blobs when theme changes
    document.addEventListener('themechange', () => {
      createBlobs(6);
    });

    // handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createBlobs(6);
      }, 120);
    });

    init();

    // expose toggle for debugging
    window.__bgCanvas = canvas;
  })();


  /* --------- Border overlay: cursor-follow glow + edge particles --------- */
  (function borderOverlay() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const DPR = window.devicePixelRatio || 1;
    const canvas = document.createElement('canvas');
    canvas.id = 'border-canvas';
    const style = canvas.style;
    style.position = 'fixed';
    style.inset = '0';
    style.width = '100%';
    style.height = '100%';
    style.pointerEvents = 'none';
    style.zIndex = '2';
    style.mixBlendMode = 'screen';
    style.opacity = '0.9';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    function resize() {
      width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    // cursor state
    let cx = width / 2;
    let cy = height / 2;
    let lastMove = 0;

    window.addEventListener('mousemove', (e) => {
      cx = e.clientX;
      cy = e.clientY;
      lastMove = Date.now();
    }, {passive: true});

    // fallback for touch: center
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        cx = e.touches[0].clientX; cy = e.touches[0].clientY;
      }
    }, {passive: true});

    // particles along the border
    const particles = [];
    // click ripples
    const ripples = [];
    function rand(min, max) { return Math.random() * (max - min) + min; }
    function createParticles(n = 30) {
      particles.length = 0;
      for (let i = 0; i < n; i++) {
        const side = Math.floor(rand(0,4));
        let x, y;
        if (side === 0) { x = rand(0, width); y = -2; }
        if (side === 1) { x = width + 2; y = rand(0, height); }
        if (side === 2) { x = rand(0, width); y = height + 2; }
        if (side === 3) { x = -2; y = rand(0, height); }
        particles.push({ x, y, vx: rand(-0.2,0.2), vy: rand(-0.2,0.2), r: rand(0.6,2.2), life: rand(2000,8000) });
      }
    }

    // create a ripple at x,y
    function createRipple(x, y, opts = {}) {
      const maxR = opts.maxR || Math.max(60, Math.min(220, Math.hypot(width, height) * 0.08));
      const duration = opts.duration || 600;
      ripples.push({ x, y, start: Date.now(), maxR, duration });
    }

    // click/tap to create ripple
    window.addEventListener('click', (e) => {
      createRipple(e.clientX, e.clientY);
    }, { passive: true });
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) createRipple(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    let last = 0;
    const fpsInterval = 1000 / 30;

    function animate(ts) {
      requestAnimationFrame(animate);
      if (!last) last = ts;
      const elapsed = ts - last;
      if (elapsed < fpsInterval) return;
      last = ts - (elapsed % fpsInterval);

      // clear
      ctx.clearRect(0,0,width,height);

    // draw cursor glow as radial gradient clipped to edges (so it feels like a border glow)
    // make the glow more focused: smaller multiplier reduces spread
    const gradientRadius = Math.max(90, Math.min(300, Math.hypot(width, height) * 0.07));

      // choose colors based on theme
      const isLight = document.documentElement.classList.contains('light-mode');
      const glowColor = isLight ? 'rgba(255,204,0,' : 'rgba(255,40,40,'; // open partial, we'll add alpha

  // NO cursor glow: we removed the continuous cursor radial glow per user request.
  // The visual glow will now be produced by ripples on click/tap.

    // draw ripples (click/tap) - use an ease-out for radius and render a glow behind the ring
    const now = Date.now();
    function easeOutQuad(t) { return t * (2 - t); }
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      const t = (now - r.start) / r.duration;
      if (t >= 1) { ripples.splice(i, 1); continue; }
      const rt = easeOutQuad(t);
      const radius = r.maxR * rt;
      const alpha = 1 - t;

      // draw glow behind the ripple: a soft radial gradient filling a slightly larger radius
      const glowRadius = radius * 1.6 + 6; // slightly larger than the ring
      const innerGlow = Math.max(6, radius * 0.45);
      const gg = ctx.createRadialGradient(r.x, r.y, innerGlow, r.x, r.y, glowRadius);
      if (isLight) {
        gg.addColorStop(0, `rgba(255,204,0,${0.22 * alpha})`);
        gg.addColorStop(0.35, `rgba(255,204,0,${0.10 * alpha})`);
      } else {
        gg.addColorStop(0, `rgba(255,40,40,${0.22 * alpha})`);
        gg.addColorStop(0.35, `rgba(255,40,40,${0.10 * alpha})`);
      }
      gg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(r.x, r.y, glowRadius, 0, Math.PI * 2); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      // draw the ripple ring on top
      ctx.lineWidth = 2 + 6 * rt;
      ctx.strokeStyle = isLight ? `rgba(255,204,0,${0.18 * alpha})` : `rgba(255,40,40,${0.18 * alpha})`;
      ctx.beginPath(); ctx.arc(r.x, r.y, radius, 0, Math.PI * 2); ctx.stroke();
    }

  // update and draw particles
      for (let i = particles.length -1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * (elapsed * 0.06);
        p.y += p.vy * (elapsed * 0.06);
        p.life -= elapsed;
        // small fade based on life
        const alpha = Math.max(0, Math.min(1, p.life / 4000));
        ctx.fillStyle = isLight ? `rgba(255,204,0,${0.12 * alpha})` : `rgba(255,40,40,${0.12 * alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();

        // remove if offscreen for a while
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10 || p.life <= 0) {
          // respawn at random edge
          const side = Math.floor(rand(0,4));
          if (side === 0) { p.x = rand(0, width); p.y = -2; }
          if (side === 1) { p.x = width + 2; p.y = rand(0, height); }
          if (side === 2) { p.x = rand(0, width); p.y = height + 2; }
          if (side === 3) { p.x = -2; p.y = rand(0, height); }
          p.vx = rand(-0.2,0.2); p.vy = rand(-0.2,0.2); p.r = rand(0.6,2.2); p.life = rand(2000,8000);
        }
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    function init() { resize(); createParticles(36); requestAnimationFrame(animate); }
    let resizeTimer;
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(()=>{ resize(); createParticles(36); }, 120); });
    init();

    // expose
    window.__borderCanvas = canvas;
  })();

// Check for hash on load to navigate to specific section
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const pageName = window.location.hash.substring(1);
    const targetLink = Array.from(navigationLinks).find(link => link.innerText.toLowerCase() === pageName);
    if (targetLink) {
      targetLink.click();
    }
  }
});

