class Estudiante {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
        this.promedio = this.calcularPromedio();
        this.categoria = "";
    }

    calcularPromedio() {
        let suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return (suma / this.notas.length).toFixed(2); // Corregido el typo 'lenght' a 'length'
    }
}

function ingresarEstudiantes() {
    let estudiantes = [];
    let cantidad = parseInt(prompt("¿Cuántos estudiantes desea ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        let notas = [];
        for (let j = 0; j < 4; j++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${j + 1} de ${nombre}:`));
            notas.push(nota);
        }
        estudiantes.push(new Estudiante(nombre, notas));
    }

    return estudiantes;
}

function asignarCategorias(estudiantes) {
    // Ordenar estudiantes por promedio (de mayor a menor)
    estudiantes.sort((a, b) => b.promedio - a.promedio);

    // Asignar abanderado y escoltas
    if (estudiantes.length > 0) estudiantes[0].categoria = "Abanderado";
    if (estudiantes.length > 1) estudiantes[1].categoria = "Primera Escolta";
    if (estudiantes.length > 2) estudiantes[2].categoria = "Segunda Escolta";

    // Asignar categorías según el promedio
    estudiantes.forEach(estudiante => {
        if (estudiante.promedio >= 9) {
            if (!estudiante.categoria) estudiante.categoria = "Sobresaliente";
        } else if (estudiante.promedio >= 8) {
            if (!estudiante.categoria) estudiante.categoria = "Bueno";
        } else if (estudiante.promedio >= 7) {
            if (!estudiante.categoria) estudiante.categoria = "Aprobado";
        } else {
            if (!estudiante.categoria) estudiante.categoria = "Desaprobado";
        }
    });
}

function mostrarResultados(estudiantes) {
    estudiantes.forEach(estudiante => {
        console.log(`Estudiante: ${estudiante.nombre}, Promedio: ${estudiante.promedio}, Categoría: ${estudiante.categoria}`);
        alert(`Estudiante: ${estudiante.nombre}, Promedio: ${estudiante.promedio}, Categoría: ${estudiante.categoria}`);
    });
}

// Ejecución del programa
let estudiantes = ingresarEstudiantes();
asignarCategorias(estudiantes);
mostrarResultados(estudiantes);
