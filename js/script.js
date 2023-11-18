let listaSpesaPranzo = ["Pizzoccheri", "Patate", "Formaggio", "Burro"];

const body = document.querySelector ("body");
const titoloPranzo = document.createElement ("h1");
body.appendChild(titoloPranzo);
titoloPranzo.innerHTML = "Lista della spesa per pranzo";

let i = 0;

while (i < listaSpesaPranzo.length) {
    console.log(listaSpesaPranzo [i]);
    const section = document.createElement ("section");
    const body = document.querySelector ("body");
    body.appendChild(section);
    section.innerHTML = listaSpesaPranzo [i];
    i++;
}

let listaSpesaCena = ["Minestrone", "Crostini", "Salmone"];

const titoloCena = document.createElement ("h1");
body.appendChild(titoloCena);
titoloCena.innerHTML = "Lista della spesa per cena";
    
for (let i = 0; i < listaSpesaCena.length; i++) {
    console.log(listaSpesaCena [i]);
    const sectionCena = document.createElement ("section");
    body.appendChild(sectionCena);
    sectionCena.innerHTML = listaSpesaCena [i];
}

    