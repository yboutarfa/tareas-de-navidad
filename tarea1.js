
// Pedir nombre y apellidos del empleado
var nombre = prompt("Ingresa el nombre y apellidos del empleado:");

// Pedir número total de horas extras
var horasExtras = prompt("Ingresa el número total de horas extras:");

// Pedir horas trabajadas en cada rango
var horasRango1 = prompt("Ingresa el número de horas trabajadas de 20:00 a 00:00:");
var horasRango2 = prompt("Ingresa el número de horas trabajadas de 00:00 a 6:00:");
var horasRango3 = prompt("Ingresa el número de horas trabajadas de 6:00 a 8:00:");

// Calcular el precio a pagar por cada rango de horas extras
var precioRango1 = horasRango1 * 25;
var precioRango2 = horasRango2 * 40;
var precioRango3 = horasRango3 * 20;

// Calcular el total a pagar
var totalPagar = precioRango1 + precioRango2 + precioRango3;

// Mostrar la información en pantalla
document.write("Nombre y apellidos: " + nombre + "<br>");
document.write("Horas extras trabajadas: " + horasExtras + "<br>");
document.write("Precio de horas extras de 20:00 a 00:00: " + precioRango1 + "€" + "<br>");
document.write("Precio de horas extras de 00:00 a 6:00: " + precioRango2 + "€" + "<br>");
document.write("Precio de horas extras de 6:00 a 8:00: " + precioRango3 + "€" + "<br>");
