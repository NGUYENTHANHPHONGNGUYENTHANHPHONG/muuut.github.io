const sections = document.querySelectorAll('.section, .video-section, .gallery-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s ease-in forwards';
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => {
  section.style.opacity = 0;
  observer.observe(section);
});
