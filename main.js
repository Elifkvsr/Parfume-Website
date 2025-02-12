const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})


//SCROLL UP
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-10")
    }
    else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-10")
    }
}
window.addEventListener("scroll", scrollUp)



// ACTİVE LİNK
const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "hero"

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active")
        if (item.href.includes(current)) {
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)


//ANİMATİON
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300
})
sr.reveal('hero_big-text')
