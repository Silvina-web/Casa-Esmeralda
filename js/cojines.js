console.log(" cojines.js ");

const itemsCojines = document.getElementById('items-cojines');


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
}
)

const fetchData = async () => {
    try {
        const res = await fetch('../Json/cojines.json');
        const data = await res.json();
        pintarCojines(data);
    } catch (error) {
        console.log(e);
    }   // end try
}

const pintarCojines = data => {
    data.forEach(element => {
        const divCojines = document.createElement('div');
        divCojines.classList.add('card-cojines');
        divCojines.innerHTML = `
        <img src=${element.img} alt="foto de cojines">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>
        `
        itemsCojines.appendChild(divCojines);

    }
    )}