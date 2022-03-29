function Usuario (user, raza, clase) {
    this.user = user;
    this.raza = raza;
    this.clase = clase;
}


if (user !== "" && raza !== "" && clase !== "") {
    const profile1 = new Usuario (user, raza, clase);
    console.log(profile1.user);
    console.log(profile1.raza);
    console.log(profile1.clase);
}