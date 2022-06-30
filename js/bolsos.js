console.log(" bolsos.js ");
const itemsBolsos = document.getElementById('items-Bolsos');

/* ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('../Json/bolsos.json');
        const data = await res.json();
        pintarBolsos(data);
        

    } catch (error) {
        console.log(e);
    }
}
/* ------------------------------------------------------ */


const pintarBolsos = data => {
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card-bolsos');
        div.innerHTML = `
        <img src=${element.img} alt="foto de bolsos">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>
        
        `
        itemsBolsos.appendChild(div);
    }
    )
}

