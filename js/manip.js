// function hidePage(){
//     const skill=document.getElementById("skill");
//     const about=document.getElementById("about");
//     // if(skill.style.display==="block"){
//     //     about.style.display="none";
//     // }
//      if(about){
//         skill.style.display="none"
//     }
//     else if(skill) {

//         about.style.display="none";
//     }
// }
// function hidePage(targetSectionId) {
//     const sections = ["about-section", "skill-section"];

//     for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);

//         if (sectionId === targetSectionId) {
//             section.style.display = section.style.display === "none" || section.style.display === "" ? "block" : "none";
//         } else {
//             section.style.display = "none";
//         }
//     }
// }
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
};
window.addEventListener('scroll', reveal);

const activePage = window.location.pathname;

const navLinks = document.querySelector('nav a');

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});

