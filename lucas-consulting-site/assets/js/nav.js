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

  // Generic collapsible "reveal" buttons (e.g. "How does FTAP work?", "Message Us Directly")
  document.querySelectorAll('.toggle-reveal').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('data-target'));
    if (!target) return;

    var labelClosed = btn.getAttribute('data-label-closed') || btn.textContent;
    var labelOpen = btn.getAttribute('data-label-open') || labelClosed;

    btn.addEventListener('click', function () {
      var isOpen = target.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.textContent = isOpen ? labelOpen : labelClosed;
    });
  });
});
