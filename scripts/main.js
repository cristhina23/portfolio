const header = document.querySelector('.cs_site_header');
let lastScrollTop = 0;

// Verifica si al cargar ya hay scroll
document.addEventListener("DOMContentLoaded", function () {
  if (window.scrollY > 50) {
    header.classList.remove("cs_top");
    header.classList.add("cs_show");
  }
});

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    // Scroll al tope → quitar fondo
    header.classList.remove("cs_show");
    header.classList.remove("cs_hide");
    header.classList.add("cs_top");
  } else if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scroll hacia abajo → ocultar header
    header.classList.remove("cs_show");
    header.classList.remove("cs_top");
    header.classList.add("cs_hide");
  } else {
    // Scroll hacia arriba → mostrar con fondo oscuro
    header.classList.remove("cs_hide");
    header.classList.remove("cs_top");
    header.classList.add("cs_show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


  particlesJS("particles-js", {"particles":{"number":{"value":104,"density":{"enable":true,"value_area":801.3648243462092}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.25654592973848367,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.017060304327615,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1202.559045649142,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || index * 0.1;
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});

 document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress_bar span');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const value = bar.getAttribute('data-value');
          bar.style.width = value;
          observer.unobserve(bar); // Solo animar una vez
        }
      });
    }, {
      threshold: 0.5
    });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((el) => observer.observe(el));
});