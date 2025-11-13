/* ===========================================================
   Kashish Paul Portfolio — main.js
   Adds smooth scroll, section highlight, and fade-in effects
   =========================================================== */

// Smooth scroll for all navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-in animation to elements with class 'fade-in' on scroll
const fadeEls = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Trigger fade-in on scroll and on load
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Optional: highlight active navbar link based on scroll position
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120; // offset for fixed navbar
  document.querySelectorAll('section[id]').forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

// Optional hover ripple effect for buttons (small visual polish)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    this.appendChild(circle);

    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const rect = this.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    setTimeout(() => circle.remove(), 500);
  });
});
