/* ═══════════════════════════════════════════
   Beyond IC — Shared JS
   ═══════════════════════════════════════════ */

// ─── Theme Toggle ───
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('lp-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
}

(function initTheme() {
  const saved = localStorage.getItem('lp-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }
})();

// ─── Mobile Menu ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  if (nav && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Close menu on link click
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
});

// ─── Mobile Dropdown Toggle ───
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        e.stopPropagation();
        var dropdown = toggle.closest('.nav-dropdown');
        var wasOpen = dropdown.classList.contains('open');
        // Close all dropdowns first
        document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
        if (!wasOpen) dropdown.classList.add('open');
      }
    });
  });
});

// ─── Nav Scroll Effect ───
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Active Nav Link (page-based) ───
(function setActiveNav() {
  var currentPage = document.body.getAttribute('data-current-page');
  if (!currentPage) return;
  document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index' && href === 'index.html')) {
      link.classList.add('active');
      // Also mark parent dropdown as active
      var dropdown = link.closest('.nav-dropdown');
      if (dropdown) dropdown.classList.add('active');
    }
  });
})();

// ─── Accordion ───
function toggleAccordion(header) {
  var item = header.parentElement;
  var wasOpen = item.classList.contains('open');
  // Close siblings
  item.parentElement.querySelectorAll('.accordion-item').forEach(function(i) { i.classList.remove('open'); });
  if (!wasOpen) item.classList.add('open');
}

// ─── Tabs ───
function switchTab(event, tabId) {
  var container = event.target.closest('.tabs');
  container.querySelectorAll('.tab-header').forEach(function(h) { h.classList.remove('active'); });
  container.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ─── Fade-In Observer ───
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });
});

// ─── Checklist Persistence (localStorage) ───
document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  checkboxes.forEach(function(cb) {
    var key = 'lp-check-' + cb.id;
    // Restore state
    if (localStorage.getItem(key) === 'true') cb.checked = true;
    // Save on change
    cb.addEventListener('change', function() {
      localStorage.setItem(key, cb.checked);
      updateProgress();
    });
  });
  updateProgress();
});

// ─── Progress Counter (self-assessment page) ───
function updateProgress() {
  var bar = document.getElementById('progressFill');
  var label = document.getElementById('progressLabel');
  if (!bar || !label) return;

  var total = document.querySelectorAll('.checklist-item input[type="checkbox"]').length;
  var checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
  var pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  bar.style.width = pct + '%';
  label.textContent = checked + ' of ' + total + ' (' + pct + '%)';
}
