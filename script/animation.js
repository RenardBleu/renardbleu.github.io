let logoSite = document.querySelector(".logo-site");
let titreSite = document.querySelector(".titre-site")
let canvas_round = document.querySelector("#pdp-element");
let c_pdp_round = document.querySelector("#round-pdp")

function anim_title_load(){
    logoSite.style.transform = "translateX(900px) scale3d(1, 1, 1)";
    setTimeout(function (){
        logoSite.style.transition = "transform 1.2s ease-in-out";
        logoSite.style.transform = "translateX(0px)";
        titreSite.style.clipPath = "inset(-100px -100px -100px -100px)";
    },500)
}

function canvas_anim_roud(){
    canvas_round.style.borderRadius = "200px";
}
function canvas_anim(){
    canvas_round.style.borderRadius = "10px";
}

c_pdp_round.onclick = function (){
    if(c_pdp_round.checked === true){
        canvas_anim_roud();
    }else {
        canvas_anim()
    }
};
logoSite.onload = anim_title_load();