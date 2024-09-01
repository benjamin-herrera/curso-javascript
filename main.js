function juegoDeAdivinanzas() {
    function iniciarJuego() {
        let nivel = prompt("Elige un nivel de dificultad: \n1. Fácil (1-10)\n2. Medio (1-100)\n3. Difícil (1-1000)");

        let numeroSecreto;
        let rangoMaximo;

        switch (nivel) {
            case "1":
                rangoMaximo = 10;
                numeroSecreto = Math.floor(Math.random() * 10) + 1;
                break;
            case "2":
                rangoMaximo = 100;
                numeroSecreto = Math.floor(Math.random() * 100) + 1;
                break;
            case "3":
                rangoMaximo = 1000;
                numeroSecreto = Math.floor(Math.random() * 1000) + 1;
                break;
            default:
                console.log("Opción no válida. El juego ha terminado.");
                return;
        }

        let adivinanza;
        let intentos = 0;

        do {
            adivinanza = parseInt(prompt(`Adivina el número entre 1 y ${rangoMaximo}:`));
            intentos++;

            if (adivinanza > numeroSecreto) {
                console.log("Demasiado alto, intenta de nuevo.");
            } else if (adivinanza < numeroSecreto) {
                console.log("Demasiado bajo, intenta de nuevo.");
            } else {
                console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
            }
        } while (adivinanza !== numeroSecreto);

        jugarDeNuevo();
    }

    function jugarDeNuevo() {
        let jugarOtraVez = prompt("¿Quieres jugar de nuevo? (Sí/No)").toUpperCase();
        if (jugarOtraVez === "SÍ" || jugarOtraVez === "SI") {
            iniciarJuego();
        } else {
            console.log("¡Gracias por jugar! Hasta luego.");
        }
    }

    console.log("¡Bienvenido al juego de adivinanzas!");
    let opcion = prompt("Escribe 'JUGAR' para empezar o 'SALIR' para terminar:");

    if (opcion.toUpperCase() === "JUGAR") {
        iniciarJuego();
    } else if (opcion.toUpperCase() === "SALIR") {
        console.log("¡Hasta luego!");
    } else {
        console.log("Opción no válida. Por favor, recarga la página e intenta de nuevo.");
    }
}

juegoDeAdivinanzas();
