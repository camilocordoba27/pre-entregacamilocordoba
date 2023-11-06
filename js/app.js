function validarUsuario() {
    let edad = parseInt(prompt("¿Qué edad tienes?"));

    while (isNaN(edad)) {
        alert("Por favor, ingresa una edad válida.");
        edad = parseInt(prompt("¿Qué edad tienes?"));
    }

    if (edad >= 18) {
        let nombre = prompt("¿Cómo es tu nombre?");
        // Validación del nombre para asegurarse de que no contenga números
        while (nombre.length < 3 || nombre.trim() === "" || /\d/.test(nombre)) {
            alert("Vuelve a ingresar tu nombre sin números y con al menos 3 caracteres.");
            nombre = prompt("¿Cómo es tu nombre?");
        }
        alert("¡Bienvenido/a " + nombre);

        for (let i = 10; i > 0; i--) {
            let opcion = prompt(
                `\nElige el tipo de asesoría:
                \n1- Asesoría Express
                \n2- Asesoría Intermedia
                \n3- Asesoría Integral
                \nEscribe "ESC" para salir`
            );

            if (opcion === "1") {
                alert("Elegiste la asesoría Express");
            } else if (opcion === "2") {
                alert("Elegiste la asesoría Intermedia");
            } else if (opcion === "3") {
                alert("Elegiste la asesoría Integral");
            } else if (opcion.toLowerCase() === "esc") {
                alert("¡Gracias por visitarnos!");
                break;
            } else {
                alert("Opción no válida.");
            }
        }
    } else {
        alert("Vuelve cuando seas mayor de edad.");
    }
}

validarUsuario();