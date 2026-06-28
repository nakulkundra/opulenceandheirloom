// --- Custom Luxury Cursor ---
const initCustomCursor = () => {
  const cursor = document.querySelector('.custom-cursor');
  const ring = document.querySelector('.custom-cursor-ring');
  
  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Single render loop for custom cursor elements
  const updateCursor = () => {
    const ease = 0.15;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(updateCursor);
  };
  requestAnimationFrame(updateCursor);

  // Hover triggers for interactive elements
  const hoverables = document.querySelectorAll('a, button, .collection-item, .lookbook-item, .hotspot, .btn-test-nav');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
};


// --- Header & Scroll Handling ---
const initHeader = () => {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};


// --- Mobile Navigation ---
const initMobileNav = () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const links = document.querySelectorAll('.nav-link');

  if (!toggle || !menu) return;

  const toggleMenu = () => {
    toggle.classList.toggle('nav-toggle--active');
    menu.classList.toggle('nav-menu--active');
    document.body.style.overflow = menu.classList.contains('nav-menu--active') ? 'hidden' : '';
  };

  toggle.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('nav-menu--active')) {
        toggleMenu();
      }
    });
  });
};


// --- Testimonials Slider ---
const initTestimonials = () => {
  const container = document.querySelector('.testimonial-wrapper');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.btn-test-prev');
  const nextBtn = document.querySelector('.btn-test-next');
  
  if (!container || slides.length === 0 || !prevBtn || !nextBtn) return;

  let currentIdx = 0;

  const updateSlider = () => {
    container.style.transform = `translateX(-${currentIdx * 100}%)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIdx = (currentIdx === 0) ? slides.length - 1 : currentIdx - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIdx = (currentIdx === slides.length - 1) ? 0 : currentIdx + 1;
    updateSlider();
  });
};


// --- Virtual Walkthrough Drag & Pan ---
const initWalkthrough = () => {
  const container = document.querySelector('.walkthrough-container');
  const pan = document.querySelector('.walkthrough-pan');
  const hotspots = document.querySelectorAll('.hotspot');

  if (!container || !pan) return;

  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // Touch and mouse helpers
  const getPositionX = (e) => e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;

  const dragStart = (e) => {
    // Prevent dragging trigger on hotspot click
    if (e.target.closest('.hotspot')) return;
    
    isDragging = true;
    startX = getPositionX(e);
    pan.style.transition = 'none';
  };

  const dragAction = (e) => {
    if (!isDragging) return;
    
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    
    currentTranslate = prevTranslate + diff;
    
    // Bounds check
    const containerWidth = container.offsetWidth;
    const panWidth = pan.offsetWidth;
    const maxScroll = -(panWidth - containerWidth);
    
    if (currentTranslate > 0) currentTranslate = 0;
    if (currentTranslate < maxScroll) currentTranslate = maxScroll;

    pan.style.transform = `translateX(${currentTranslate}px)`;
  };

  const dragEnd = () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    pan.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  // Mouse events
  container.addEventListener('mousedown', dragStart);
  window.addEventListener('mousemove', dragAction);
  window.addEventListener('mouseup', dragEnd);

  // Touch events
  container.addEventListener('touchstart', dragStart);
  window.addEventListener('touchmove', dragAction);
  window.addEventListener('touchend', dragEnd);

  // Close hotspots on clicking elsewhere inside walkthrough
  container.addEventListener('click', (e) => {
    if (!e.target.closest('.hotspot')) {
      hotspots.forEach(hs => hs.classList.remove('hotspot--active'));
    }
  });

  // Toggle hotspots
  hotspots.forEach(hs => {
    hs.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = hs.classList.contains('hotspot--active');
      hotspots.forEach(item => item.classList.remove('hotspot--active'));
      if (!isActive) {
        hs.classList.add('hotspot--active');
      }
    });
  });
};


// --- Lookbook sliding tag-drawer ---
const initTagDrawer = () => {
  const items = document.querySelectorAll('.lookbook-item');
  const drawer = document.getElementById('lookbook-drawer');
  const overlay = drawer ? drawer.querySelector('.tag-drawer__overlay') : null;
  const closeBtn = drawer ? drawer.querySelector('.btn-drawer-close') : null;
  const tagImage = document.getElementById('tag-image');
  const tagNum = document.getElementById('tag-num');
  const tagTitle = document.getElementById('tag-title');
  const tagFabric = document.getElementById('tag-fabric');
  const tagDesign = document.getElementById('tag-design');
  const tagInquireBtn = document.getElementById('btn-tag-inquire');

  if (items.length === 0 || !drawer || !closeBtn || !tagImage || !tagNum || !tagTitle || !tagFabric || !tagDesign) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const fabric = item.getAttribute('data-fabric') || 'Premium Organic Fiber';
      const design = item.getAttribute('data-design') || 'Minimalist bespoke tailoring';
      const num = item.getAttribute('data-num') || '00';
      const title = item.getAttribute('data-title') || 'Bespoke Silhouette';

      if (img) {
        tagImage.src = img.src;
        tagImage.alt = img.alt || title;
        tagNum.textContent = num;
        tagTitle.textContent = title;
        tagFabric.textContent = fabric;
        tagDesign.textContent = design;

        drawer.classList.add('tag-drawer--active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeDrawer = () => {
    drawer.classList.remove('tag-drawer--active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeDrawer);
  
  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  if (tagInquireBtn) {
    tagInquireBtn.addEventListener('click', () => {
      closeDrawer();
      // Smooth scroll to visit section
      const visitSec = document.getElementById('visit');
      if (visitSec) {
        visitSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Hover-Zoom fabric magnification effect inside the garment tag
  const tagImageContainer = drawer ? drawer.querySelector('.garment-tag__image-container') : null;
  if (tagImageContainer && tagImage) {
    tagImageContainer.addEventListener('mousemove', (e) => {
      const rect = tagImageContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      tagImage.style.transformOrigin = `${x}% ${y}%`;
      tagImage.style.transform = 'scale(2.2)';
    });

    tagImageContainer.addEventListener('mouseleave', () => {
      tagImage.style.transform = 'scale(1)';
      tagImage.style.transformOrigin = 'center center';
    });
  }

  // ESC key support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('tag-drawer--active')) {
      closeDrawer();
    }
  });
};


// --- CSS Scroll Timeline Fallback ---
const initScrollFallback = () => {
  // Check if browser does NOT support Scroll-Driven Animations natively
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    
    // Apply styling preparation
    const elementsToReveal = document.querySelectorAll('.reveal-up, .reveal-stagger-1, .reveal-stagger-2, .reveal-stagger-3');
    
    elementsToReveal.forEach((el) => {
      el.classList.add('reveal-fallback-initial');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-fallback-active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.15
    });

    elementsToReveal.forEach(el => observer.observe(el));

    // Fallback for Hero Parallax Image & Content
    const heroPan = document.querySelector('.hero-split__parallax-wrapper');
    const heroContent = document.querySelector('.hero-split__text-inner');
    
    if (heroPan || heroContent) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            
            if (heroPan) {
              heroPan.style.transform = `translateY(${scrolled * 0.12}px)`;
            }
            if (heroContent) {
              heroContent.style.transform = `translateY(${scrolled * 0.08}px)`;
              heroContent.style.opacity = Math.max(0, 1 - (scrolled / 600));
            }
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }
};


// --- Additional CSS rule for fallback animations inject ---
const injectFallbackCSS = () => {
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .reveal-fallback-initial {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .reveal-fallback-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(styleSheet);
  }
};


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  injectFallbackCSS();
  initCustomCursor();
  initHeader();
  initMobileNav();
  initTestimonials();
  initWalkthrough();
  initTagDrawer();
  initScrollFallback();
});
