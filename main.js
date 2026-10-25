/**
 * OPULENCE & HEIRLOOM — Digital Flagship Application Logic
 * Bespoke Tailoring & Custom Stitching for Women, Men & Children
 * Official Contact: care@opulenceandheirloom.com | +91 99718 09626
 */

// ============================================================================
// 1. Curated Tailored Creations & Lookbook Data (37 Authentic Bespoke Works)
// ============================================================================
const LOOKBOOK_DATA = [
  // --- Women's Ethnic & Blouses ---
  {
    id: 'we-01',
    num: 'CREATION 01',
    ref: 'OH-WE01',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Pre-Stitched Designer Saree & Princess Blouse',
    fabric: 'Custom draping service with client-provided handloom silk, finished with attached petticoat.',
    design: 'Pre-pleated fall for 60-second slip-on wear. Paired with a sleeveless high-neck padded princess-cut blouse.',
    priceEst: 'Stitching from ₹1,500 (Saree) + ₹1,800 (Padded Blouse)',
    img: './assets/womens_ethnic_new.webp'
  },
  {
    id: 'we-02',
    num: 'CREATION 02',
    ref: 'OH-WE02',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Royal Banarasi Saree Fall & Custom Pleating',
    fabric: 'Hand-stitched fall and hemming (pico) on client Banarasi silk with pure gold zari borders.',
    design: 'Precise pleat spacing, reinforced waist hooks, and custom edge finishing.',
    priceEst: 'Stitching from ₹1,500 (Pre-stitched) or ₹250 (Fall & Hemming)',
    img: './assets/saree_01.webp'
  },
  {
    id: 'we-03',
    num: 'CREATION 03',
    ref: 'OH-WE03',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Emerald Georgette Saree & Padded Blouse',
    fabric: 'Georgette drape alignment with crepe inner lining for structured drape.',
    design: 'Stitched pleats with sweetheart neckline blouse featuring internal padding and concealed side zipper.',
    priceEst: 'Stitching from ₹1,800 (Blouse) + ₹1,500 (Saree)',
    img: './assets/saree_02.webp'
  },
  {
    id: 'we-04',
    num: 'CREATION 04',
    ref: 'OH-WE04',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Mustard Blossom Cotton-Silk Drape',
    fabric: 'Lightweight handloom cotton-silk with hand-rolled hems.',
    design: 'Pre-stitched drape with custom contrast border attachment and matching blouse with back dori.',
    priceEst: 'Stitching from ₹1,200 (Blouse) + ₹1,500 (Saree)',
    img: './assets/saree_03.webp'
  },
  {
    id: 'we-05',
    num: 'CREATION 05',
    ref: 'OH-WE05',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Scalloped Organza Saree & Cut-Out Blouse',
    fabric: 'Delicate sheer organza with French seam construction.',
    design: 'Scalloped border finishing, paired with net-back padded blouse and handcrafted fabric latkans.',
    priceEst: 'Stitching from ₹1,500 (Blouse) + ₹1,700 (Saree with Petticoat)',
    img: './assets/saree_04.webp'
  },
  {
    id: 'we-06',
    num: 'CREATION 06',
    ref: 'OH-WE06',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Tangerine Satin Evening Drape',
    fabric: 'High-shine satin silk with fluid drape weight.',
    design: 'Contemporary pant-style or lehenga-style pre-stitched drape for cocktail receptions.',
    priceEst: 'Stitching from ₹2,100 (Custom Draping)',
    img: './assets/saree_05.webp'
  },
  {
    id: 'we-07',
    num: 'CREATION 07',
    ref: 'OH-WE07',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Heritage Linen Saree & Minimal Blouse',
    fabric: 'Artisan linen with silver zari threads.',
    design: 'Clean modern pleats, custom fringe border, paired with an elbow-sleeve lined boat-neck blouse.',
    priceEst: 'Stitching from ₹1,200 (Blouse) + ₹250 (Fall & Hemming)',
    img: './assets/lookbook_08.webp'
  },
  {
    id: 'we-08',
    num: 'CREATION 08',
    ref: 'OH-WE08',
    categoryKey: 'womens-ethnic',
    categoryLabel: "Women's Ethnic & Blouses",
    title: 'Contemporary Asymmetric Tunic & Pants Set',
    fabric: 'Linen-silk blend with full inner cotton lining.',
    design: 'Asymmetric hemline kurti, high side-slits, paired with tailored straight-cut trousers.',
    priceEst: 'Stitching from ₹1,600 (Suit Set with Full Lining)',
    img: './assets/lookbook_ethnic.webp'
  },

  // --- Women's Western & Suits ---
  {
    id: 'ww-01',
    num: 'CREATION 09',
    ref: 'OH-WW01',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Bespoke Tailored Linen Pantsuit & Belted Blazer',
    fabric: 'Client linen tailored with soft shoulder padding and breathable half-lining.',
    design: 'Deconstructed belted blazer with notched lapels and matching high-waisted pleated wide-leg trousers.',
    priceEst: 'Stitching from ₹2,650 (Blazer) + ₹550 (Pants)',
    img: './assets/womens_western_new.webp'
  },
  {
    id: 'ww-02',
    num: 'CREATION 10',
    ref: 'OH-WW02',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Single-Breasted Deconstructed Linen Blazer',
    fabric: 'Structured European linen tailoring with unlined body for ventilation.',
    design: 'Notched lapels, horn buttons, bone flap pockets, and hand-finished sleeve cuffs.',
    priceEst: 'Stitching from ₹2,650–₹5,499',
    img: './assets/lookbook_06.webp'
  },
  {
    id: 'ww-03',
    num: 'CREATION 11',
    ref: 'OH-WW03',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Minimalist Draped Sage Slip Dress',
    fabric: 'Linen-cotton blend cut on the bias for fluid movement.',
    design: 'Minimalist double shoulder straps, side movement slits, and clean back neckline.',
    priceEst: 'Stitching from ₹1,500–₹3,200',
    img: './assets/lookbook_05.webp'
  },
  {
    id: 'ww-04',
    num: 'CREATION 12',
    ref: 'OH-WW04',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Flow & Movement Silk-Linen Maxi Gown',
    fabric: 'Mulberry silk and linen blend with hand-rolled edges.',
    design: 'Deep V-neckline, graceful high slit, and flared sleeves with tailored button cuffs.',
    priceEst: 'Stitching from ₹1,800–₹4,500',
    img: './assets/lookbook_flow.webp'
  },
  {
    id: 'ww-05',
    num: 'CREATION 13',
    ref: 'OH-WW05',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Draped Asymmetric Linen Resort Wrap Dress',
    fabric: 'Fine washed European linen with fluid bias drape and soft attached lining.',
    design: 'Clean crossover wrap neckline, relaxed dropped shoulder line, asymmetric gathering at the waist, and graceful midi hemline.',
    priceEst: 'Stitching from ₹1,650–₹2,800',
    img: './assets/ladies_western.webp'
  },
  {
    id: 'ww-06',
    num: 'CREATION 14',
    ref: 'OH-WW06',
    categoryKey: 'womens-western',
    categoryLabel: "Women's Western & Suits",
    title: 'Sculpted Linen Asymmetric Top & Trousers',
    fabric: 'High-density linen tailoring with geometric seams.',
    design: 'Structural side draping, high neckline, clean geometric lines with matching panel pants.',
    priceEst: 'Stitching from ₹1,200 (Top) + ₹550 (Pants)',
    img: './assets/lookbook_09.webp'
  },

  // --- Men's Tailoring ---
  {
    id: 'm-01',
    num: 'CREATION 15',
    ref: 'OH-M01',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: 'Bespoke Textured Nehru Jacket (Bandi) & Kurta',
    fabric: 'Textured sand-beige linen-silk waistcoat with breathable interior canvas.',
    design: 'Mandarin collar, bespoke bone chest pocket, covered button placket, paired with ivory cotton-linen kurta and trousers.',
    priceEst: 'Stitching from ₹1,400 (Nehru Jacket) + ₹1,400 (Kurta Set)',
    img: './assets/mens_tailoring_new.webp'
  },
  {
    id: 'm-02',
    num: 'CREATION 16',
    ref: 'OH-M02',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: 'Tailored Kurta & Churidar Pajama Set',
    fabric: 'Lustrous cream mulberry silk-cotton blend with breathable lining.',
    design: 'Mandarin collar, subtle needle-stitch placket detailing, concealed side pockets, and bespoke tapered churidar pajama.',
    priceEst: 'Stitching from ₹1,400',
    img: './assets/mens_kurta_pajama.webp'
  },
  {
    id: 'm-03',
    num: 'CREATION 17',
    ref: 'OH-M03',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: 'Classic Kurta Shirt with Shirt Cuffs',
    fabric: 'Fine organic linen or combed Egyptian cotton with crisp collar fall.',
    design: 'Mandarin band collar, French placket, functional two-button shirt cuffs, and curved hemline.',
    priceEst: 'Stitching from ₹1,000',
    img: './assets/mens_kurta_shirt.webp'
  },
  {
    id: 'm-04',
    num: 'CREATION 18',
    ref: 'OH-M04',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: 'Custom Pathani Suit with Pleated Salwar',
    fabric: 'Structured dark charcoal cotton-linen blend with reinforced seams.',
    design: 'Dual chest flap pockets, tailored shoulder epaulettes, curved shirt hemline, paired with matching traditional salwar.',
    priceEst: 'Stitching from ₹1,500',
    img: './assets/mens_pathani.webp'
  },
  {
    id: 'm-05',
    num: 'CREATION 19',
    ref: 'OH-M05',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: 'Indo-Western Ceremonial Coat / Sherwani',
    fabric: 'Regal midnight navy brocade-weave with full structured interior canvas.',
    design: 'High bandhgala collar, ornate cuff and hemline embroidery, concealed front placket, paired with tailored slim trousers.',
    priceEst: 'Stitching from ₹3,100–₹4,200+',
    img: './assets/mens_sherwani.webp'
  },
  {
    id: 'm-06',
    num: 'CREATION 20',
    ref: 'OH-M06',
    categoryKey: 'mens',
    categoryLabel: "Men's Tailoring",
    title: "Men's Simple Plain Raw Silk Kurta",
    fabric: 'Pure textured raw silk in earthy olive-sage green, breathable and skin-friendly.',
    design: 'Clean band collar, neat placket with buttons, functional side pockets, and straight side-slit hemline.',
    priceEst: 'Stitching from ₹1,000 (Kurta Only)',
    img: './assets/mens_plain_silk_kurta.webp'
  },

  // --- Children's Outfits ---
  {
    id: 'k-01',
    num: 'CREATION 21',
    ref: 'OH-K01',
    categoryKey: 'kids',
    categoryLabel: "Children's Outfits",
    title: 'Kids Festive Nehru Jacket & Silk Tunic Set',
    fabric: 'Hypoallergenic soft organic cotton lining with exterior linen-silk.',
    design: 'Boy’s cream buttoned waistcoat and kurta set; Girl’s peach festive dress with delicate gold neckline piping.',
    priceEst: 'Stitching from ₹1,500–₹1,800',
    img: './assets/kids_tailoring_new.webp'
  },
  {
    id: 'k-02',
    num: 'CREATION 22',
    ref: 'OH-K02',
    categoryKey: 'kids',
    categoryLabel: "Children's Outfits",
    title: 'Kids Casual Simple Plain Kurta Pajama',
    fabric: 'Super-soft breathable organic cotton-linen in pastel powder blue.',
    design: 'Comfortable mandarin band collar, simple wooden buttons, easy side slits, paired with soft white relaxed pajama.',
    priceEst: 'Stitching from ₹1,200',
    img: './assets/kids_plain_kurta_pajama.webp'
  },
  {
    id: 'k-03',
    num: 'CREATION 23',
    ref: 'OH-K03',
    categoryKey: 'kids',
    categoryLabel: "Children's Outfits",
    title: 'Simple Casual Girls Lehenga Choli',
    fabric: 'Soft lightweight cotton-silk in pastel peach and sunshine yellow with pure cotton inner lining.',
    design: 'Easy-movement flared skirt, simple boat-neck choli with soft waist hem, and featherlight net dupatta.',
    priceEst: 'Stitching from ₹1,500',
    img: './assets/kids_casual_lehenga.webp'
  },
  {
    id: 'k-04',
    num: 'CREATION 24',
    ref: 'OH-K04',
    categoryKey: 'kids',
    categoryLabel: "Children's Outfits",
    title: 'Kids Celebration Festive Tiered Outfit',
    fabric: 'Embroidered blush pink organza and silk with gentle cotton backing.',
    design: 'Tiered skirt, delicate lace sleeves, and concealed child-friendly rear zip.',
    priceEst: 'Stitching from ₹1,500–₹1,800',
    img: './assets/kids_tailoring_secondary.webp'
  },
  {
    id: 'k-05',
    num: 'CREATION 25',
    ref: 'OH-K05',
    categoryKey: 'kids',
    categoryLabel: "Children's Outfits",
    title: 'Young Heirloom Holiday Play Set',
    fabric: 'Pre-washed breathable organic linen.',
    design: 'Collarless easy shirt and relaxed drawstring shorts with generous growth allowances.',
    priceEst: 'Stitching from ₹1,000 (Casual Wear)',
    img: './assets/kids_fashion.webp'
  },

  // --- Bridal & Lehengas (Ethnic & Modern Both) ---
  {
    id: 'b-01',
    num: 'CREATION 26',
    ref: 'OH-B01',
    categoryKey: 'bridal',
    categoryLabel: "Bridal & Lehengas",
    title: 'Ivory & Gold Royal Bridal Lehenga Couture',
    fabric: 'Heavy silk/velvet with multi-layered canvas, double flare, and dual can-can netting.',
    design: 'Traditional ethnic bridal silhouette: custom padded princess-cut blouse, double can-can skirt, canvas borders, and dual dupatta attachment.',
    priceEst: 'Stitching from ₹8,500–₹16,000+',
    img: './assets/bridal_lehenga_new.webp'
  },
  {
    id: 'b-02',
    num: 'CREATION 27',
    ref: 'OH-B02',
    categoryKey: 'bridal',
    categoryLabel: "Bridal & Lehengas",
    title: 'Contemporary Sculpted Reception Gown with Train',
    fabric: 'Layered fluid georgette, organza and silk satin with structured inner bodice.',
    design: 'Modern couture reception silhouette: floor-length sweeping mermaid trail, built-in padded cups, invisible side zipper, and minimalist off-shoulder drape.',
    priceEst: 'Stitching from ₹4,500–₹9,000',
    img: './assets/bridal_reception_gown.webp'
  },
  {
    id: 'b-03',
    num: 'CREATION 28',
    ref: 'OH-B03',
    categoryKey: 'bridal',
    categoryLabel: "Bridal & Lehengas",
    title: 'Heritage Banarasi Katan Silk Brocade Lehenga',
    fabric: 'Pure Banarasi katan silk brocade with real zari weave motifs and micro-velvet hem borders.',
    design: 'Classic ethnic kalidar: 24-kali flared skirt with structured canvas belt, elbow-length sweetheart blouse, handcrafted potli tassels, and tissue organza dupatta.',
    priceEst: 'Stitching from ₹5,500–₹8,500',
    img: './assets/banarasi_silk_lehenga.webp'
  },
  {
    id: 'b-04',
    num: 'CREATION 29',
    ref: 'OH-B04',
    categoryKey: 'bridal',
    categoryLabel: "Bridal & Lehengas",
    title: 'Modern Boned Corset-Bustier & Slit Lehenga Set',
    fabric: 'Duchess silk satin and pleated lurex metallic chiffon in champagne rose.',
    design: 'High-fashion contemporary ensemble: fully boned structured corset bustier, high-waist A-line lehenga skirt with subtle side slit, and detachable sheer cape veil.',
    priceEst: 'Stitching from ₹5,800–₹9,500',
    img: './assets/modern_corset_lehenga.webp'
  },
  {
    id: 'b-05',
    num: 'CREATION 30',
    ref: 'OH-B05',
    categoryKey: 'bridal',
    categoryLabel: "Bridal & Lehengas",
    title: 'Crimson Velvet Zardozi Wedding Kalidar Lehenga',
    fabric: 'Deep crimson micro-velvet, pure raw silk lining, and reinforced double horsehair braid hem.',
    design: 'Grand traditional bridal design: 360-degree kalidar flare with reinforced hem, deep U-neck padded choli, custom dori latkans, and dual sheer net dupattas.',
    priceEst: 'Stitching from ₹9,500–₹16,000+',
    img: './assets/crimson_velvet_lehenga.webp'
  },

  // --- Japanese & Korean Minimalist Designs (Simple Fabrics & Very Simple Clean Cuts) ---
  {
    id: 'min-01',
    num: 'CREATION 31',
    ref: 'OH-JK01',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Tokyo Origami Asymmetric Tunic & Wide Trousers',
    fabric: 'Simple 100% unbleached raw flax linen and pure cotton poplin.',
    design: 'Zero-figure minimalist architectural cut: diagonal crossover wrap front, clean sleeveless shoulder line, straight side slits, paired with matching flowing wide-leg trousers. Pure simplicity with zero excess ornamentation.',
    priceEst: 'Stitching from ₹1,400 (Tunic) + ₹550 (Trousers)',
    img: './assets/lookbook_09.webp'
  },
  {
    id: 'min-02',
    num: 'CREATION 32',
    ref: 'OH-JK02',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Kyoto Wabi-Sabi Crossover Linen Wrap Dress',
    fabric: 'Soft enzyme-washed natural sage green slub linen with hand-rolled hems.',
    design: 'Japanese-inspired effortless crossover kimono wrap dress with dropped shoulder line, asymmetrical side knot gathering, and clean breathable silhouette. Designed for a graceful slender drape.',
    priceEst: 'Stitching from ₹1,600 (Western / Casual Dress)',
    img: './assets/lookbook_05.webp'
  },
  {
    id: 'min-03',
    num: 'CREATION 33',
    ref: 'OH-JK03',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Seoul Tiered Ecru Linen Flow Dress',
    fabric: 'Simple natural organic unbleached cotton-linen with subtle tactile weave.',
    design: 'Understated Korean tiered dress with clean V-neckline, self-fabric waist tie, and unlined featherlight drape. Effortless movement and wabi-sabi beauty.',
    priceEst: 'Stitching from ₹1,800–₹2,400',
    img: './assets/lookbook_flow.webp'
  },
  {
    id: 'min-04',
    num: 'CREATION 34',
    ref: 'OH-JK04',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Japanese Kimono-Sleeve Oat Robe Dress',
    fabric: 'Rustic oat-beige flax linen with soft structural body.',
    design: 'Traditional wide kimono sleeve cut with clean boat-neck opening, stitched waist darts, concealed in-seam pockets, and full-length slender line.',
    priceEst: 'Stitching from ₹1,900 (Western Maxi Dress)',
    img: './assets/luxury_supermodels_linen.webp'
  },
  {
    id: 'min-05',
    num: 'CREATION 35',
    ref: 'OH-JK05',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Seoul Minimalist Terracotta Relaxed Co-Ord',
    fabric: 'Simple washed earthen terracotta linen.',
    design: 'Boxy Korean clean-cut camp collar tunic shirt with button cuffs and matching relaxed wide-leg ankle trousers. Pure understated casual luxury.',
    priceEst: 'Stitching from ₹1,400 (Shirt) + ₹550 (Pants)',
    img: './assets/lookbook_10.webp'
  },
  {
    id: 'min-06',
    num: 'CREATION 36',
    ref: 'OH-JK06',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Tokyo Indigo Boxy Boat-Neck Linen Shift',
    fabric: 'Deep indigo blue natural slub linen.',
    design: 'Clean Japanese architectural boat neckline, relaxed three-quarter sleeves, boxy drop silhouette with matching straight linen pants.',
    priceEst: 'Stitching from ₹1,300 (Top) + ₹550 (Pants)',
    img: './assets/lookbook_13.webp'
  },
  {
    id: 'min-07',
    num: 'CREATION 37',
    ref: 'OH-JK07',
    categoryKey: 'minimalist',
    categoryLabel: 'Japanese & Korean Minimalist',
    title: 'Korean Tiered Summer Linen Sundress',
    fabric: 'Lightweight breathable organic cotton-linen in natural oat ivory.',
    design: 'Minimalist gathered tiered skirt, understated scoop neckline, slender zero-figure fitted bodice, and self-fabric tie sash. Pure, simple, and timeless.',
    priceEst: 'Stitching from ₹1,650 (Western Dress)',
    img: './assets/lookbook_07.webp'
  }
];

// ============================================================================
// 2. Navigation & Header Behavior
// ============================================================================
const initHeaderScroll = () => {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};

// Mobile Drawer Menu
const initMobileDrawer = () => {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const drawerLinks = drawer?.querySelectorAll('.mobile-drawer__link, .mobile-drawer__cta');

  if (!toggleBtn || !drawer || !closeBtn) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });

  drawerLinks?.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
};

// ============================================================================
// 3. Interactive Pricing Rate Card Filter
// ============================================================================
const initPricingFilter = () => {
  const tabs = document.querySelectorAll('.pricing-tab');
  const cards = document.querySelectorAll('.atelier-price-card');
  if (tabs.length === 0 || cards.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedCat = tab.getAttribute('data-price-cat') || 'all';

      // Update active tab
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Show/hide matching cards
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (selectedCat === 'all' || cardCat === selectedCat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Connect "Book Fitting" buttons inside price cards to consultation form
  const bookBtns = document.querySelectorAll('.price-book-btn');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      const select = document.getElementById('serviceType');
      if (select && serviceName) {
        // Map to appropriate option
        if (serviceName.includes('Suit')) select.value = 'suit-stitching';
        else if (serviceName.includes('Blouse')) select.value = 'blouse-stitching';
        else if (serviceName.includes('Saree')) select.value = 'saree-services';
        else if (serviceName.includes('Bridal')) select.value = 'bridal-lehenga';
        else if (serviceName.includes("Men's")) select.value = 'mens-tailoring';
        else if (serviceName.includes('Western')) select.value = 'western-wear';
        else if (serviceName.includes('Kids')) select.value = 'kids-outfits';
        else if (serviceName.includes('Alteration')) select.value = 'alterations';
      }
    });
  });
};

// ============================================================================
// 4. Lookbook Dynamic Rendering & Filter Logic
// ============================================================================
let activeFilter = 'all';

const renderLookbookGrid = (filter = 'all') => {
  const grid = document.getElementById('lookbookGrid');
  if (!grid) return;

  activeFilter = filter;

  // Filter items
  const items = filter === 'all'
    ? LOOKBOOK_DATA
    : LOOKBOOK_DATA.filter(item => item.categoryKey === filter);

  // Update tabs visual state
  const tabButtons = document.querySelectorAll('.filter-btn');
  tabButtons.forEach(btn => {
    const btnFilter = btn.getAttribute('data-filter');
    const isActive = btnFilter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Render cards
  grid.innerHTML = items.map(item => `
    <article class="lookbook-card" data-item-id="${item.id}" role="button" tabindex="0" aria-label="Inspect ${item.title}">
      <div class="lookbook-card__media">
        <img class="lookbook-card__img" src="${item.img}" alt="${item.title}" loading="lazy" width="600" height="800">
        <span class="lookbook-card__badge">${item.num}</span>
        <div class="lookbook-card__hover-prompt" aria-hidden="true">
          <span class="hover-prompt-text">Inspect Tailoring</span>
        </div>
      </div>
      <div class="lookbook-card__info">
        <div>
          <span class="lookbook-card__category">${item.categoryLabel}</span>
          <h3 class="lookbook-card__title">${item.title}</h3>
          <p class="lookbook-card__fabric">${item.design}</p>
        </div>
        <div class="lookbook-card__footer">
          <span class="card-ref">${item.priceEst}</span>
          <span class="card-action-text">Details &amp; Enquiry &rarr;</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click & enter listeners to new cards
  const cards = grid.querySelectorAll('.lookbook-card');
  cards.forEach(card => {
    const itemId = card.getAttribute('data-item-id');
    const item = LOOKBOOK_DATA.find(i => i.id === itemId);
    if (!item) return;

    card.addEventListener('click', () => openGarmentDialog(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGarmentDialog(item);
      }
    });
  });
};

const initLookbookFilters = () => {
  const filterTabs = document.querySelectorAll('.filter-btn');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter') || 'all';
      renderLookbookGrid(filter);
    });
  });

  const capsuleBtn = document.getElementById('capsuleLookbookBtn');
  if (capsuleBtn) {
    capsuleBtn.addEventListener('click', () => {
      renderLookbookGrid('minimalist');
    });
  }
};

// ============================================================================
// 5. Native Garment Inspection Dialog Modal
// ============================================================================
const openGarmentDialog = (item) => {
  const dialog = document.getElementById('garmentDialog');
  if (!dialog) return;

  // Elements
  const imgEl = document.getElementById('dialogGarmentImg');
  const badgeEl = document.getElementById('dialogGarmentBadge');
  const categoryEl = document.getElementById('dialogGarmentCategory');
  const titleEl = document.getElementById('dialogGarmentTitle');
  const refEl = document.getElementById('dialogGarmentRef');
  const fabricEl = document.getElementById('dialogGarmentFabric');
  const designEl = document.getElementById('dialogGarmentDesign');
  const priceEl = document.getElementById('dialogGarmentPrice');
  const whatsappBtn = document.getElementById('dialogWhatsAppBtn');
  const bookFittingBtn = document.getElementById('dialogBookFittingBtn');

  if (imgEl) {
    imgEl.src = item.img;
    imgEl.alt = item.title;
  }
  if (badgeEl) badgeEl.textContent = item.num;
  if (categoryEl) categoryEl.textContent = item.categoryLabel.toUpperCase();
  if (titleEl) titleEl.textContent = item.title;
  if (refEl) refEl.textContent = `REFERENCE CODE: ${item.ref}`;
  if (fabricEl) fabricEl.textContent = item.fabric;
  if (designEl) designEl.textContent = item.design;
  if (priceEl) priceEl.textContent = item.priceEst;

  // WhatsApp concierge enquiry link with pre-filled authentic tailoring inquiry
  if (whatsappBtn) {
    const waText = `Hello OPULENCE & HEIRLOOM, I am interested in tailoring services for "${item.title}" (${item.ref}). ${item.priceEst}. Could you please share more details regarding fabric requirements, fitting schedule, and master tailor availability?`;
    whatsappBtn.href = `https://wa.me/919971809626?text=${encodeURIComponent(waText)}`;
  }

  // Connect Book Fitting button inside dialog
  if (bookFittingBtn) {
    bookFittingBtn.addEventListener('click', () => {
      dialog.close();
      const select = document.getElementById('serviceType');
      if (select) {
        if (item.categoryKey === 'womens-ethnic') select.value = 'saree-services';
        else if (item.categoryKey === 'womens-western') select.value = 'western-wear';
        else if (item.categoryKey === 'minimalist') select.value = 'japanese-korean-minimalist';
        else if (item.categoryKey === 'mens') select.value = 'mens-tailoring';
        else if (item.categoryKey === 'kids') select.value = 'kids-outfits';
        else if (item.categoryKey === 'bridal') select.value = 'bridal-lehenga';
      }
    });
  }

  // Open native dialog modal
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  } else {
    dialog.setAttribute('open', '');
  }
};

const initGarmentDialogHandlers = () => {
  const dialog = document.getElementById('garmentDialog');
  const closeBtn = document.getElementById('dialogCloseBtn');
  if (!dialog) return;

  const closeDialog = () => {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeDialog);

  // Close on backdrop click
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      closeDialog();
    }
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
};

// ============================================================================
// 6. Showroom Hotspots Interaction
// ============================================================================
const initShowroomHotspots = () => {
  const hotspots = document.querySelectorAll('.showroom-hotspot');
  if (hotspots.length === 0) return;

  hotspots.forEach(hs => {
    hs.addEventListener('click', (e) => {
      if (e.target.closest('.hotspot-card__link')) return;

      const isActive = hs.classList.contains('is-active');
      hotspots.forEach(other => other.classList.remove('is-active'));
      if (!isActive) {
        hs.classList.add('is-active');
      }
    });

    hs.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hs.classList.toggle('is-active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.showroom-hotspot')) {
      hotspots.forEach(hs => hs.classList.remove('is-active'));
    }
  });
};

// ============================================================================
// 7. QR Code Enlarge Modal
// ============================================================================
const initQrDialog = () => {
  const qrDialog = document.getElementById('qrDialog');
  const closeBtn = document.getElementById('qrDialogCloseBtn');
  const imgEl = document.getElementById('qrDialogImg');
  const titleEl = document.getElementById('qrDialogTitle');
  const subEl = document.getElementById('qrDialogSubtitle');
  const actionBtn = document.getElementById('qrDialogActionBtn');

  const cellCall = document.getElementById('qrCellCall');
  const cellLocation = document.getElementById('qrCellLocation');

  if (!qrDialog) return;

  const closeQr = () => {
    if (typeof qrDialog.close === 'function') {
      qrDialog.close();
    } else {
      qrDialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeQr);

  qrDialog.addEventListener('click', (e) => {
    const rect = qrDialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      closeQr();
    }
  });

  qrDialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });

  const openQrModal = (type) => {
    if (type === 'call') {
      if (imgEl) {
        imgEl.src = './assets/qr_call.png';
        imgEl.alt = 'Scan QR code to call boutique directly';
      }
      if (titleEl) titleEl.textContent = 'Scan to Call Boutique';
      if (subEl) subEl.textContent = 'Point your smartphone camera to connect with +91 99718 09626';
      if (actionBtn) {
        actionBtn.textContent = 'Call Direct: +91 99718 09626';
        actionBtn.href = 'tel:+919971809626';
        actionBtn.target = '_self';
      }
    } else {
      if (imgEl) {
        imgEl.src = './assets/qr_location.png';
        imgEl.alt = 'Scan QR code for Google Maps directions to Vatika Town Square 2';
      }
      if (titleEl) titleEl.textContent = 'Scan for Google Maps Directions';
      if (subEl) subEl.textContent = 'Navigate to A1-233, Vatika Town Square 2, Sec 82, Gurgaon';
      if (actionBtn) {
        actionBtn.textContent = 'Open in Google Maps';
        actionBtn.href = 'https://maps.app.goo.gl/rjAxaMCtCSekF4YL9';
        actionBtn.target = '_blank';
      }
    }

    if (typeof qrDialog.showModal === 'function') {
      qrDialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      qrDialog.setAttribute('open', '');
    }
  };

  cellCall?.addEventListener('click', () => openQrModal('call'));
  cellLocation?.addEventListener('click', () => openQrModal('location'));
};

// ============================================================================
// 8. Consultation & Fitting Booking Form Validation
// ============================================================================
const initConsultationForm = () => {
  const form = document.getElementById('consultationForm');
  const feedbackEl = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitFormBtn');
  if (!form) return;

  const validateField = (input, errorId, validatorFn, errorMessage) => {
    const errorEl = document.getElementById(errorId);
    const isValid = validatorFn(input.value.trim());

    if (!isValid) {
      input.classList.add('is-invalid');
      if (errorEl) errorEl.textContent = errorMessage;
      return false;
    } else {
      input.classList.remove('is-invalid');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  };

  const nameInput = document.getElementById('clientName');
  const phoneInput = document.getElementById('clientPhone');
  const emailInput = document.getElementById('clientEmail');
  const serviceInput = document.getElementById('serviceType');

  [nameInput, phoneInput, emailInput, serviceInput].forEach(field => {
    field?.addEventListener('input', () => {
      field.classList.remove('is-invalid');
      const errEl = document.getElementById(`err-${field.id}`);
      if (errEl) errEl.textContent = '';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(
      nameInput,
      'err-clientName',
      val => val.length >= 2,
      'Please enter your full name.'
    );

    const isPhoneValid = validateField(
      phoneInput,
      'err-clientPhone',
      val => val.replace(/[^0-9]/g, '').length >= 10,
      'Please enter a valid phone number with at least 10 digits.'
    );

    const isEmailValid = validateField(
      emailInput,
      'err-clientEmail',
      val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      'Please provide a valid email address.'
    );

    const isServiceValid = validateField(
      serviceInput,
      'err-serviceType',
      val => val !== '',
      'Please select a tailoring service.'
    );

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isServiceValid) {
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback-message is-error';
        feedbackEl.textContent = 'Please review the highlighted fields above.';
        feedbackEl.hidden = false;
      }
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      const btnText = submitBtn.querySelector('.btn-text');
      const spinner = submitBtn.querySelector('.btn-loading-spinner');
      if (btnText) btnText.textContent = 'Submitting Request...';
      if (spinner) spinner.hidden = false;
    }

    setTimeout(() => {
      const clientName = nameInput.value.trim();
      const clientPhone = phoneInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const serviceSelect = serviceInput;
      const serviceName = serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceInput.value;
      const preferredDate = document.getElementById('preferredDate')?.value || 'Flexible / As soon as possible';
      const clientNote = document.getElementById('clientNote')?.value.trim() || 'No additional note provided.';

      // Construct direct WhatsApp message to boutique
      const waMessage = 
`*New Fitting / Tailoring Request - Opulence & Heirloom*
👤 *Client Name:* ${clientName}
📞 *Phone / WhatsApp:* ${clientPhone}
✉️ *Email:* ${clientEmail}
✂️ *Tailoring Service:* ${serviceName}
📅 *Preferred Date:* ${preferredDate}
📝 *Garment / Fabric Details:* ${clientNote}`;

      const waUrl = `https://wa.me/919971809626?text=${encodeURIComponent(waMessage)}`;

      if (submitBtn) {
        submitBtn.disabled = false;
        const btnText = submitBtn.querySelector('.btn-text');
        const spinner = submitBtn.querySelector('.btn-loading-spinner');
        if (btnText) btnText.textContent = 'Submit Fitting Request';
        if (spinner) spinner.hidden = true;
      }

      // Open WhatsApp directly in new window
      window.open(waUrl, '_blank');

      if (feedbackEl) {
        feedbackEl.className = 'form-feedback-message is-success';
        feedbackEl.innerHTML = `
          <strong>Thank you, ${clientName}!</strong><br>
          Your request details have been prepared for WhatsApp to connect directly with our boutique desk at <strong>+91 99718 09626</strong>.<br>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-brand-primary); text-decoration: underline; font-weight: 600; display: inline-block; margin-top: 8px;">
            Click here if WhatsApp didn't open automatically &rarr;
          </a>
        `;
        feedbackEl.hidden = false;
      }

      form.reset();
    }, 600);
  });
};

// ============================================================================
// 9. Footer Year
// ============================================================================
const initFooter = () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

// ============================================================================
// 10. Application Bootstrap
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initPricingFilter();
  renderLookbookGrid('all');
  initLookbookFilters();
  initGarmentDialogHandlers();
  initShowroomHotspots();
  initQrDialog();
  initConsultationForm();
  initFooter();
});
