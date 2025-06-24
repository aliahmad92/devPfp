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
