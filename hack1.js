// script.js

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
  