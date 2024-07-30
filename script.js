function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector('.menu').classList.toggle('active');
}

function toggleMenuClose() {
    document.querySelector('.menu-btn').classList.remove('change');
    document.querySelector('.menu').classList.remove('active');
}

// Smooth scroll with JavaScript for better control over duration
document.querySelectorAll('.navbar a, #home .right-side a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Get the height of the fixed navbar
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        // Scroll to the target element, considering the navbar height
        window.scroll({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
        
        toggleMenuClose();
        setActiveClass(this);
    });
});

// Function to set active class
function setActiveClass(element) {
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.classList.remove('active');
    });
    element.classList.add('active');
}
