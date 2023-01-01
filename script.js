let menuVisible = false;
// hide menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //hides the menu once an option is selected
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Function that applies the animations of the skills
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progress");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("UXUI-design");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("Web-Design");
    habilidades[5].classList.add("communication");
    habilidades[6].classList.add("teamwork");
    habilidades[7].classList.add("creativity");
    habilidades[8].classList.add("dedication");
    habilidades[9].classList.add("project");
  }
}

//detect the scrolling to apply the animation of the skill bar
window.onscroll = function () {
  efectoHabilidades();
};
