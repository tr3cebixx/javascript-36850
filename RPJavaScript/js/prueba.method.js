class UserBase{
    constructor (user, raza, clase) {
        this.user = user;
        this.raza = raza;
        this.clase = clase;
    }
}

const razasPermitidas = ["humano", "orco", "elfo", "enano", "goblin", "trol", "demonio"];

const clasesPermitidas = ["caballero", "bersérker", "paladín", "cazador", "asesino", "Mago", "Brujo", "sacerdote", "espadachín", "caballero oscuro", "monje"];

let user = prompt("Bienvenido a RPJavaScript, defensor del Código. Elige tu nombre (con cuidado, todos lo recordarán!)");

if (user !== "") {
    alert("Así que te llamas " + user + "? Un nombre apropiado para uno de los defensores del Código.");
    console.log("Así que te llamas " + user + "? Un nombre apropiado para uno de los defensores del Código.");
} else {
    user = prompt("Estoy seguro de que tienes algún nombre, no seas tímido");
}

let raza = prompt("Muy bien, " + user + " ahora cuentame, de que raza provienes?\nHumano\nOrco\nElfo\nEnano\nGoblin\nTrol\nDemonio");

if (raza == "humano", "orco", "elfo", "enano", "goblin", "trol", "demonio") {
    alert("Oh, un joven " + raza + ", tienes mucho potencial.");
    console.log("Oh, un joven " + raza + ", tienes mucho potencial.");
} else {
    raza = prompt("Esa no es una raza de este mundo! Elige una raza de verdad:\n Humano\n Orco\n Elfo\n Enano\n Goblin\n Trol\n Demonio");
}


let clase = prompt("En RPJS hay guerreros de distintas clases, que te enseñaran todo lo que necesitas para ser un gran defensor, así que deberas elegir una:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje");

if (clase == "caballero", "bersérker", "paladín", "cazador", "asesino", "Mago", "Brujo", "sacerdote", "espadachín", "caballero oscuro", "monje") {
    alert("Entonces serás " + user + ", el más grande " + clase + " entre todos los " + raza + "s.");
    console.log("Entonces serás " + user + ", el más grande " + clase + " entre todos los " + raza + "s.");
} else {
    clase = prompt("'" + clase + "'?? Aquí no tenemos instructores de eso... puedes elegir entre:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje")
}

const profile1 = new UserBase (user, raza, clase);

for (const data in profile1) {
    console.log(profile1[data]);
}
