/**
 * OPULENCE & HEIRLOOM — Seasonal Diwali Festive Celebrations Layer (Temporary)
 * Luxury Floating Golden Embers & Animated Diya Lighting
 * To remove after Diwali: Delete this script and styles-diwali.css or run `git checkout baseline-default`
 */

export const initDiwaliCelebration = () => {
  // Respect user preference for reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // 1. Enhance Announcement Bar with Festive Greeting & Animated Diyas
  const announcementBar = document.querySelector('.announcement-bar');
  if (announcementBar) {
    announcementBar.classList.add('is-diwali');
    const content = announcementBar.querySelector('.announcement-content');
    if (content) {
      const pill = content.querySelector('.announcement-pill');
      if (pill) {
        pill.classList.add('diwali-pill');
        pill.textContent = 'FESTIVE EDIT';
      }

      const diyaSvg = `
        <svg class="diwali-svg-diya" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- Diya Base Lamp -->
          <path d="M4 14C4 18.4183 7.58172 20 12 20C16.4183 20 20 18.4183 20 14H4Z" fill="#C59B27" stroke="#E6C280" stroke-width="0.8"/>
          <path d="M7 14C7 16.5 9.23858 17.5 12 17.5C14.7614 17.5 17 16.5 17 14H7Z" fill="#8B6508"/>
          <!-- Glowing Flame -->
          <g class="diwali-flame-path">
            <path d="M12 4C10.5 7.5 9.5 9.5 9.5 11.5C9.5 12.88 10.62 14 12 14C13.38 14 14.5 12.88 14.5 11.5C14.5 9.5 13.5 7.5 12 4Z" fill="url(#flameGrad)"/>
            <circle cx="12" cy="11.5" r="1.5" fill="#FFFFFF"/>
          </g>
          <defs>
            <radialGradient id="flameGrad" cx="0.5" cy="0.8" r="0.8">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="35%" stop-color="#FFDD55"/>
              <stop offset="70%" stop-color="#FF8800"/>
              <stop offset="100%" stop-color="#DD3300" stop-opacity="0.9"/>
            </radialGradient>
          </defs>
        </svg>
      `;

      const textEl = content.querySelector('.announcement-text');
      if (textEl) {
        textEl.innerHTML = `
          <span class="diwali-diya-badge">
            ${diyaSvg}
            <strong>Shubh Deepavali</strong> • Festive Atelier Fittings &amp; Custom Stitching Slots Open
            ${diyaSvg}
          </span>
        `;
      }
    }
  }

  // 2. Create Floating Golden Canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'diwaliCanvas';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Luxury Gold Color Palette
  const GOLD_COLORS = [
    '255, 215, 0',    // Bright Gold
    '240, 208, 128',  // Soft Champagne Gold
    '255, 235, 175',  // Pale Warm Light
    '224, 184, 76',   // Rich Antique Gold
    '255, 190, 70'    // Deep Amber Flame
  ];

  const particleCount = width < 768 ? 22 : 38;
  const particles = [];

  class GoldEmber {
    constructor(isInitial = false) {
      this.reset(isInitial);
    }

    reset(isInitial = false) {
      this.x = Math.random() * width;
      this.y = isInitial ? Math.random() * height : height + Math.random() * 40;
      this.size = Math.random() * 2.2 + 1.0;
      this.speedY = -(Math.random() * 0.55 + 0.35); // Gentle upward float
      this.swayAngle = Math.random() * Math.PI * 2;
      this.swaySpeed = Math.random() * 0.02 + 0.01;
      this.swayRadius = Math.random() * 15 + 8;
      this.baseAlpha = Math.random() * 0.45 + 0.25;
      this.twinkleSpeed = Math.random() * 0.03 + 0.015;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.color = GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)];
    }

    update() {
      this.y += this.speedY;
      this.swayAngle += this.swaySpeed;
      this.twinklePhase += this.twinkleSpeed;

      // Soft cyclical alpha pulsing
      this.currentAlpha = this.baseAlpha + Math.sin(this.twinklePhase) * 0.2;
      if (this.currentAlpha < 0.05) this.currentAlpha = 0.05;

      // Reset when floating off top
      if (this.y < -30) {
        this.reset(false);
      }
    }

    draw(context) {
      const currentX = this.x + Math.sin(this.swayAngle) * this.swayRadius;
      
      context.save();
      context.beginPath();
      context.arc(currentX, this.y, this.size, 0, Math.PI * 2);
      
      // Radiant soft glow
      context.shadowColor = `rgba(${this.color}, 0.8)`;
      context.shadowBlur = this.size * 3.5;
      context.fillStyle = `rgba(${this.color}, ${this.currentAlpha})`;
      context.fill();
      context.restore();
    }
  }

  // Micro Festive Sparklers (Subtle Stardust Twinkles)
  const sparklers = [];
  class MicroSparkle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * (height * 0.85) + (height * 0.1);
      this.maxSize = Math.random() * 4.5 + 2.5;
      this.progress = 0;
      this.speed = Math.random() * 0.025 + 0.015;
      this.color = GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)];
    }

    update() {
      this.progress += this.speed;
      return this.progress < 1.0;
    }

    draw(context) {
      // Scale up then scale down smoothly
      const scale = Math.sin(this.progress * Math.PI);
      const curSize = this.maxSize * scale;
      const alpha = scale * 0.85;

      context.save();
      context.translate(this.x, this.y);
      context.strokeStyle = `rgba(${this.color}, ${alpha})`;
      context.lineWidth = 1;
      context.shadowColor = `rgba(${this.color}, 0.9)`;
      context.shadowBlur = curSize * 2.5;

      // Draw 4-pointed delicate star
      context.beginPath();
      context.moveTo(-curSize, 0);
      context.lineTo(curSize, 0);
      context.moveTo(0, -curSize);
      context.lineTo(0, curSize);
      context.stroke();

      // Core glow dot
      context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.beginPath();
      context.arc(0, 0, curSize * 0.35, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }
  }

  // Initialize embers
  for (let i = 0; i < particleCount; i++) {
    particles.push(new GoldEmber(true));
  }

  let animationFrameId = null;
  let isRunning = true;
  let lastSparkleTime = Date.now();

  const loop = () => {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Update and draw embers
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);
    }

    // Periodically spawn a delicate micro sparkle
    const now = Date.now();
    if (now - lastSparkleTime > 1800 && sparklers.length < 5) {
      sparklers.push(new MicroSparkle());
      lastSparkleTime = now;
    }

    // Update and draw sparklers
    for (let i = sparklers.length - 1; i >= 0; i--) {
      const active = sparklers[i].update();
      if (active) {
        sparklers[i].draw(ctx);
      } else {
        sparklers.splice(i, 1);
      }
    }

    animationFrameId = requestAnimationFrame(loop);
  };

  loop();

  // Pause when page is not visible to conserve battery & performance
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      if (!isRunning && !document.body.classList.contains('diwali-off')) {
        isRunning = true;
        loop();
      }
    }
  });

  // 3. Discreet Floating Festive Toggle Dock
  const toggleDock = document.createElement('div');
  toggleDock.className = 'diwali-toggle-dock';
  toggleDock.innerHTML = `
    <button class="diwali-toggle-btn" id="diwaliToggleBtn" aria-label="Toggle Diwali festive sparkles">
      <span class="diwali-toggle-indicator" aria-hidden="true"></span>
      <span>🪔 Diwali Sparkles</span>
    </button>
  `;
  document.body.appendChild(toggleDock);

  const toggleBtn = document.getElementById('diwaliToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOff = document.body.classList.toggle('diwali-off');
      if (isOff) {
        isRunning = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, width, height);
      } else {
        isRunning = true;
        loop();
      }
    });
  }
};

// Auto-run if loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDiwaliCelebration);
} else {
  initDiwaliCelebration();
}
