const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const sections = document.querySelector('section');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            sections.style.marginTop = "2em";
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
};
window.addEventListener('scroll', reveal);


let lastScroll = 0;
let navBar = document.querySelector('nav');
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScroll) {
        navBar.style.top = "-100vh";
    } else {
        navBar.style.top = "0";
    }
    lastScroll = scrollTop;
});
