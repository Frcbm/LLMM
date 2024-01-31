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
    form.setAttribute("class", "formularioPersona");
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
function nota(){
    event.preventDefault();
    let input = parseInt(document.getElementById("nota").value);
    let p = document.getElementById("notaCalc");
    switch(input){
        case 0:case 1:case 2: case 3: case 4:
            p.textContent = "Suspendido";
            break;
        case 5:
            p.textContent = "Suficiente";
            break;
        case 6:
            p.textContent = "Bien";
            break;
        case 7:case 8:
            p.textContent = "Notable";
            break;
        case 9:case 10:
            p.textContent = "Excelente";
            break;
        default:
            p.textContent = "No es una nota válida";
            break;
    }
}
function tarea1Ejercicio7(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 1 Ejercicio 7";
    let form = document.createElement("form");
    article.appendChild(form);
    let p = document.createElement("p");
    form.appendChild(p);
    let label = document.createElement("label");
    label.setAttribute("for", "nota");
    label.innerText = "Que nota has sacado"
    p.appendChild(label);
    let input = document.createElement("input");
    input.setAttribute("type", "text")
    input.setAttribute("id","nota");
    p.appendChild(input);
    let submit = document.createElement("button");
    submit.textContent = "submit";
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", nota);
    let p2 = document.createElement("p");
    article.appendChild(p2);
    p2.setAttribute("id", "notaCalc");
}
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
    label.innerText = "Di un numero"
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
    p.textContent = "";
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
    label.innerText= "Escribe una palabra"
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
function crearObjetoPersona(){
    event.preventDefault();

    let resultado = document.getElementById("resultado");
    let name = document.getElementById("nombre");
    let age = document.getElementById("edad");
    let phone = document.getElementById("telefono");

    let objetoPersona = {
        nombre: name.value,
        edad: age.value,
        telefono: phone.value
    }
    resultado.innerText = "Nombre: " + objetoPersona.nombre + ". Edad: " + objetoPersona.edad + ". Teléfono: " + objetoPersona.telefono + "."
    
}
function tarea1Ejercicio10(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.innerText = "Tarea 1 Ejercicio 10";

    let form = document.createElement("form");
    article.appendChild(form);
    form.setAttribute("class", "formularioPersona");

    let labelName = document.createElement("label");
    labelName.setAttribute("for", "nombre");
    form.appendChild(labelName);
    labelName.innerText = "Nombre: ";
    let inputName = document.createElement("input");
    inputName.setAttribute("id", "nombre");
    form.appendChild(inputName);

    let labelAge = document.createElement("label");
    labelAge.setAttribute("for", "edad");
    form.appendChild(labelAge);
    labelAge.innerText = "Edad: ";
    let inputAge = document.createElement("input");
    inputAge.setAttribute("id", "edad");
    form.appendChild(inputAge);

    let labelTelefono = document.createElement("label");
    labelTelefono.setAttribute("for", "telefono");
    form.appendChild(labelTelefono);
    labelTelefono.innerText = "Teléfono: ";
    let inputTelefono = document.createElement("input");
    inputTelefono.setAttribute("id", "telefono");
    form.appendChild(inputTelefono);
    
    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerText = "submit";
    form.appendChild(submit);
    submit.addEventListener("click", crearObjetoPersona);

    let resultado = document.createElement("p");
    resultado.setAttribute("id", "resultado");
    article.appendChild(resultado);

}
function splitFrase(){
    event.preventDefault();
    let input = document.getElementById("frase").value;
    let p = document.getElementById("cantidad");
    let inputTrim = input.trim();
    inputSplit = inputTrim.split(" ");
    p.innerText = "La frase tiene " + inputSplit.length + " palabras";
}
function tarea2Ejercicio1(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.textContent = "Tarea 2 Ejercicio 1";
    let form = document.createElement("form");
    article.appendChild(form);
    let p = document.createElement("p");
    form.appendChild(p);
    let label = document.createElement("label");
    label.innerText= "Escribe una frase"
    label.setAttribute("for", "frase");
    p.appendChild(label);
    let input = document.createElement("input");
    input.setAttribute("type", "text")
    input.setAttribute("id","frase");
    p.appendChild(input);
    let submit = document.createElement("button");
    submit.textContent = "submit";
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", splitFrase);
    let p2 = document.createElement("p");
    article.appendChild(p2);
    p2.setAttribute("id", "cantidad");
}
function tarea2Ejercicio2(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");
    let h3 = document.createElement("h3");
    article.appendChild(h3);

    h3.innerText = "Tarea 2 Ejercicio 2"
    let div = document.createElement("div");
    div.setAttribute("id","piramide");
    article.appendChild(div);
    for(let i = 1; i <=5 ; i++){
        let resultado = document.createElement("p");
        div.appendChild(resultado);
        for(let j = 0; j < i ; j++){
            resultado.innerText += "*";
        }
    }
}
function numeroMenor(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;
    let menor = numero1 < numero2 ? numero1 < numero3 ? numero1 : numero3 : numero2 < numero3 ? numero2 : numero3;
    resultado.innerText = "El número menor de entre los 3 es: " + menor;
}
function tarea2Ejercicio3(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    h3.innerText = "Tarea 2 Ejercicio 3";
    article.appendChild(h3);

    let form = document.createElement("form");
    article.appendChild(form);
    form.setAttribute("class", "formularioPersona");

    let labelNum1 = document.createElement("label");
    labelNum1.setAttribute("for", "numero1");
    form.appendChild(labelNum1);
    labelNum1.innerText = "Primer Numero: ";
    let inputNum1 = document.createElement("input");
    inputNum1.setAttribute("id", "numero1");
    form.appendChild(inputNum1);

    let labelNum2 = document.createElement("label");
    labelNum2.setAttribute("for", "numero2");
    form.appendChild(labelNum2);
    labelNum2.innerText = "Segundo Numero: ";
    let inputNum2 = document.createElement("input");
    inputNum2.setAttribute("id", "numero2");
    form.appendChild(inputNum2);

    let labelNum3 = document.createElement("label");
    labelNum3.setAttribute("for", "numero3");
    form.appendChild(labelNum3);
    labelNum3.innerText = "Tercer Numero: ";
    let inputNum3 = document.createElement("input");
    inputNum3.setAttribute("id", "numero3");
    form.appendChild(inputNum3);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", numeroMenor)
    submit.innerText = "submit"
    form.appendChild(submit);

    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}
function mayusculaMinuscula(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let palabra = document.getElementById("palabra").value;
    resultado.innerText = "Mínuscula: " + palabra.toLowerCase() + " Mayúscula: " + palabra.toUpperCase();

}
function tarea2Ejercicio4(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.innerText = "Tarea 2 Ejercicio 4";

    let form = document.createElement("form");
    article.appendChild(form);

    let labelPalabra = document.createElement("label");
    labelPalabra.setAttribute("for", "palabra");
    form.appendChild(labelPalabra);
    labelPalabra.innerText = "Palabra: ";
    let inputPalabra = document.createElement("input");
    inputPalabra.setAttribute("id", "palabra");
    form.appendChild(inputPalabra);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", mayusculaMinuscula)
    submit.innerText = "submit"
    form.appendChild(submit);

    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}
function factorial(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let numero = document.getElementById("factorial").value;
    let numeroFactorial = parseInt(1);
    for(let i = 1 ;  i <= numero ; i++){
        numeroFactorial *= i;
    }
    resultado.innerText = "El factorial de " + numero + " es " + numeroFactorial;
}
function tarea2Ejercicio5(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.innerText = "Tarea 2 Ejercicio 5";

    let form = document.createElement("form");
    article.appendChild(form);

    let labelNumero = document.createElement("label");
    labelNumero.setAttribute("for", "factorial");
    form.appendChild(labelNumero);
    labelNumero.innerText = "Palabra: ";
    let inputNumero = document.createElement("input");
    inputNumero.setAttribute("id", "factorial");
    inputNumero.setAttribute("type", "number")
    form.appendChild(inputNumero);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", factorial)
    submit.innerText = "submit"
    form.appendChild(submit);

    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}
function salarioEdad(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let nombre = document.getElementById("nombre").value;
    let salario = document.getElementById("salario").value;
    salario = parseInt(salario);
    let edad = document.getElementById("edad").value;
    if(edad < 16){
        resultado.innerText = "No puede trabajar con esa edad"
    } else{
        resultado.innerText = nombre + ", " + edad + " años. Cobra: "; 
        if(salario < 1000){
            if(edad < 30){
                salario = 1100;
                resultado.innerText +=  salario;
            }else if(edad > 45){
                salario = salario + salario * 0.03;
                resultado.innerText +=  salario;
            }else{
                salario = salario + salario * 0.15;
                resultado.innerText +=  salario;
            }
        } else if(salario > 2000){
            resultado.innerText +=  salario;
        }else{
            if(edad < 45){
                salario = salario + salario * 0.1;
                resultado.innerText +=  salario;
            }else{
                salario = salario + salario * 0.03;
                resultado.innerText +=  salario;
            }
        }

    }
}
function tarea2Ejercicio6(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    h3.innerText = "Tarea 2 Ejercicio 6";
    article.appendChild(h3);

    let form = document.createElement("form");
    article.appendChild(form);
    form.setAttribute("class", "formularioPersona");

    let labelName = document.createElement("label");
    labelName.setAttribute("for", "nombre");
    form.appendChild(labelName);
    labelName.innerText = "Nombre: ";
    let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "nombre");
    form.appendChild(inputName);

    let labelWage = document.createElement("label");
    labelWage.setAttribute("for", "salario");
    form.appendChild(labelWage);
    labelWage.innerText = "Salario: ";
    let inputWage = document.createElement("input");
    inputWage.setAttribute("id", "salario");
    inputWage.setAttribute("type", "number");
    form.appendChild(inputWage);

    let labelAge = document.createElement("label");
    labelAge.setAttribute("for", "edad");
    form.appendChild(labelAge);
    labelAge.innerText = "Edad: ";
    let inputAge = document.createElement("input");
    inputAge.setAttribute("type", "number");
    inputAge.setAttribute("id", "edad");
    form.appendChild(inputAge);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    submit.addEventListener("click", adivinaNumero);
    submit.innerText = "submit";
    form.appendChild(submit);

    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}
let numSecreto;
function randomNumber(){
    event.preventDefault();
    numSecreto = parseInt(Math.floor(Math.random() * 100 + 1));
}

function adivinaNumero(){
    event.preventDefault();

    let resultado = document.getElementById("resultado");
    let numero = parseInt(document.getElementById("numero").value);
    let acierto = false;

    if(Number.isNaN(numero)){
        resultado.innerText = "No es un número válido";
    }else if (numero > numSecreto){
        resultado.innerText = "MENOS!";
    } else if(numero < numSecreto){
        resultado.innerText = "MÁS!";
    } else{
        acierto = true;
    }
    if(acierto){
        resultado.innerText = "Has acertado!"
    }
    
}
function tarea2Ejercicio7(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.innerText = "Tarea 2 Ejercicio 7";

    let form = document.createElement("form");
    article.appendChild(form);

    let labelNumero = document.createElement("label");
    labelNumero.setAttribute("for", "numero");
    form.appendChild(labelNumero);
    labelNumero.innerText = "Numero: ";
    let inputNumero = document.createElement("input");
    inputNumero.setAttribute("id", "numero");
    inputNumero.setAttribute("type", "number")
    form.appendChild(inputNumero);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    
    submit.addEventListener("click", adivinaNumero)
    submit.innerText = "submit"
    form.appendChild(submit);
    randomNumber();
    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}
let count = 0;
function adivinaNumero2(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let numero = parseInt(document.getElementById("numero").value);
    let acierto = false;
    if(Number.isNaN(numero)){
        resultado.innerText = "No es un número válido";
    }else if (numero > numSecreto){
        count++;
        resultado.innerText = "MENOS!";
    } else if(numero < numSecreto){
        count++;
        resultado.innerText = "MÁS!";
    } else{
        count++;
        acierto = true;
    }
    if(acierto){
        count = 0;
        resultado.innerText = "Has acertado!"
        randomNumber();
    }
    if(count == 5){
        resultado.innerText = "Se acabaron los intentos";
        count = 0;
        randomNumber();
    }
}
function tarea2Ejercicio8(){
    crearArticle();
    let article = document.querySelector("article");
    article.setAttribute("class", "ejercicios");

    let h3 = document.createElement("h3");
    article.appendChild(h3);
    h3.innerText = "Tarea 2 Ejercicio 8";

    let form = document.createElement("form");
    article.appendChild(form);

    let labelNumero = document.createElement("label");
    labelNumero.setAttribute("for", "numero");
    form.appendChild(labelNumero);
    labelNumero.innerText = "Numero: ";
    let inputNumero = document.createElement("input");
    inputNumero.setAttribute("id", "numero");
    inputNumero.setAttribute("type", "number")
    form.appendChild(inputNumero);

    let submit = document.createElement("button"); 
    submit.setAttribute("type", "submit");
    
    submit.addEventListener("click", adivinaNumero2)
    submit.innerText = "submit"
    form.appendChild(submit);
    randomNumber();
    let resultado = document.createElement("p");
    article.appendChild(resultado);
    resultado.setAttribute("id", "resultado");
}