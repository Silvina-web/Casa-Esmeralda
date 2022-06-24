console.log(" bolsosLino.js ");
const itemsBolsosLino = document.getElementById('itemsBolsosLino');
const templateCard= document.getElementById('template-card').content
const fragment = document.createDocumentFragment();
let carrito={}
itemsBolsosLino.addEventListener('click', e => {
    agregarBolsosLino(e);
}
)

/* ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('../Json/bolsosLino.json');
        const data = await res.json();
        pintarBolsosLino(data);
        

    } catch (error) {
        console.log(e);
    }
}
/* ------------------------------------------------------ */



const pintarBolsosLino = data => {
    console.log(data);
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombre;
        templateCard.querySelector('h6').textContent = producto.descripcion;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute("src", producto.img);
        templateCard.querySelector('.button-favoritos').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    })
    itemsBolsosLino.appendChild(fragment);
}

const agregarBolsosLino = e => {

    
    if (e.target.classList.contains('fa-heart')) {

        ModalBolsosLino(e.target.parentElement.parentElement)
}
e.stopPropagation();
}

const ModalBolsosLino = objeto => {
    console.log(objeto);
    const productoBolsoLino = {
    id: objeto.querySelector('.button-favoritos').dataset.id,
    nombre: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    img: objeto.querySelector('img').getAttribute('src'),
    }
    
}