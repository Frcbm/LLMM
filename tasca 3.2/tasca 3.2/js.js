function mostrarContenido(){
    let main = document.querySelector("main");
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
    }
}
function eliminarDuplicados(){
    
    let array = [1, 2, 2, 2, 3, 4, 4];
    let newArray = [];
    let texto = document.getElementById("resultadoej1");
    texto.innerHTML = "Primer array " + array +"<br>";
    for (let i = 0; i < array.length; i++) {
        let cuenta = array.filter(item => item === array[i]).length;

        if (cuenta === 1) {
            newArray.push(array[i]);
        }
    }
    array = newArray;
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
    let text = document.getElementById("respuestaej3");

    text.innerHTML = edad >= 16 ? "Clica para acceder a la <a href=\"https://www.caib.es/sites/fp/ca/prova_portada/?campa=yes\">web de FP de la CAIB</a>" : "Aun no tienes edad para acceder al portal de FP"; 
}
function cantidadLinks(){
    let texto = document.getElementById("cosasEjercicio4");
    texto.innerText = "La página tiene " + document.links.length + " enlaces";
}
function textoEjercicio5(){
    let texto = document.getElementById("textoEjercicio5").style.display = "flex";
}