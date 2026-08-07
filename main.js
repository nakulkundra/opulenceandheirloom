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


// --- Redesigned Lookbook Explorer ---
const initLookbookExplorer = () => {
  const LOOKBOOK_DATA = {
    western: [
      { num: '02', title: 'Pure Linen Weave', fabric: '100% Belgian flax organic linen, raw natural color, unbleached yarns, 220 GSM', design: 'Artisanal hand-stitched detailing, reinforced seams, classic relaxed fit weave', img: './assets/lookbook_weave.webp' },
      { num: '04', title: 'Flow & Movement', fabric: 'Premium mulberry silk & organic linen blend, soft fluid drape, subtle sheen, 130 GSM', design: 'Relaxed flowy maxi dress, deep V-neck, high slit, flared sleeves with button cuffs', img: './assets/lookbook_flow.webp' },
      { num: '05', title: 'Minimalist Sage', fabric: '100% Breathable linen-cotton blend, dyed in light sage tone, 160 GSM', design: 'Sleek draped slip dress, minimalist double shoulder straps, side slits, clean back neckline', img: './assets/lookbook_05.webp' },
      { num: '06', title: 'Linen Tailoring', fabric: 'Mid-weight organic European linen, structured and crisp, 240 GSM', design: 'Deconstructed tailored linen blazer, single-breasted, notched lapels, shell button details', img: './assets/lookbook_06.webp' },
      { num: '07', title: 'Summer Solstice', fabric: 'Lightweight organic cotton & flax linen, extremely breathable, 120 GSM', design: 'Breezy tier-draped sundress, adjustable drawstrings, raw fringe trim accents', img: './assets/lookbook_07.webp' },
      { num: '09', title: 'Sculpted Linen', fabric: 'Structured organic flax linen, high-density weave, opaque finish, 200 GSM', design: 'Asymmetric sculpted top, structural side draping, high neckline, clean geometric lines', img: './assets/lookbook_09.webp' },
      { num: '10', title: 'Nordic Earth', fabric: 'Natural clay-dyed organic linen, mid-weight, soft-washed texture, 180 GSM', design: 'Minimalist lounge coordinates, elasticated waist trouser, relaxed utility collar tunic', img: './assets/lookbook_10.webp' },
      { num: '13', title: 'Bespoke Indigo', fabric: 'Indigo-fermented organic linen, double-dyed, rich natural variance, 170 GSM', design: 'Relaxed shirt jacket, band collar, patch utility pockets, flat-felled seam construction', img: './assets/lookbook_13.webp' },
      { num: '31', title: 'Contemporary Western', fabric: 'Premium organic cotton-linen blend, structured yet breathable, 200 GSM', design: 'Minimalist tailored western silhouette, clean lines, neutral tones', img: './assets/ladies_western.webp' }
    ],
    ethnic: [
      { num: '01', title: 'Ethnic Modernity', fabric: 'Hand-woven Organic Linen-Silk blend, dyed with natural pigments, 180 GSM', design: 'Contemporary draped ethnic silhouette, asymmetric layered hemline, side inseam pockets', img: './assets/lookbook_ethnic.webp' },
      { num: '08', title: 'Heritage Thread', fabric: 'Fine hand-loom luxury linen saree, spun with hand-twisted metallic silver zari threads, 110 GSM', design: 'Traditional contemporary Indian drape, custom fringe border, modern clean pleating', img: './assets/lookbook_08.webp' },
      { num: '12', title: 'Ethereal Drapes', fabric: 'Sheer luxury organza-linen blend, translucent weave, raw silk accents, 90 GSM', design: 'Fluid wrap dupatta scarf, hand-rolled hems, minimalist fine stitch border', img: './assets/lookbook_12.webp' },
      { num: '14', title: 'Royal Zari Saree', fabric: 'Vibrant hand-woven Banarasi silk with pure gold zari borders, 220 GSM', design: 'Pre-stitched pleats for effortless wear, featuring a sleek high bun and crimson lip styling', img: './assets/saree_01.webp' },
      { num: '15', title: 'Emerald Elegance Saree', fabric: 'Premium georgette with intricate gold hand-embroidery, 160 GSM', design: 'Stitched silhouette, elegant soft waves hairstyle, and nude-pink lip styling', img: './assets/saree_02.webp' },
      { num: '16', title: 'Mustard Blossom Saree', fabric: 'Fine hand-loom cotton-silk blend, lightweight and breathable, 140 GSM', design: 'Traditional pre-stitched drape, paired with a flower-adorned braid and ruby red lips', img: './assets/saree_03.webp' },
      { num: '17', title: 'Magenta Organza Saree', fabric: 'Delicate sheer organza with scalloped silver embroidery, 110 GSM', design: 'Pre-stitched drape, styled with a modern messy bun and coral lips', img: './assets/saree_04.webp' },
      { num: '18', title: 'Tangerine Satin Saree', fabric: 'Ultra-smooth high-shine satin silk, fluid contemporary drape, 180 GSM', design: 'Sleek pre-stitched design, styled with side-swept curls and berry-toned lips', img: './assets/saree_05.webp' },
      { num: '32', title: 'Modern Ethnic Drape', fabric: 'Hand-loom luxury linen-silk blend with fine zari border, 150 GSM', design: 'Contemporary ethnic drape, comfortable relaxed fit with traditional motifs', img: './assets/ladies_ethnic.webp' }
    ],
    lounge: [
      { num: '19', title: 'Classic Ivory Kurti', fabric: 'Fine organic cotton with soft denim details, 140 GSM', design: 'Relaxed fitting kurti with high side-slits, styled with raw-edge detailing', img: './assets/lounge_01.webp' },
      { num: '20', title: 'Sage Linen Coordinates', fabric: '100% Belgian flax organic linen, breathable weave, 180 GSM', design: 'Coordinated button-down shirt and relaxed wide-leg trousers in soothing sage', img: './assets/lounge_02.webp' },
      { num: '21', title: 'Peach Blossom Kurti', fabric: 'Super-soft pure malmal cotton, hand-dyed, 110 GSM', design: 'Delicate floral hand-embroidery around the yoke, relaxed A-line silhouette', img: './assets/lounge_03.webp' },
      { num: '22', title: 'Casual Linen & Denim', fabric: 'Premium mid-weight organic linen and soft denim blend, 190 GSM', design: 'Scandinavian-inspired structured shirt paired with relaxed utility denim', img: './assets/lounge_04.webp' },
      { num: '23', title: 'Taupe Leisure Set', fabric: 'Premium double-layered organic cotton-knit, extra soft, 240 GSM', design: 'Matching ribbed knit lounge top and loose-fit pants, ideal for travel or home', img: './assets/lounge_05.webp' },
      { num: '24', title: 'Indigo Short Kurti', fabric: '100% Hand-loom cotton, naturally fermented indigo dye, 150 GSM', design: 'Short tunic style with keyhole neckline and fine geometric stitch details', img: './assets/lounge_06.webp' },
      { num: '25', title: 'Ethereal Cream Kaftan', fabric: 'Ultra-lightweight linen-silk blend, translucent drape, 95 GSM', design: 'Flowy oversized kaftan silhouette with delicate raw fringed hemlines', img: './assets/lounge_07.webp' },
      { num: '26', title: 'Charcoal Leisure Joggers', fabric: 'Brushed organic cotton-fleece and linen blend, 280 GSM', design: 'Premium lounge joggers with elasticated waistband and matching pullover', img: './assets/lounge_08.webp' },
      { num: '27', title: 'Dusty Rose Kurti Set', fabric: 'Pure organic cotton-linen blend, soft-washed finish, 160 GSM', design: 'Relaxed-fit tunic shirt paired with matching wide-leg palazzo pants', img: './assets/lounge_09.webp' },
      { num: '28', title: 'Boyfriend Denim & White Linen', fabric: 'Classic Belgian flax white linen and premium structured cotton denim, 200 GSM', design: 'Effortless weekend styling featuring a loose-fit button-down and relaxed denim', img: './assets/lounge_10.webp' },
      { num: '29', title: 'Mustard Tunic', fabric: 'Pure organic linen, colored with eco-friendly ochre pigments, 170 GSM', design: 'Earthy relaxed tunic with a minimal front slit and clean band collar', img: './assets/lounge_11.webp' },
      { num: '30', title: 'Olive Sanctuary Robe', fabric: 'Luxury waffle-weave organic cotton, highly absorbent and soft, 320 GSM', design: 'Relaxed robe silhouette with wide sleeves, patch pockets, and waist tie', img: './assets/lounge_12.webp' },
      { num: '33', title: 'Resort & Leisure Wear', fabric: '100% Belgian flax organic linen, pre-washed for ultimate softness, 180 GSM', design: 'Fluid loose-fitting resort coordinates, breezy silhouette for relaxed afternoons', img: './assets/resort_wear.webp' }
    ],
    kids: [
      { num: '03', title: 'Kids Festive Edit', fabric: 'Super-soft organic combed cotton & linen blend, hypoallergenic, breathable, 140 GSM', design: 'Kids occasion tunic dress with soft gathering, minimal round collar, natural wood button back closure', img: './assets/lookbook_kids.webp' },
      { num: '11', title: 'Playful Linen', fabric: '100% Organic linen, skin-friendly dyes, light blue wash, 150 GSM', design: 'Kids matching holiday play sets, relaxed drawstring shorts, collarless easy shirt', img: './assets/lookbook_11.webp' },
      { num: '34', title: 'Kids Festive Edit', fabric: 'Super-soft organic combed cotton & linen, hypoallergenic, 130 GSM', design: 'Kids matching holiday play sets, relaxed drawstring shorts and collarless easy shirt', img: './assets/kids_fashion.webp' }
    ]
  };

  const root = document.getElementById('lookbook-explorer-root');
  if (!root) return;

  // Render initial skeleton
  root.innerHTML = `
    <div class="explorer-nav">
      <button class="explorer-nav-btn explorer-nav-btn--active" data-style="western">Western Silhouettes</button>
      <button class="explorer-nav-btn" data-style="ethnic">Ethnic &amp; Sarees</button>
      <button class="explorer-nav-btn" data-style="lounge">Lounge &amp; Casuals</button>
      <button class="explorer-nav-btn" data-style="kids">Kids Occasion</button>
    </div>
    <div class="explorer-container">
      <div class="explorer-showcase">
        <div class="explorer-image-container">
          <img id="explorer-hero-img" src="" alt="Active lookbook item">
        </div>
        <div class="explorer-thumbnails-wrapper">
          <button class="btn-thumb-nav btn-thumb-nav--prev" aria-label="Previous image">&#8592;</button>
          <div class="explorer-thumbnails" id="explorer-thumb-strip"></div>
          <button class="btn-thumb-nav btn-thumb-nav--next" aria-label="Next image">&#8594;</button>
        </div>
      </div>
      <div class="explorer-details">
        <div class="garment-tag">
          <div class="garment-tag__stitch-line">
            <div class="garment-tag__brand">O&amp;H</div>
            <div class="garment-tag__num-tag">Item No. <span id="explorer-tag-num">00</span></div>
            <div class="garment-tag__divider"></div>
            <h3 class="garment-tag__title" id="explorer-tag-title">Loading...</h3>
            <div class="garment-tag__spec">
              <h4 class="garment-tag__label">Fabric Specification</h4>
              <p class="garment-tag__text" id="explorer-tag-fabric">...</p>
            </div>
            <div class="garment-tag__spec">
              <h4 class="garment-tag__label">Design Features</h4>
              <p class="garment-tag__text" id="explorer-tag-design">...</p>
            </div>
            <div class="garment-tag__divider"></div>
            <a href="#visit" class="garment-tag__btn" id="explorer-inquire-btn">Inquire About Fit</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const heroImg = document.getElementById('explorer-hero-img');
  const tagNum = document.getElementById('explorer-tag-num');
  const tagTitle = document.getElementById('explorer-tag-title');
  const tagFabric = document.getElementById('explorer-tag-fabric');
  const tagDesign = document.getElementById('explorer-tag-design');
  const thumbStrip = document.getElementById('explorer-thumb-strip');
  const inquireBtn = document.getElementById('explorer-inquire-btn');
  
  const prevBtn = document.querySelector('.btn-thumb-nav--prev');
  const nextBtn = document.querySelector('.btn-thumb-nav--next');
  const navBtns = document.querySelectorAll('.explorer-nav-btn');

  let currentStyle = 'western';
  let currentIndex = 0;

  const updateShowcase = () => {
    const dataset = LOOKBOOK_DATA[currentStyle];
    const item = dataset[currentIndex];
    if (!item) return;

    // Update hero image
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.src = item.img;
      heroImg.alt = item.title;
      heroImg.style.opacity = '1';
    }, 150);

    // Update tag details
    tagNum.textContent = item.num;
    tagTitle.textContent = item.title;
    tagFabric.textContent = item.fabric;
    tagDesign.textContent = item.design;

    // Update active thumbnail
    const thumbs = thumbStrip.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, idx) => {
      if (idx === currentIndex) {
        thumb.classList.add('thumb-item--active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('thumb-item--active');
      }
    });
  };

  const loadStyleCollection = (styleKey) => {
    currentStyle = styleKey;
    currentIndex = 0;

    const dataset = LOOKBOOK_DATA[styleKey];
    
    // Generate thumbnails
    thumbStrip.innerHTML = dataset.map((item, idx) => `
      <div class="thumb-item ${idx === 0 ? 'thumb-item--active' : ''}" data-index="${idx}">
        <img src="${item.img}" alt="${item.title}">
      </div>
    `).join('');

    // Add click events to thumbnails
    const thumbs = thumbStrip.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        currentIndex = parseInt(thumb.getAttribute('data-index'), 10);
        updateShowcase();
      });
    });

    updateShowcase();
  };

  // Nav buttons for categories
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('explorer-nav-btn--active'));
      btn.classList.add('explorer-nav-btn--active');
      loadStyleCollection(btn.getAttribute('data-style'));
    });
  });

  // Prev / Next button click events
  prevBtn.addEventListener('click', () => {
    const dataset = LOOKBOOK_DATA[currentStyle];
    currentIndex = (currentIndex - 1 + dataset.length) % dataset.length;
    updateShowcase();
  });

  nextBtn.addEventListener('click', () => {
    const dataset = LOOKBOOK_DATA[currentStyle];
    currentIndex = (currentIndex + 1) % dataset.length;
    updateShowcase();
  });

  // Smooth scroll for inquire button
  if (inquireBtn) {
    inquireBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const visitSec = document.getElementById('visit');
      if (visitSec) {
        visitSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Hover-Zoom fabric magnifier on hero image
  const imgContainer = document.querySelector('.explorer-image-container');
  if (imgContainer && heroImg) {
    imgContainer.addEventListener('mousemove', (e) => {
      const rect = imgContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroImg.style.transformOrigin = `${x}% ${y}%`;
      heroImg.style.transform = 'scale(2.2)';
    });

    imgContainer.addEventListener('mouseleave', () => {
      heroImg.style.transform = 'scale(1)';
      heroImg.style.transformOrigin = 'center center';
    });
  }

  // Load initial collection
  loadStyleCollection('western');
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


// --- QR Code Zoom Modal ---
const initQRModal = () => {
  const modal = document.getElementById('qrModal');
  if (!modal) return;

  const modalTitle = document.getElementById('qrModalTitle');
  const modalSubtitle = document.getElementById('qrModalSubtitle');
  const modalImg = document.getElementById('qrModalImg');
  const modalActionBtn = document.getElementById('qrModalActionBtn');
  const closeBtn = document.getElementById('qrModalClose');
  const backdrop = modal.querySelector('.qr-modal-backdrop');

  const qrCards = document.querySelectorAll('.qr-card');

  const openModal = (type) => {
    if (type === 'call') {
      modalTitle.textContent = 'Scan to Call Store';
      modalSubtitle.textContent = 'Point your smartphone camera to dial +91 9971809626';
      modalImg.src = './assets/qr_call.svg';
      modalActionBtn.href = 'tel:+919971809626';
      modalActionBtn.textContent = 'Call +91 9971809626';
    } else if (type === 'location') {
      modalTitle.textContent = 'Store Directions';
      modalSubtitle.textContent = 'Scan with camera to open Google Maps for directions';
      modalImg.src = './assets/qr_location.svg';
      modalActionBtn.href = 'https://maps.app.goo.gl/rjAxaMCtCSekF4YL9';
      modalActionBtn.textContent = 'Open Google Maps';
    }

    modal.classList.add('qr-modal--active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('qr-modal--active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  qrCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked directly on the action button inside the card, let default link navigate
      if (e.target.closest('.qr-action-btn')) return;
      
      const type = card.getAttribute('data-qr-type');
      openModal(type);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('qr-modal--active')) {
      closeModal();
    }
  });
};


// --- Ambient Audio Management ---
const initAmbientAudio = () => {
  const audio = document.getElementById('bg-audio');
  const toggleBtn = document.getElementById('soundToggle');
  const soundLabel = document.getElementById('soundLabel');
  
  if (!audio || !toggleBtn) return;

  // Set warm soft volume level (35%)
  audio.volume = 0.35;

  let isPlaying = false;

  const updateUI = (active) => {
    isPlaying = active;
    if (active) {
      toggleBtn.classList.add('sound-toggle-btn--playing');
      if (soundLabel) soundLabel.textContent = 'Sound On';
    } else {
      toggleBtn.classList.remove('sound-toggle-btn--playing');
      if (soundLabel) soundLabel.textContent = 'Sound Off';
    }
  };

  const playAudio = () => {
    audio.play().then(() => {
      updateUI(true);
    }).catch(() => {
      // Autoplay policy prevented immediate playback until user interaction
      updateUI(false);
    });
  };

  const pauseAudio = () => {
    audio.pause();
    updateUI(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSound();
  });

  // Attempt initial playback on load
  playAudio();

  // User Interaction Trigger (Unlocks audio on first tap/click/scroll if blocked by browser policy)
  const unlockAudio = () => {
    if (!isPlaying) {
      playAudio();
    }
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
      window.removeEventListener(evt, unlockAudio, { passive: true });
    });
  };

  ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true, once: true });
  });
};


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  injectFallbackCSS();
  initCustomCursor();
  initHeader();
  initMobileNav();
  initTestimonials();
  initWalkthrough();
  initScrollFallback();
  initLookbookExplorer();
  initQRModal();
  initAmbientAudio();
});


