// typed js
const typed = new Typed('#typing', {
  strings: ['Tutoring for kindergarten children', 'Learn while playing', 'Learn with fun'],
  typeSpeed: 100,
  showCursor: false,
});

// navbar on scroll
const nav = document.querySelector('nav');
document.addEventListener('scroll', function() {
  if(scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});