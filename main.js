function generarNumeroSecreto(rango) {
    return Math.floor(Math.random() * rango) + 1;
}

function juegoAdivinanza() {
    let iniciar = prompt("Escribe 'JUGAR' para comenzar o 'SALIR' para terminar:").toUpperCase();

    if (iniciar === "JUGAR") {
        let nivel = prompt("Elige el nivel de dificultad:\n1. Fácil (1-10)\n2. Medio (1-100)\n3. Difícil (1-1000)");

        let rango;
        switch (nivel) {
            case "1":
                rango = 10;
                break;
            case "2":
                rango = 100;
                break;
            case "3":
                rango = 1000;
                break;
            default:
                alert("Nivel inválido. Elige entre 1, 2 o 3.");
                return;
        }

        let numeroSecreto = generarNumeroSecreto(rango);
        let intentos = 0;
        let adivinado = false;

        while (!adivinado) {
            let intento = parseInt(prompt(`Adivina el número (entre 1 y ${rango}):`));
            intentos++;

            if (intento === numeroSecreto) {
                alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
                adivinado = true;
            } else if (intento < numeroSecreto) {
                alert("El número es mayor.");
            } else {
                alert("El número es menor.");
            }
        }
    } else if (iniciar === "SALIR") {
        alert("¡Gracias por jugar!");
    } else {
        alert("Opción inválida. Escribe 'JUGAR' o 'SALIR'.");
    }
}

juegoAdivinanza();
