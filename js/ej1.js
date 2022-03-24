let empleados = parseInt(prompt("cuantos empleados tiene?"));
let i;
let sueldosGral = 0
for (i = 1; i <= empleados; i++){
    let sueldo = parseInt(prompt("ingrese el sueldo del empleado " + i));
    sueldosGral = sueldosGral + sueldo;
}

alert("el monto total en sueldos es de " + sueldosGral)