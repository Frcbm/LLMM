function mostrarContenido(){
    let main = document.getElementById("mainPrincipal");
    let aMostrar = document.getElementById("ejercicio").value;
    Array.from(main.children).forEach(elemento => {
        elemento.style.display = "none";
    });

    switch(aMostrar){
        case "ejercicio1":
            eliminarDuplicados();
            document.getElementById("ej1").style.display = "flex";
            break;
        case "ejercicio2":
            document.getElementById("ej2").style.display = "flex";
            break;
        case "ejercicio3":
            document.getElementById("ej3").style.display = "flex";
            break;
        case "ejercicio4":
            document.getElementById("ej4").style.display = "flex";
            break;
        case "ejercicio5":
            document.getElementById("ej5").style.display= "flex";
            break;
        case "ejercicio6":
            document.getElementById("ej6").style.display= "flex";
            break;
        case "ejercicio7":
            document.getElementById("ej7").style.display = "flex";
            break;
        case "ejercicio8":
            document.getElementById("ej8").style.display = "flex";
            break;
    }
}
function eliminarDuplicados(){
    
    let array = [1, 2, 2, 2, 3, 4, 4];

    let texto = document.getElementById("resultadoej1");
    texto.innerHTML = "Primer array " + array +"<br>";
    let noDuplicados = false;
    /*for (let i = 0; i < array.length; i++) {
        let cuenta = array.filter(item => item === array[i]).length;

        if (cuenta === 1) {
            newArray.push(array[i]);
        }
    }*/
    while(!noDuplicados){
        noDuplicados = true;
        for(let i = 0 ; i < array.length - 1 ; i++){
            for(let j = i + 1 ; j < array.length ; j++ ){
                if(array[i] === array[j]){
                    array.splice(j, 1);
                    noDuplicados = false;
                }
            }
        }
    }
    
    
    texto.innerHTML += "Segundo array " + array;
}
function calcularPrecio(){
    event.preventDefault();
    let precio = document.getElementById("precio").value;
    let marca = document.getElementById("marca").value;
    let texto = document.getElementById("respuesta");
    let descuento = 0;
    switch(marca){
        case "Ford": descuento = 10; break;
        case "Seat": descuento = 8; break;
        case "Citroen": descuento = 6; break;
        case "Audi": descuento = 4; break;
    }
    let precioFinal = parseInt(precio - (precio * descuento) / 100);

    texto.innerText = "El coche valdrá " + precioFinal;
}
function mayoriaDeEdad(){
    event.preventDefault();

    let edad = parseInt(document.getElementById("edad").value);

    document.getElementById("respuestaej3").innerHTML = edad >= 16 ? "Clica para acceder a la <a href=\"https://www.caib.es/sites/fp/ca/prova_portada/?campa=yes\">web de FP de la CAIB</a>" : "Aun no tienes edad para acceder al portal de FP"; 
}
function cantidadLinks(){
    let google = 0;
    let texto = document.getElementById("cosasEjercicio4");
    for(let i= 0 ; i < document.links.length ; i++){
        if(document.links[i].href.includes("google")){
            google++;
        }
    }
    texto.innerHTML = "La página tiene " + document.links.length + " enlaces<br>";
    texto.innerHTML += "De los cuales " + google + " van dirigidos a Google<br>";
    texto.innerText += "El ultimo enlace es " + document.links[document.links.length - 1];
}
function textoEjercicio5(){
    let texto = document.getElementById("textoEjercicio5").style.display = "flex";
}
function agrandar(){
    let imagen = document.getElementById("imagen");
    imagen.style.width.replace("px", "");
    imagen.style.width = (parseInt(imagen.style.width) + 20) + "px";
    imagen.style.height.replace("px", "");
    imagen.style.height = (parseInt(imagen.style.height) + 20) + "px";
}
function reducir(){
    let imagen = document.getElementById("imagen");
    imagen.style.width.replace("px", "");
    imagen.style.width = (parseInt(imagen.style.width) - 20) + "px";
    imagen.style.height.replace("px", "");
    imagen.style.height = (parseInt(imagen.style.height) - 20) + "px";
}
function visibleInvisible(){
    let imagen = document.getElementById("imagen");
    if(imagen.style.display == "flex"){
        imagen.style.display = "none";
    }else{
        imagen.style.display = "flex"
    }
}
function volverFondo(){
    let body = document.getElementById("bodyColores");
    body.style.backgroundColor="beige";
}
function cambiarFondo1(){
    let body = document.getElementById("bodyColores");
    body.style.backgroundColor="lightgreen";
}
function cambiarFondo2(){
    let body = document.getElementById("bodyColores");
    body.style.backgroundColor="darkblue";
}
function cambiarFondo3(){
    let body = document.getElementById("bodyColores");
    body.style.backgroundColor="red";
}
function cambiarFondo4(){
    let body = document.getElementById("bodyColores");
    body.style.backgroundColor="pink";
}



function formularioDeportes(){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let deporte = document.getElementById("deporte").value;
    
    switch(deporte){
        case "futbol":  
            let futbol = document.getElementById("futbol");
            let p = document.createElement("p");
            let longitudFutbol = futbol.childNodes.length;
            p.innerHTML = nombre + " " + edad + " años " + 
            "<span id=\"camisetaFutbol" + longitudFutbol + "\">color</span>" + 
            "<span id=\"colorFutbol" + longitudFutbol + "\"> camiseta</span>" + " " + deporte;
            document.getElementById("futbol").appendChild(p);
            document.getElementById("camisetaFutbol" + longitudFutbol ).style.color = color1;
            document.getElementById("colorFutbol" + longitudFutbol).style.color = color2;
            
            break;
        case "basket":
            let p2 = document.createElement("p");
            let longitudBasket = basket.childNodes.length;
            p2.innerHTML = nombre + " " + edad + " años " + 
            "<span id=\"camisetaBasket" +  longitudBasket + "\">color</span>" + 
            "<span id=\"colorBasket" + longitudBasket + "\"> camiseta</span>" + " " + deporte;
            document.getElementById("basket").appendChild(p2);
            
            document.getElementById("camisetaBasket" + longitudBasket).style.color = color1;
            document.getElementById("colorBasket" + longitudBasket).style.color = color2;
            break;
        case "tenis":
            let p3 = document.createElement("p");
            let longitudTenis = tenis.childNodes.length;
            p3.innerHTML = nombre + " " + edad + " años " + 
            "<span id=\"camisetaTenis" +  longitudTenis + "\">color</span>" + 
            "<span id=\"colorTenis" + longitudTenis + "\"> camiseta</span>" + " " + deporte;
            document.getElementById("tenis").appendChild(p3);
            
            document.getElementById("camisetaTenis" + longitudTenis).style.color = color1;
            document.getElementById("colorTenis" + longitudTenis).style.color = color2;
            
            break;       
        case "atletismo":
            let p4 = document.createElement("p");
            let longitudAtletismo = atletismo.childNodes.length;
            p4.innerHTML = nombre + " " + edad + " años " + 
            "<span id=\"camisetaAtletismo" + longitudAtletismo + "\">color</span>" + 
            "<span id=\"colorAtletismo" + longitudAtletismo + "\"> camiseta</span>" + " " + deporte;
            document.getElementById("atletismo").appendChild(p4);
            
            document.getElementById("camisetaAtletismo" + longitudAtletismo).style.color = color1;
            document.getElementById("colorAtletismo" + longitudAtletismo).style.color = color2;

            break;
        case "boxeo":
            let p5 = document.createElement("p");
            let longitudBoxeo = boxeo.childNodes.length;
            p5.innerHTML = nombre + " " + edad + " años " + 
            "<span id=\"camisetaBoxeo" +  longitudBoxeo + "\">color</span>" + 
            "<span id=\"colorBoxeo" + longitudBoxeo + "\"> camiseta</span>" + " " + deporte;
            document.getElementById("boxeo").appendChild(p5);
            
            document.getElementById("camisetaBoxeo" + longitudBoxeo).style.color = color1;
            document.getElementById("colorBoxeo" + longitudBoxeo).style.color = color2;

            break;
    }
}
function resetForm(){
    document.getElementById("formDeportes").reset();
}