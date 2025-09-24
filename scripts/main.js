// Select the header and prepare scroll state
const header = document.querySelector('.cs_site_header');
let lastScrollTop = 0;

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll(".cs_nav_list li a");
const sections = document.querySelectorAll('section[id]');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // quitar "active" de todos
      navLinks.forEach(l => l.parentElement.classList.remove("active"));

      // agregar "active" al <li> del link clickeado
      this.parentElement.classList.add("active");
    });
  });

   // ---- Cuando hago scroll ----
  window.addEventListener("scroll", () => {
    let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // margen para detectar antes
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Si no está en ninguna sección, poner Home
  if (window.scrollY < 200) {
    current = "home";
  }

  navLinks.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add("active");
    }
  });
  });
  // Show header on page load if user has already scrolled down
  if (window.scrollY > 50) {
    header.classList.remove("cs_top");
    header.classList.add("cs_show");
  }

  // Reveal elements on scroll using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || index * 0.1;
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Animate progress bars when they enter the viewport
  const progressBars = document.querySelectorAll('.progress_bar span');

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute('data-value');
        bar.style.width = value;
        progressObserver.unobserve(bar); // Animate only once
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => progressObserver.observe(bar));

  // Enable smooth scroll to top when the button is clicked
  const scrollTopButton = document.querySelector('.scroll_top');

  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// Handle scroll behavior for header visibility
window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    // At the top of the page → remove background
    header.classList.remove("cs_show", "cs_hide");
    header.classList.add("cs_top");
  } else if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down → hide header
    header.classList.remove("cs_show", "cs_top");
    header.classList.add("cs_hide");
  } else {
    // Scrolling up → show header with background
    header.classList.remove("cs_hide", "cs_top");
    header.classList.add("cs_show");
  }

  lastScrollTop = Math.max(currentScroll, 0);
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mrbanard', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      window.location.href = 'thank.html';
    } else {
      alert('There was a problem submitting the form.');
    }
  } catch (error) {
    alert('There was an error sending the form.');
    console.error(error);
  }
});
