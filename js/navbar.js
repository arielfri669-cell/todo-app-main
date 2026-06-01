// navbar.js

console.log("Navbar Loaded")

const navLinks = document.querySelectorAll(".nav-links a")

function markActiveLink() {
  const currentPage = window.location.pathname.split("/").pop()

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop()

    if (linkPage === currentPage) {
      link.classList.add("active-link")
    }
  })
}

markActiveLink()