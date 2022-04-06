function pickUser() {
    let user = prompt(
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
  
pickUser();
  