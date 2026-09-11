document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var item = btn.closest('.nav-item');
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.dropdown-menu a, .nav-item > a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 780) {
        nav.classList.remove('open');
      }
    });
  });

  // Collapsible "How does FTAP work?" details
  var detailsToggle = document.getElementById('ftap-details-toggle');
  var details = document.getElementById('ftap-details');

  if (detailsToggle && details) {
    detailsToggle.addEventListener('click', function () {
      var isOpen = details.classList.toggle('open');
      detailsToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      detailsToggle.textContent = isOpen ? 'Hide Details' : 'How does FTAP work?';
    });
  }
});
