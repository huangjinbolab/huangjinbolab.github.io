(function() {
  var carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function(c) {
    var slides = c.querySelector('.slides');
    if (!slides) return;
    var images = slides.querySelectorAll('img');
    if (images.length <= 1) return;
    var dots = c.querySelectorAll('.dot');
    var idx = 0;
    var interval = parseInt(c.getAttribute('data-interval') || '4000', 10);
    function go(i) {
      idx = (i + images.length) % images.length;
      slides.style.transform = 'translateX(' + (-idx * 100) + '%)';
      if (dots.length === images.length) {
        dots.forEach(function(d, di) { d.classList.toggle('active', di === idx); });
      }
    }
    setInterval(function() { go(idx + 1); }, interval);
    dots.forEach(function(d, di) { d.addEventListener('click', function() { go(di); }); });
  });
})();
