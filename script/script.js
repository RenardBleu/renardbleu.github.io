//Definition des images
let bg=new Image();
bg.src = "fond/fond-teaser1.png";

let cloud=new Image();
cloud.src = "nuage/vide.png";

//Definition des varibales par défaut
let initial = "";
let dataURL = "#";
let name = "😎";
let color = "white"
let txt_style = "source-over"
let txt_style_active = false
let bg_load = null
let cloud_load = null
let font = "600px 'Burbank Big Condensed Black'";
let shadow = "rgba(0,0,0,0.9)";
let shadow_active = false
let opacity = 1;

//Recuperation des element dans le DOM

const canvas = document.querySelector("#pdp-element");
const ctx = canvas.getContext('2d');

const alert_initial = document.createElement("p").textContent = "Le text ne doit pas être supérieure à 3 lettre";
alert_initial.className = "alert_initial";

const alert = document.querySelector(".alert");
const alert2 = document.querySelector(".alert-anti-vol");

const download = document.querySelector("#c_download");

const c_txt_lueur = document.querySelector("#text-lueur")
const c_txt_style = document.querySelector("#text-style");
const c_txt_opacity = document.querySelector("#text-opacity");

//Récupération du text
initial_input = document.querySelector("#initial");

initial_input.addEventListener("change", (event) => {getValue()});

function getValue() {

    initial = document.querySelector("#initial").value;


//verifie que le text ne fait pas plus de 3 lettres

    if (initial.length > 3) {
        console.log("Le text ne doit pas être supérieure à 3 lettre")
        name = "❌";
        font = "500px 'Burbank Big Condensed Black'"
        drawn();
        alert2.style.display = "none"
        alert2.style.transform = "translatey(-60px)"
        alert.style.display = "flex"
        alert.style.transform = "translatey(0px)"
    } else {
        if (initial === " ") {
            name = "❌";
            font = "500px 'Burbank Big Condensed Black'"
            drawn();
            alert2.style.display = "flex"
            alert2.style.transform = "translatey(0px)"
        } else {
            if (initial === "  ") {
                name = "❌";
                font = "500px 'Burbank Big Condensed Black'"
                drawn();
                alert2.style.display = "flex"
                alert2.style.transform = "translatey(0px)"
            } else {
                if (initial === "   ") {
                    name = "❌";
                    font = "500px 'Burbank Big Condensed Black'"
                    drawn();
                    alert2.style.display = "flex"
                    alert2.style.transform = "translatey(0px)"
                } else {
                    text_len();
                }
            }
        }
    }
}
function text_len(){
    name = initial
    alert.style.display = "none"
    alert.style.transform = "translatey(-60px)"
    alert2.style.display = "none"
    alert2.style.transform = "translatey(-60px)"

//Modifi la taille de la police par rapport aux nombres de lettres

    if (name.length === 1) {
        font = "800px 'Burbank Big Condensed Black'";
        drawn();
    }
    if (name.length === 2) {
        font = "600px 'Burbank Big Condensed Black'";
        drawn();
    }
    if (name.length === 3) {
        font = "400px 'Burbank Big Condensed Black'";
        drawn();
    }
}

c_txt_opacity.onclick = function lueur_verif(){
    if (c_txt_opacity.checked === true){
        opacity = 0.7;
        drawn()
    }else {
        opacity = 1;
        drawn();
    }
}

c_txt_style.onclick = function lueur_verif(){
    if (c_txt_style.checked === true){
        txt_style_active = true;
        color_style_verif();
    }else {
        txt_style_active = false;
        color_style_verif();
    }
}

c_txt_lueur.onclick = function (){
    if (c_txt_lueur.checked === true){
        shadow_active = true
        lueur_verif();
    }else {
        shadow_active = false
        lueur_verif();
    }
}

function lueur_verif(){
    if (shadow_active === true){
        shadow = color;
        drawn();
    }else {
        shadow = "rgba(0,0,0,0.9)";
        drawn();
    }
}

function color_style_verif(){
    if (txt_style_active === true){
        txt_style = "soft-light"
    } else {
        txt_style = "source-over"
    }
    drawn();
}

function cloud_loading(){
    cloud.onload = function (){
        cloud_load = cloud;
        drawn();
    }
}
function bg_loading(){
    bg.onload = function (){
        bg_load = bg;
        cloud_load = cloud;
        drawn();
    }
}

function drawn(){

    ctx.drawImage(bg_load,0,0, canvas.width, canvas.height);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = font;
    ctx.globalAlpha = opacity;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = shadow;

    ctx.fillStyle = color;
    ctx.globalCompositeOperation = txt_style;
    ctx.fillText(name.toLocaleUpperCase(),canvas.width/2, canvas.height/1.7);
    ctx.globalAlpha = 1;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.shadowColor = '';
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(cloud_load,0,0, canvas.width, canvas.height);

    console.log("pdp genéré avec succès")

    dataURL = canvas.toDataURL("image/png")
    download.download = "PDP_" + initial + ".jpeg";
}

download.onclick=function(){
    if (download.href === "#") {
    } else {
        download.href = dataURL;
    }
}

window.onload = bg_loading();