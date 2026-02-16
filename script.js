console.log("Aplicación iniciada correctamente");

// ===============================
// CALCULADORA
// ===============================
function hacerCuentas(queHacer, n1, n2) {
    console.log("Entrando a hacerCuentas()");
    console.log("Operación elegida:", queHacer);
    console.log("Valores recibidos:", n1, n2);

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Error: uno de los valores no es número");
        return "Error: ingresaste valores inválidos";
    }

    switch (queHacer) {
        case "1":
            console.log("Realizando suma");
            return n1 + n2;

        case "2":
            console.log("Realizando resta");
            return n1 - n2;

        case "3":
            console.log("Realizando multiplicación");
            return n1 * n2;

        case "4":
            console.log("Realizando división");
            if (n2 === 0) {
                console.log("Error: división por cero");
                return "No podés dividir por cero";
            }
            return n1 / n2;

        default:
            console.log("Operación inválida");
            return "Opción inválida";
    }
}


// ===============================
// PROMEDIO
// ===============================
function sacarPromedio(listaDeNotas) {
    console.log("Entrando a sacarPromedio()");
    console.log("Lista recibida:", listaDeNotas);

    if (!Array.isArray(listaDeNotas) || listaDeNotas.length === 0) {
        console.log("Error: lista vacía o inválida");
        return "No ingresaste notas válidas";
    }

    let total = 0;

    for (let i = 0; i < listaDeNotas.length; i++) {
        if (isNaN(listaDeNotas[i])) {
            console.log("Error: nota inválida detectada en posición", i);
            return "Alguna nota no es un número válido";
        }
        total += listaDeNotas[i];
    }

    let promedio = total / listaDeNotas.length;
    console.log("Promedio calculado:", promedio);

    return promedio;
}


// ===============================
// PERFIL
// ===============================
function armarPerfil(nom, edad, laburo) {
    console.log("Entrando a armarPerfil()");
    console.log("Datos recibidos:", nom, edad, laburo);

    if (!nom || !edad || !laburo) {
        console.log("Error: faltan datos");
        return "Faltan datos para crear el perfil";
    }

    if (isNaN(edad)) {
        console.log("Error: edad no válida");
        return "La edad debe ser un número";
    }

    const persona = {
        nombre: nom,
        edad: edad,
        trabajo: laburo,
        decirHola: function () {
            console.log("Ejecutando método decirHola()");
            return `Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo de ${this.trabajo}`;
        }
    };

    return persona.decirHola();
}


// ===============================
// 4️FILTRO
// ===============================
function limpiarLista(numeros) {
    console.log("Entrando a limpiarLista()");
    console.log("Lista original:", numeros);

    if (!Array.isArray(numeros) || numeros.length === 0) {
        console.log("Error: lista inválida");
        return "Lista inválida";
    }

    let numerosValidos = numeros.filter(n => !isNaN(n));

    if (numerosValidos.length === 0) {
        console.log("Error: ningún número válido");
        return "No hay números válidos en la lista";
    }

    let filtrados = numerosValidos.filter(n => n > 10);
    console.log("Números mayores a 10:", filtrados);

    return filtrados;
}


// ===============================
// MENÚ PRINCIPAL
// ===============================
let seguir = true;

while (seguir) {
    console.log("Mostrando menú principal");

    let eleccion = prompt(
        "¿Qué querés hacer?\n1. Cuentas\n2. Promedio\n3. Perfil\n4. Filtro\n5. Salir"
    );

    if (eleccion === null) {
        console.log("Usuario canceló el menú");
        alert("Aplicación finalizada");
        break;
    }

    if (eleccion === "1") {

        let modo = prompt("1.Suma, 2.Resta, 3.Multi, 4.Div");
        let numA = parseFloat(prompt("Primer número:"));
        let numB = parseFloat(prompt("Segundo número:"));

        let resultado = hacerCuentas(modo, numA, numB);
        alert("Resultado: " + resultado);

    } else if (eleccion === "2") {

        let notasTxt = prompt("Pasame las notas separadas por coma (ej: 7,8,9)");

        if (!notasTxt) {
            alert("No ingresaste datos");
            continue;
        }

        let misNotas = notasTxt
            .split(",")
            .map(n => parseFloat(n.trim()));

        let resultado = sacarPromedio(misNotas);
        alert("Tu promedio es: " + resultado);

    } else if (eleccion === "3") {

        let n = prompt("Nombre:");
        let e = prompt("Edad:");
        let l = prompt("Trabajo:");

        let resultado = armarPerfil(n, parseFloat(e), l);
        alert(resultado);

    } else if (eleccion === "4") {

        let listaTxt = prompt("Tirame números separados por coma:");

        if (!listaTxt) {
            alert("No ingresaste datos");
            continue;
        }

        let listaNum = listaTxt
            .split(",")
            .map(n => parseFloat(n.trim()));

        let resultado = limpiarLista(listaNum);
        alert("Mayores a 10: " + resultado);

    } else if (eleccion === "5") {

        console.log("Usuario decidió salir");
        alert("¡Chau! Me fui.");
        seguir = false;

    } else {

        console.log("Opción inválida ingresada");
        alert("Esa opción no es válida");
    }
}

console.log("Aplicación finalizada");
