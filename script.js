/* ===========================================
   EVAN GILMAN PORTFOLIO - SCRIPTS
   =========================================== */

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Content Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const contentSections = document.querySelectorAll('.content-section');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter sections
      contentSections.forEach(section => {
        if (filter === 'all' || section.dataset.category === filter) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });

      // Re-process embeds after filtering
      if (typeof instgrm !== 'undefined') {
        instgrm.Embeds.process();
      }
      if (typeof twttr !== 'undefined') {
        twttr.widgets.load();
      }
    });
  });
}

// Initialize Swiper for BTS Carousel
const btsCarousel = document.querySelector('.bts-carousel');

if (btsCarousel && typeof Swiper !== 'undefined') {
  new Swiper('.bts-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
    },
  });
}

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loaded class to body for entrance animations
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Optional: Lazy load embeds as they come into view
// This helps with page performance when you have many embeds
const observeEmbeds = () => {
  const embeds = document.querySelectorAll('.content-embed, .featured-embed');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1
  });

  embeds.forEach(embed => observer.observe(embed));
};

// Run on load
if (document.readyState === 'complete') {
  observeEmbeds();
} else {
  window.addEventListener('load', observeEmbeds);
}
// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
const photoGrid = document.querySelector('.photo-grid');

if (photoGrid && lightbox) {
  photoGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
    document.querySelector('.lightbox-caption').textContent = e.target.dataset.caption || '';
    lightbox.classList.add('active');
  }
});

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    }
  });
}
window.addEventListener('load', function() {
  if (window.twttr && twttr.widgets) {
    twttr.widgets.load();
  }
});