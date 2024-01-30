function Tarea1(){
    let head = document.querySelector("header");
    let botonera = document.createElement("nav");
    botonera.setAttribute("class", "botonera");
    head.appendChild(botonera);

    for(let i = 1 ; i <= 10 ; i++){
        let boton = document.createElement("button");
        boton.setAttribute("onclick", "resetArticle(); tarea1Ejercicio" + i + "()");
        boton.textContent = "Ejercicio 1." + i
        botonera.appendChild(boton);
    }
}
function Tarea2(){
    let head = document.querySelector("header");
    let botonera = document.createElement("nav");
    botonera.setAttribute("class", "botonera");
    head.appendChild(botonera);

    for(let i = 1 ; i <= 10 ; i++){
        let boton = document.createElement("button");
        boton.setAttribute("onclick", "resetArticle(); tarea2Ejercicio" + i + "()");
        boton.textContent = "Ejercicio 2." + i
        botonera.appendChild(boton);
    }

}
function resetBotones(){
    let header = document.querySelector("header");
    header.removeChild(header.lastChild);
    
}
function resetArticle(){
    let main = document.querySelector("main");
    if(main.lastChild){
        main.removeChild(main.lastChild);
    }
}
function crearArticle(){
    let main = document.querySelector("main");
    let article = document.createElement("article");

    main.appendChild(article);
}
function tarea1Ejercicio1(){

    crearArticle();
    
    let article = document.querySelector("article");
    article.setAttribute("class", "lista");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 1";
    let par = document.createElement("p");
    article.appendChild(par);
    par.textContent = "Cuenta atras";

    for (let i = 10 ; i > 0 ; i--){
        let p = document.createElement("p");
        article.appendChild(p);
        p.innerHTML = i;
    }
}
function mayorque(){
    
    let article = document.querySelector("article");
    let p = document.querySelector("#p")
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    const resultado = Math.max(numero1, numero2);
    p.textContent = "El mayor de los 2 numeros es: " + resultado;
}
function tarea1Ejercicio2(){
    

    crearArticle();
    let article = document.querySelector("article");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 2";
    let par = document.createElement("p");
    article.appendChild(par);
    par.textContent = "Escribe 2 numeros y te dire el mayor";
    article.setAttribute("class", "ejercicios");
    let form = document.createElement("form");
    article.appendChild(form);
    let p1 = document.createElement("p");
    form.appendChild(p1);
    let label1 = document.createElement("label");
    label1.setAttribute("for", "numero1");
    label1.textContent = "Numero 1: ";
    p1.appendChild(label1);
    let input1 = document.createElement("input");
    input1.setAttribute("id", "numero1");
    p1.appendChild(input1);
    let p2 = document.createElement("p");
    form.appendChild(p2);
    let label2 = document.createElement("label");
    label2.setAttribute("for", "numero2");
    p2.textContent = "Numero 2: ";
    form.appendChild(label2);
    let input2 = document.createElement("input");
    input2.setAttribute("id", "numero2");
    p2.appendChild(input2);
    let submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.setAttribute("type", "button");
    form.appendChild(submit);
    let p = document.createElement("p");
    article.appendChild(p);
    p.setAttribute("id", "p");
    submit.addEventListener("click", mayorque)
    p.textContent = "";
    
}

function suma(){
    
    let article = document.querySelector("article");
    let p = document.querySelector("#p")
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    const resultado = numero1 + numero2;
    p.textContent = "La suma de los 2 numeros es: " + resultado;
}
function tarea1Ejercicio3(){

    crearArticle();
    
    let article = document.querySelector("article");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 3";
    let par = document.createElement("p");
    article.appendChild(par);
    par.textContent = "Escribe 2 numeros y los sumare";
    article.setAttribute("class", "ejercicios");
    let form = document.createElement("form");
    article.appendChild(form);
    let p1 = document.createElement("p");
    form.appendChild(p1);
    let label1 = document.createElement("label");
    label1.setAttribute("for", "numero1");
    label1.textContent = "Numero 1: ";
    p1.appendChild(label1);
    let input1 = document.createElement("input");
    input1.setAttribute("id", "numero1");
    p1.appendChild(input1);
    let p2 = document.createElement("p");
    form.appendChild(p2);
    let label2 = document.createElement("label");
    label2.setAttribute("for", "numero2");
    p2.appendChild(label2);
    label2.textContent = "Numero 2: "
    let input2 = document.createElement("input");
    input2.setAttribute("id", "numero2");
    p2.appendChild(input2);
    let submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.setAttribute("type", "button");
    form.appendChild(submit);
    let p = document.createElement("p");
    article.appendChild(p);
    p.setAttribute("id", "p");
    p.textContent = "";
    submit.addEventListener("click", suma)
    
}
function datos(){
    event.preventDefault();
    let inputName = document.querySelector("#name");
    let inputHeight = document.querySelector("#height");
    let inputAge = document.querySelector("#age");
    let inputCivil = document.querySelector("#civil");
    let p5 = document.querySelector("#p5");
    if(inputCivil.value.toLowerCase() === "soltero"){
        p5.innerHTML = `Nombre: ${inputName.value}<br>Estatura: ${inputHeight.value}<br>Edad: ${inputAge.value}<br>Estado civil: ${inputCivil.value}`
    }else{
        p5.textContent ="Nombre: " + inputName.value + " Altura: " + inputHeight.value + " Edad: " + inputAge.value + " Estado Civil: " +inputCivil.value
    }
}
function tarea1Ejercicio4(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 4";

    let form = document.createElement("form");
    form.setAttribute("id", "ejercicio4");
    article.appendChild(form);

    let p1 = document.createElement("p");
    form.appendChild(p1);
    let labelName = document.createElement("label");
    p1.appendChild(labelName);
    labelName.setAttribute("for", "name");
    labelName.textContent = "Nombre"
    let inputName = document.createElement("input");
    p1.appendChild(inputName);
    inputName.setAttribute("id", "name");
    let labelHeight = document.createElement("label");
    let p2 = document.createElement("p");
    
    labelHeight.textContent = "Altura"
    form.appendChild(p2);
    p2.appendChild(labelHeight)
    labelHeight.setAttribute("for", "height");
    let inputHeight = document.createElement("input");
    p2.appendChild(inputHeight);
    inputHeight.setAttribute("id", "height");
    let p3 = document.createElement("p");
    let labelAge = document.createElement("label");
    labelAge.textContent = "Edad"
    form.appendChild(p3);
    p3.appendChild(labelAge);
    labelAge.setAttribute("for", "age");
    let inputAge = document.createElement("input");
    p3.appendChild(inputAge);
    inputAge.setAttribute("id", "age");
    let p4 = document.createElement("p");

    let labelCivil = document.createElement("label");
    labelCivil.textContent = "Estado civil"
    form.appendChild(p4);
    p4.appendChild(labelCivil);
    labelCivil.setAttribute("for", "civil");
    let inputCivil = document.createElement("select");
    p4.appendChild(inputCivil);
    inputCivil.setAttribute("id", "civil");
    
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    inputCivil.appendChild(option1);
    inputCivil.appendChild(option2);
    option1.textContent = "soltero"
    option2.textContent = "casado"
    
    let submit = document.createElement("button");
    form.appendChild(submit);
    submit.textContent = "submit"
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", datos)
    let p5 = document.createElement("p");
    article.appendChild(p5);
    p5.setAttribute("id", "p5");

}
function totalLetras(){
    event.preventDefault();
    let input = document.querySelector("input");
    let p = document.querySelector("#palabraalreves");
    let inputArray = input.value.split("");
    p.textContent = "La longitud de la palabra " + input.value + " es " + inputArray.length;
}
function tarea1Ejercicio5(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 5";
    let form = document.createElement("form");
    article.appendChild(form);
    let p = document.createElement("p");
    form.appendChild(p);
    let label = document.createElement("label");
    p.appendChild(label);
    label.textContent = "Escribe una palabra";
    label.setAttribute("for", "palabra");
    let input = document.createElement("input");
    p.appendChild(input);
    input.setAttribute("id", "palabra");
    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "submit";
    form.appendChild(submit);
    submit.addEventListener("click", totalLetras);
    let p2 = document.createElement("p");
    p2.setAttribute("id", "palabraalreves");
    article.appendChild(p2);
}
function tarea1Ejercicio6(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "lista");
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 6";
    let p = document.createElement("p");
    article.appendChild(p);
    p.textContent = "Meses:"
    for(let i = 0; i < meses.length ; i++){
        let p2= document.createElement("p");
        article.appendChild(p2);
        p2.textContent = meses[i];
    }
}
//Aqui falta el 7
function parImpar(){
    event.preventDefault();
    let input = document.querySelector("input");
    let p = document.querySelector("#parImpar");
    let inputValue = parseInt(input.value);
    if(inputValue % 2 === 0){
        p.textContent = "El numero " + inputValue + " es par"
    } else {
        p.textContent = "El numero " + inputValue + " es impar";
    }
}
function tarea1Ejercicio8(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 8";
    let form = document.createElement("form");
    article.appendChild(form);
    let p = document.createElement("p");
    form.appendChild(p);
    let label = document.createElement("label");
    label.setAttribute("for", "numero");
    p.appendChild(label);
    let input = document.createElement("input");
    input.setAttribute("type", "number")
    input.setAttribute("id","numero");
    p.appendChild(input);
    let submit = document.createElement("button");
    submit.textContent = "submit";
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", parImpar);
    let p2 = document.createElement("p");
    article.appendChild(p2);
    p2.setAttribute("id", "parImpar");
}
function inversa(){
    event.preventDefault();
    let input = document.querySelector("input").value;
    let p = document.querySelector("#inversa");
    let alreves = input.split("");
    for(let i = alreves.length - 1 ; i >= 0 ; i--){
        p.textContent += alreves[i];
    }
}
function tarea1Ejercicio9(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 9";
    let form = document.createElement("form");
    article.appendChild(form);
    let p = document.createElement("p");
    form.appendChild(p);
    let label = document.createElement("label");
    label.setAttribute("for", "palabra");
    p.appendChild(label);
    let input = document.createElement("input");
    input.setAttribute("type", "text")
    input.setAttribute("id","palabra");
    p.appendChild(input);
    let submit = document.createElement("button");
    submit.textContent = "submit";
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", inversa);
    let p2 = document.createElement("p");
    article.appendChild(p2);
    p2.setAttribute("id", "inversa");
}
