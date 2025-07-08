// Enabling Page Navigation

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    const targetPage = this.innerText.toLowerCase(); // Example: "Projects" -> "projects"

    for (let j = 0; j < pages.length; j++) {
      const isTarget = pages[j].dataset.page === targetPage;

      pages[j].classList.toggle('active', isTarget);
      navigationLinks[j].classList.toggle('active', isTarget);
    }

    window.scrollTo(0, 0); // Optional: scroll to top on page switch
  });
}
// Wait for DOM to load (safe if placed at the end of HTML too)
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('[data-sidebar-btn]');
  const toggleText = toggleBtn.querySelector('span');

  if (sidebar && toggleBtn && toggleText) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');

      const isActive = sidebar.classList.contains('active');

      // Change button text
      toggleText.textContent = isActive ? 'Hide Contacts' : 'Show Contacts';

      // Optional: smoothly expand/collapse
      sidebar.style.maxHeight = isActive ? '1000px' : '112px';
    });
  }
});
