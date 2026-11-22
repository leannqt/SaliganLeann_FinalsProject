// Carousel: dots are clickable, and the active photo advances automatically.
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const caption = document.querySelector('.carousel-caption');
const captions = ['Youth leadership', 'Community outreach', 'Student advocacy'];
let activeSlide = 1;
let carouselTimer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('selected', i === activeSlide);
    slide.classList.toggle('side-left', i === (activeSlide + slides.length - 1) % slides.length);
    slide.classList.toggle('side-right', i === (activeSlide + 1) % slides.length);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === activeSlide);
    dot.setAttribute('aria-pressed', String(i === activeSlide));
  });
  caption.textContent = captions[activeSlide];
}
function startCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => showSlide(activeSlide + 1), 4500);
}
dots.forEach((dot, i) => dot.addEventListener('click', () => {
  showSlide(i);
  startCarousel();
}));
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(carouselTimer));
carousel.addEventListener('mouseleave', startCarousel);
showSlide(activeSlide);
startCarousel();

// Mobile navigation opens and closes; selecting a link scrolls to that section.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

// A static website cannot deliver email by itself. This opens the visitor's
// email app with the completed message; set the destination below first.
const CONTACT_EMAIL = 'leannsaligan@pcb.edu.ph
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  if (CONTACT_EMAIL === 'leannsaligan@pcb.edu.ph') {
    document.getElementById('form-status').textContent =
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent('Portfolio inquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message')
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
