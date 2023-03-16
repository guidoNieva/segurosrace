
// let edad = parseInt(prompt("Ingresa la edad del conductor:"));

// let valorAuto = parseFloat(prompt("Ingresa el valor del automóvil:"));

// let costoBase = 900;

// if (edad < 25) {
//   costoBase += 5000;
// } else if (edad > 65) {
//   costoBase += 3050;
// }
// if (valorAuto > 5000) {
// } alert("El costo total de la póliza de seguro es $" + costoBase.toFixed(2) + ".");

let nombre = prompt('Ingrese su nombre')
let apellido = prompt('Ingrese su apellido')
const BLANCO = ' '


let dato = nombre + BLANCO + apellido
console.log(dato)
if (nombre == '') {
   alert('No ingresaste tu nombre de usuario')
} else{
   alert('Bienvenido ' + dato)
}


let edad = prompt("¿Cuál es tu edad?");

edad = parseInt(edad);

if (edad >= 18) {
 console.log("Eres mayor de edad");
} else {
 console.log("Eres menor de edad");
 alert('Debes ser mayor de edad para ingresar a este sitio')
}
if (edad == '') {
   alert('No ingresaste tu nombre de edad')}

   
do {
    email = prompt('Ingrese su correo electronico:');
    confirmEmail = prompt('Confirme su correo electronico:');

    if (email === confirmEmail) {
        alert('El correo '+email+' a sido registrado con exito!')
        askAgain = false
    } else{
        alert('Los correos deben ser iguales!')
    }
} while (askAgain);


let marca = prompt("Ingresa la marca del vehículo:");

let modelo = prompt("Ingresa el modelo del vehículo:");

let valorVehiculo = parseFloat(prompt("Ingresa el valor del vehículo:"));

let base = 5000;

if (marca === "Toyota" || marca === "Honda") {
  base += 2500;
} else if (marca === "Ford" || marca === "Chevrolet") {
  base += 1500;
}

if (modelo === "Sedan" || modelo === "Hatchback") {
  primaBase += 1000;
} else if (modelo === "SUV" || modelo === "Pickup") {
  base += 2000;
}

if (valorVehiculo > 800000) {
  base += 5000;
}
alert("El total de la póliza de seguro es $" + base.toFixed(2) + ".");

