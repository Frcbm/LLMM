function colorBody(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "black";
}
function cambiarTema(){
    let body = document.getElementsByTagName("body")[0];
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "darkgrey";
    } else {
        body.style.backgroundColor = "black";
    }
}
var i = 0;
function avanzar(){    
    let article = document.getElementsByClassName("parrafo");
    article[i].style.display = "none";
    i++;
    if(i >= article.length){
        i = 0;
    }
    article[i].style.display = "flex";    
}
function retroceder(){
    let article = document.getElementsByClassName("parrafo");
    article[i].style.display = "none";
    i--;
    if(i < 0){
        i = article.length - 1;
    }
    article[i].style.display = "flex";
}
function generarID(){
    return parseInt(Math.random() * 1000 + 1);
}
/*Validació formulari Sorà*/ 
function validarDatos(){
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
    /*let foto = document.getElementById("foto").value;*/
    let suscripcion = document.getElementById("suscripcion").value;
    let tarjeta = document.getElementById("tarjeta").value;
    tarjeta = tarjeta.replace(/\s+/g, '').replace(/-/g, '');
    if(!/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/.test(nombre)){
        alert("Nombre no válido");
        return false;
    }
    if(!/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/.test(apellido)){
        alert("Apelido no válido");
        return false;
    }
    /*if(!/^.*(jpg|jpeg|png)$/.test(foto) || foto == null){
        alert("Suba una imagen por favor")
        return false;
    }*/
    
    if(/^Elige tu suscripción$/.test(suscripcion)){
        alert("Elige el tipo de suscripción");
        return false;
    }
    if(!/^4[0-9]{15}$/.test(tarjeta)){
        alert("Tarjeta no válida")
        return false;
    }
    return true;
}
function crearCarnet() {
    let suscripcion = document.getElementById("suscripcion").value;
    document.getElementById("formulario").style.display = "none";
    

    let carnet = document.getElementById("carnet");
    carnet.style.display = "flex";
    carnet.style.flexDirection = "column";

    
    /*let foto = inputFoto.files[0];

    let lector = new FileReader();

    lector.onload = function (e) {
        var imagenBase64 = e.target.result;

        localStorage.setItem("imagenCargada", imagenBase64);
        let imagen = document.createElement("img");
        imagen.alt = "foto carnet";
        imagen.src = imagenBase64;
        imagen.style.width = "100px";
        imagen.style.height = "150px";
        document.getElementById("interiorCarnet").innerHTML = '';

        document.getElementById("interiorCarnet").appendChild(imagen);
    };
        
    lector.readAsDataURL(foto);*/
    switch (suscripcion) {
        case "Normal":
            carnet.style.backgroundColor = "green";
            break;
        case "Colaborador":
            carnet.style.backgroundColor = "red";
            break;
        case "Premium":
            carnet.style.backgroundColor = "rgb(212,175,55)";
            carnet.style.color = "rgb(80,00,80)";
            break;
    }

    document.getElementById("tituloCarnet").textContent = "CROW GAMING INTEL E-SPORTS CLUB";
    document.getElementById("name").textContent = document.getElementById("nombre").value + " " + document.getElementById("apellido").value;
    document.getElementById("suscription").textContent = document.getElementById("suscripcion").value;
    document.getElementById("identificador").textContent = "Socio nº: 000" + generarID();
}

function mostrarText() {
    let tooltip = document.getElementsByClassName("oculto");
    
    tooltip[i].style.visibility = "visible";
}function ocultarText() {
    let tooltip = document.getElementsByClassName("oculto");
    tooltip[i].style.visibility = "hidden";
}
function pagament(){    
    let opcio = document.getElementById("tarjeta").value;
    let form = document.getElementById("formulario");    
    if(document.getElementById("ele") != null){
        reset();
    }    let but = document.createElement("button");
    but.setAttribute("type","submit");
    but.textContent="Envia";
    let nuevoElemento = document.createElement("input");
    nuevoElemento.setAttribute("id","ele");
    nuevoElemento.setAttribute("type","text");
    let lbl = document.createElement("label");
    lbl.setAttribute("for","ele");    switch(opcio){
        case "visa":
            lbl.textContent = "Numero de tarjeta: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "mc":
            lbl.textContent = "Numero de tarjeta: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "payp":
            lbl.textContent = "Correu electrònic: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "biz":
            lbl.textContent = "Número de telèfon: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
    }
}function reset(){    if(document.getElementById("ele") != null){
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
    }
}
/*Validació formulari Barbón*/
function validar(){
    let nom = document.getElementById("nom").value;
    if(nom.length < 8){
        alert("Nom no vàlid");
        return false;
    }    let llin = document.getElementById("llin").value;
    const patternLlin = /^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/;
    if(!llin.test(patternLlin)){
        alert("Llinatges no vàlids");
        return false;
    }    let dir = document.getElementById("dir").value;
    const patternCall= /^(calle|avenida|carretera|plaza|paseo|camino)\s[A-Za-z0-9\s\.,#-]+$/;
    if(!dir.test(patternCall)){
        alert("Direcció no vàlida");
        return false;
    }    let mail = document.getElementById("email").value;
    const patternMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!mail.test(patternMail)){
        alert("Direcció de correu electrònic no vàlida");
        return false;
    }    let tlf = document.getElementById("tlf").value;
    const patternTlf = /^6[0-9]{8}$/;
    if(!tlf.test(patternTlf)){
        alert("Telèfon no vàlid");
        return false;
    }    return true;
}
function agrandarFotos(){
    let fotos = document.getElementsByClassName("fotosEvento");

    onmouseenter.fotos[0] = fotos[0].style.width = "250px";
    onmouseenter.fotos[0] = fotos[0].style.height = "250px";
}