var marg = 0;
function moureElement(){
    let paragraf = document.getElementById("paragraf1");
    marg+= 50;
    paragraf.style.margin = marg + "px";    
}
function reset(){
    let paragraf = document.getElementById("paragraf1");
    paragraf.style.margin = 0 + "px";
}
//intentar amb randoms
function alPasarRaton(){
    let paragraf = document.getElementById("paragraf2");
    paragraf.style.display = "flex";
}
function alSalirRaton(){
    let paragraf = document.getElementById("paragraf2");
    paragraf.style.display = "none";
}
