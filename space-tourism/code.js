
const explore = document.getElementById("explore")
const animation = document.getElementById("anim")

function animatie() {
    animation.style.transform = "scale(1.5)"
   
}

function revers() {
    animation.style.transform = "scale(1)"
   animation.style.transition = "transform 0.5s"
    
}


explore.addEventListener("mouseover", animatie)
explore.addEventListener("mouseout", revers)