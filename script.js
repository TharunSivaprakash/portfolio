// ============================================
// PORTFOLIO SCRIPT
// ============================================

// ---- CURSOR ----
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
const animCursor = () => {
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
};
animCursor();

// ---- PARTICLES ----
const pCanvas = document.getElementById('particleCanvas');
const pCtx = pCanvas.getContext('2d');
let particles = [];
function resizeParticles() { pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight; }
resizeParticles();
window.addEventListener('resize', resizeParticles);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * pCanvas.width;
    this.y = Math.random() * pCanvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.life = Math.random() * 200 + 100;
  }
  update() {
    this.x += this.speedX; this.y += this.speedY; this.life--;
    if (this.life <= 0 || this.x < 0 || this.x > pCanvas.width || this.y < 0 || this.y > pCanvas.height) this.reset();
  }
  draw() {
    const theme = document.body.dataset.theme || 'landing';
    let color;
    if (theme === 'designer') color = `rgba(253, 121, 168, ${this.opacity})`;
    else if (theme === 'developer') color = `rgba(232, 83, 26, ${this.opacity})`;
    else color = `rgba(245, 166, 35, ${this.opacity})`;
    pCtx.beginPath();
    pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    pCtx.fillStyle = color;
    pCtx.fill();
  }
}
for (let i = 0; i < 60; i++) particles.push(new Particle());
function animateParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ---- PAGE NAVIGATION ----
function goToPage(page) {
  const landing = document.getElementById('landing-page');
  const devPage = document.getElementById('developer-page');
  const desPage = document.getElementById('designer-page');
  const topNav = document.getElementById('topNav');
  const backBtn = document.getElementById('backBtn');

  landing.style.opacity = '0';
  landing.style.transform = 'scale(0.95)';

  setTimeout(() => {
    landing.style.display = 'none';
    if (page === 'developer') {
      document.body.dataset.theme = 'developer';
      document.body.style.background = '#060a14';
      devPage.style.display = 'block';
      desPage.style.display = 'none';
      topNav.style.display = 'flex';
      backBtn.style.display = 'flex';
      setTimeout(() => { devPage.style.opacity = '1'; }, 50);
    } else {
      document.body.dataset.theme = 'designer';
      document.body.style.background = '#0a0a2e';
      devPage.style.display = 'none';
      desPage.style.display = 'block';
      topNav.style.display = 'none';
      backBtn.style.display = 'flex';
      setTimeout(() => { desPage.style.opacity = '1'; }, 50);
    }
    window.scrollTo(0, 0);
    document.querySelectorAll('.reveal:not(.in-view)').forEach(el => observer.observe(el));
  }, 500);
}

function goHome() {
  const landing = document.getElementById('landing-page');
  const devPage = document.getElementById('developer-page');
  const desPage = document.getElementById('designer-page');
  const topNav = document.getElementById('topNav');
  const backBtn = document.getElementById('backBtn');

  devPage.style.opacity = '0';
  desPage.style.opacity = '0';

  setTimeout(() => {
    devPage.style.display = 'none';
    desPage.style.display = 'none';
    topNav.style.display = 'none';
    backBtn.style.display = 'none';
    document.body.dataset.theme = 'landing';
    document.body.style.background = '';
    landing.style.display = 'flex';
    setTimeout(() => {
      landing.style.opacity = '1';
      landing.style.transform = 'scale(1)';
    }, 50);
    window.scrollTo(0, 0);
  }, 400);
}

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---- SCROLLY TEXT ----
const zone = document.getElementById('scrollyZone');
const sText1 = document.getElementById('sText1');
const sText2 = document.getElementById('sText2');
const sText3 = document.getElementById('sText3');

function updateScrolly() {
  if (!zone) return;
  const zoneTop = zone.getBoundingClientRect().top;
  const zoneH = zone.offsetHeight;
  const progress = Math.max(0, Math.min(1, -zoneTop / (zoneH - window.innerHeight)));

  const p1 = Math.max(0, Math.min(1, (progress - 0.05) / 0.12));
  const p1out = Math.max(0, Math.min(1, (progress - 0.22) / 0.08));
  if (sText1) { sText1.style.opacity = p1 - p1out; sText1.style.transform = `translate(-50%, calc(-50% + ${(1 - p1 + p1out) * 40}px))`; }

  const p2 = Math.max(0, Math.min(1, (progress - 0.35) / 0.12));
  const p2out = Math.max(0, Math.min(1, (progress - 0.52) / 0.08));
  if (sText2) { sText2.style.opacity = p2 - p2out; sText2.style.transform = `translateY(calc(-50% + ${(1 - (p2 - p2out)) * 40}px))`; }

  const p3 = Math.max(0, Math.min(1, (progress - 0.65) / 0.12));
  const p3out = Math.max(0, Math.min(1, (progress - 0.85) / 0.08));
  if (sText3) { sText3.style.opacity = p3 - p3out; sText3.style.transform = `translateY(calc(-50% + ${(1 - (p3 - p3out)) * 40}px))`; }
}
window.addEventListener('scroll', updateScrolly, { passive: true });



// ---- LIGHTBOX ----
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ---- STAGGER REVEALS ----
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 6) * 0.08 + 's';
});

// Make functions global
window.goToPage = goToPage;
window.goHome = goHome;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
