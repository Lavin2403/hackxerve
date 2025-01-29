// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // Adjust for fixed header
        behavior: 'smooth',
      });
    }
  });
});

// FAQ Section Toggle
document.querySelectorAll('.faq-item h3').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

// Hero Section Animation on Page Load
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image img');

  heroContent.style.opacity = '0';
  heroImage.style.opacity = '0';
  heroContent.style.transform = 'translateY(20px)';
  heroImage.style.transform = 'translateY(20px)';

  setTimeout(() => {
    heroContent.style.transition = 'all 1s ease-in-out';
    heroImage.style.transition = 'all 1s ease-in-out';

    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
    heroImage.style.opacity = '1';
    heroImage.style.transform = 'translateY(0)';
  }, 200);
});

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  themeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none';
});

// Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  e.target.reset();
});

// Newsletter Form Submission
document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing!');
  e.target.reset();
});

// Order Form Submission
document.getElementById('order-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'payment.html';
});

// Payment Form Submission
document.getElementById('payment-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for shopping with us! Your product will be shipped at the earliest.');
  window.location.href = 'index.html';
});