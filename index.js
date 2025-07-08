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
<script>
  const toggleBtn = document.querySelector('[data-sidebar-btn]');
  const sidebarInfoMore = document.querySelector('.sidebar-info-more');

  toggleBtn.addEventListener('click', () => {
    sidebarInfoMore.classList.toggle('active');

    const btnText = toggleBtn.querySelector('span');
    btnText.textContent = sidebarInfoMore.classList.contains('active')
      ? 'Hide Contacts'
      : 'Show Contacts';
  });
</script>
