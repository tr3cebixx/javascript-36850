class UserBase{
    constructor (user, raza, clase) {
        this.user = user;
        this.raza = raza;
        this.clase = clase;
    }
    bienvenido(user){
        let user = prompt("Bienvenido a RPJavaScript, defensor del Código. Elige tu nombre (con cuidado, todos lo recordarán!)");
        
        if (this.user == "") {
            user = prompt("Estoy seguro de que tienes algún nombre, no seas tímido");
        } else {
            alert("Así que te llamas " + this.user + "? Un nombre apropiado para uno de los defensores del Código.");
            console.log("Así que te llamas " + this.user + "? Un nombre apropiado para uno de los defensores del Código.");
        }
    }
    elegirRaza(raza){
        let raza = prompt("Muy bien, " + this.user + " ahora cuentame, de que raza provienes?\nHumano\nOrco\nElfo\nEnano\nGoblin\nTrol\nDemonio");

        if (this.raza !== "humano", "orco", "elfo", "enano", "goblin", "trol", "demonio") {
            raza = prompt("Esa no es una raza de este mundo! Elige una raza de verdad:\n Humano\n Orco\n Elfo\n Enano\n Goblin\n Trol\n Demonio");
        } else {
            alert("Oh, un joven " + this.raza + ", tienes mucho potencial.");
            console.log("Oh, un joven " + this.raza + ", tienes mucho potencial.");
        }
    }
    elegirClase(clase){
        let clase = prompt("En RPJS hay guerreros de distintas clases, que te enseñaran todo lo que necesitas para ser un gran defensor, así que deberas elegir una:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje");
        
        if (this.clase !== "caballero", "bersérker", "paladín", "cazador", "asesino", "Mago", "Brujo", "sacerdote", "espadachín", "caballero oscuro", "monje") {
            clase = prompt("'" + this.clase + "'?? Aquí no tenemos instructores de eso... puedes elegir entre:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje")
        } else {
            alert("Entonces serás " + this.user + ", el más grande " + this.clase + " entre todos los " + this.raza + "s.");
            console.log("Entonces serás " + this.user + ", el más grande " + this.clase + " entre todos los " + this.raza + "s.");
        }
    }
}

const profile1 = new UserBase (user, raza, clase);

for (const data in profile1) {
    console.log(profile1[data]);
}
