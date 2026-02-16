// --- 1. Una calculadora común y corriente ---
function hacerCuentas(queHacer, n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return "Ingresaste algo que no es un número";
    }

    switch (queHacer) {
        case "1": return n1 + n2;
        case "2": return n1 - n2;
        case "3": return n1 * n2;
        case "4":
            if (n2 === 0) return "¡No podés dividir por cero!";
            return n1 / n2;
        default:
            return "Opción inválida... probá de nuevo";
    }
}

// --- 2. Función para promedios de la facultad ---
function sacarPromedio(listaDeNotas) {
    if (listaDeNotas.length === 0) {
        return "No ingresaste notas";
    }

    let total = 0;
    for (let i = 0; i < listaDeNotas.length; i++) {
        if (isNaN(listaDeNotas[i])) {
            return "Alguna de las notas no es válida";
        }
        total += listaDeNotas[i];
    }

    return total / listaDeNotas.length;
}

// --- 3. Mi objeto de usuario ---
function armarPerfil(nom, edad, laburo) {
    if (!nom || !edad || !laburo) {
        return "Faltan datos para armar el perfil";
    }

    const persona = {
        nombre: nom,
        edad: edad,
        trabajo: laburo,
        decirHola: function() {
            return `Hola, soy ${this.nombre}, tengo ${this.edad} años y laburo de ${this.trabajo}`;
        }
    };

    return persona.decirHola();
}

// --- 4. Filtro para números grandes ---
function limpiarLista(numeros) {
    const numerosValidos = numeros.filter(n => !isNaN(n));
    return numerosValidos.filter(n => n > 10);
}

// --- ACÁ ARRANCA EL MENÚ ---
let seguir = true;

while (seguir) {
    let eleccion = prompt("¿Qué querés hacer?\n1. Cuentas\n2. Promedio\n3. Perfil\n4. Filtro\n5. Salir");

    if (eleccion === "1") {
        let modo = prompt("1.Suma, 2.Resta, 3.Multi, 4.Div");
        let numA = parseFloat(prompt("Primer número:"));
        let numB = parseFloat(prompt("Segundo número:"));

        alert("Resultado: " + hacerCuentas(modo, numA, numB));

    } else if (eleccion === "2") {
        let notasTxt = prompt("Pasame las notas separadas por coma (ej: 7,8,9)");

        if (!notasTxt) {
            alert("No ingresaste nada");
            continue;
        }

        let misNotas = notasTxt.split(",").map(n => parseFloat(n.trim()));
        alert("Tu promedio es: " + sacarPromedio(misNotas));

    } else if (eleccion === "3") {
        let n = prompt("Nombre:");
        let e = prompt("Edad:");
        let l = prompt("Laburo:");

        alert(armarPerfil(n, e, l));

    } else if (eleccion === "4") {
        let listaTxt = prompt("Tirame números separados por coma:");

        if (!listaTxt) {
            alert("No ingresaste nada");
            continue;
        }

        let listaNum = listaTxt.split(",").map(n => parseFloat(n.trim()));
        alert("Los que son mayores a 10 son: " + limpiarLista(listaNum));

    } else if (eleccion === "5") {
        alert("¡Chau! Me fui.");
        seguir = false;

    } else {
        alert("Esa opción no va...");
    }
}
