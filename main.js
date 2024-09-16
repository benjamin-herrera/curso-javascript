class Estudiante {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
        this.promedio = parseFloat(this.calcularPromedio());  // Convertimos el promedio a número
        this.categoria = "";
    }

    // Función para calcular el promedio de un estudiante
    calcularPromedio() {
        let suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return (suma / this.notas.length).toFixed(2);  // Mantener dos decimales
    }
}

// Lista de estudiantes
let estudiantes = [
    new Estudiante("Carlos", [9, 8, 10, 7]),
    new Estudiante("Lucia", [10, 9, 10, 9]),
    new Estudiante("Victoria", [6, 5, 7, 8]),
    new Estudiante("Felipe", [8, 8, 9, 7]),
    new Estudiante("Bianca", [5, 6, 4, 7]),
    new Estudiante("Virginia", [10, 10, 9, 10]),
    new Estudiante("Anna", [10, 10, 10, 10]),
    new Estudiante("Jorge", [4, 6, 7, 7]),
    new Estudiante("Martin", [8, 7, 9, 9]),
    new Estudiante("Agustin", [9, 8, 10, 10]),
    new Estudiante("Florencia", [9, 5, 7, 8]),
    new Estudiante("Marcela", [7, 7, 10, 8]),
    new Estudiante("Ricardo", [9, 8, 8, 9]),
    new Estudiante("Alvaro", [3, 4, 7, 5]),
    new Estudiante("Ignacio", [5, 7, 8, 8]),
    new Estudiante("Jose", [6, 6, 5, 3]),
    new Estudiante("Nicolas", [3, 4, 7, 9]),
    new Estudiante("Joaquin", [6, 3, 9, 7]),
    new Estudiante("Mateo", [7, 8, 4, 10]),
    new Estudiante("Juan", [5, 1, 2, 4]),
    new Estudiante("Pablo", [9, 4, 3, 5]),
    new Estudiante("Pedro", [1, 10, 10, 9]),
    new Estudiante("Sofia", [7, 8, 7, 7]),
    new Estudiante("Carla", [8, 6, 9, 7]),
    new Estudiante("Santino", [6, 6, 6, 7]),
    new Estudiante("Emilio", [10, 10, 9, 9]),
    new Estudiante("Rodrigo", [3, 2, 7, 5]),
    new Estudiante("Julian", [7, 3, 10, 9]),
    new Estudiante("Paula", [9, 8, 2, 1]),
    new Estudiante("Diego", [8, 7, 9, 10]),
    new Estudiante("Ulises", [3, 4, 1, 5]),
];

// Función para asignar categorías a los estudiantes según su promedio
function asignarCategorias(estudiantes) {
    // Ordenar a los estudiantes por promedio (de mayor a menor)
    estudiantes.sort((a, b) => b.promedio - a.promedio);

    // Asignar abanderado y escoltas
    if (estudiantes.length > 0) estudiantes[0].categoria = "Abanderado";
    if (estudiantes.length > 1) estudiantes[1].categoria = "Primera Escolta";
    if (estudiantes.length > 2) estudiantes[2].categoria = "Segunda Escolta";

    // Asignar categorías en función del promedio
    estudiantes.forEach(estudiante => {
        if (estudiante.promedio >= 9){
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

// Ejecutar la asignación de categorías
asignarCategorias(estudiantes);

// Mostrar el resultado
estudiantes.forEach(estudiante => {
    console.log(`Estudiante: ${estudiante.nombre}, Promedio: ${estudiante.promedio}, Categoría: ${estudiante.categoria}`);
});
