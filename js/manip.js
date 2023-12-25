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
function hidePage(targetSectionId) {
    const sections = ["about-section", "skill-section"]; 

    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (sectionId === targetSectionId) {
            section.style.display = section.style.display === "none" || section.style.display === "" ? "block" : "none";
        } else {
            section.style.display = "none";
        }
    }
}
