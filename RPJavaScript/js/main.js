const userList = [];

const razasPermitidas = [
  "humano",
  "orco",
  "elfo",
  "enano",
  "goblin",
  "trol",
  "demonio",
];

const clasesPermitidas = [
  "caballero",
  "berserker",
  "paladin",
  "cazador",
  "asesino",
  "mago",
  "brujo",
  "sacerdote",
  "espadachin",
  "caballero oscuro",
  "monje",
];

let user = "";
let raza = "";
let clase = "";

class UserBase {
  constructor(user, raza, clase) {
    this.user = user;
    this.raza = raza;
    this.clase = clase;
  }
}

function pickUser() {
  user = prompt(
    "Bienvenido a RPJavaScript, defensor del Código. Elige tu nombre (con cuidado, todos lo recordarán!)"
  );

  if (user !== "") {
    alert(
      "Así que te llamas " +
        user +
        "? Un nombre apropiado para uno de los defensores del Código."
    );
  } else {
    while (user == "") {
      user = prompt("Estoy seguro de que tienes algún nombre, no seas tímido");
    }
  }

  user = user.toLocaleLowerCase();

  return console.log(user);
}

function pickRaza() {
  raza = prompt(
    "Muy bien, " +
      user +
      " ahora cuentame, de que raza provienes?\nHumano\nOrco\nElfo\nEnano\nGoblin\nTrol\nDemonio"
  );

  raza = raza.toLowerCase();
  console.log(raza);

  if (razasPermitidas.includes(raza)) {
    alert("Oh, un joven " + raza + ", tienes mucho potencial.");
  } else {
    while (!razasPermitidas.includes(raza)) {
      raza = prompt(
        "Esa no es una raza de este mundo! Elige una raza de verdad:\n Humano\n Orco\n Elfo\n Enano\n Goblin\n Trol\n Demonio"
      );
      raza = raza.toLowerCase();
    }
  }
  console.log(raza);
}

function pickClase(){
  clase = prompt(
    "En RPJS hay guerreros de distintas clases, que te enseñaran todo lo que necesitas para ser un gran defensor, así que deberas elegir una:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje"
  );
  
  clase = clase.toLowerCase();
  console.log(clase);
  
  if (clasesPermitidas.includes(clase)) {
    alert(
      "Entonces serás " +
        user +
        ", el más grande " +
        clase +
        " entre todos los " +
        raza +
        "s."
    );
  } else {
    while (!clasesPermitidas.includes(clase)) {
      clase = prompt(
        "'" +
          clase +
          "'?? Aquí no tenemos instructores de eso... puedes elegir entre:\n Caballero\n Bersérker\n Paladín\n Cazador\n Asesino\n Mago\n Brujo\n Sacerdote\n Espadachín\n Caballero Oscuro\n Monje"
      );
      clase = clase.toLowerCase();
    }
  }
  console.log(clase);
}

pickUser();
pickRaza();
pickClase();

const profile1 = new UserBase(user, raza, clase);
for (const data in profile1) {
  console.log(profile1[data]);
}

console.log(profile1);
userList.push(profile1);
console.log(userList);
