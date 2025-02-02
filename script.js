// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    themeToggle.querySelector('i').classList.toggle('fa-sun', isLightMode);
    themeToggle.querySelector('i').classList.toggle('fa-moon', !isLightMode);
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animate progress bars when skills section is in view
// Animate progress bars when skills section is in view
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(progress => {
        const progressValue = progress.getAttribute('data-progress');
        progress.style.width = `${progressValue}%`;
    });
};

const skillsSection = document.querySelector('.skills-section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(skillsSection); // Stop observing after animation
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(skillsSection);
// Typing Effect
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editor'],
    typeSpeed: 50,
    loop: true
});