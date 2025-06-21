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


  particlesJS("particles-js", {"particles":{"number":{"value":101,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":144.30708547789706,"color":"#ffffff","opacity":0.5,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":450.7028528272465,"size":40,"duration":5.603332764879281,"opacity":8,"speed":3},"repulse":{"distance":100,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


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

// --- FUNCIONALIDAD PARA EL BOTÓN DE SCROLL HACIA ARRIBA ---

// Esperamos a que todo el contenido de la página se cargue primero
document.addEventListener('DOMContentLoaded', () => {

  // 1. Seleccionamos el botón por su clase
  const scrollTopButton = document.querySelector('.scroll_top');

  // 2. Nos aseguramos de que el botón realmente existe en la página
  if (scrollTopButton) {

    // 3. Añadimos un "escuchador" que se activa cuando alguien hace click
    scrollTopButton.addEventListener('click', (event) => {
      
      // 4. Prevenimos el comportamiento por defecto del enlace (que es un salto brusco)
      event.preventDefault();

      // 5. Usamos la magia de JavaScript para hacer un scroll suave hasta el inicio (top: 0)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // ¡Esta es la clave para la animación suave!
      });
    });
  }

});