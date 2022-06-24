console.log("hola")

/* Alfombras */
const itemsAlfombras = document.getElementById ('items-alfombras')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const contadorCarrito = document.getElementById('contadorCarrito')
const contenedorCarrito = document.getElementById('carrito-contenedor')
let= carrito = {}
itemsAlfombras.addEventListener('click', e => {
   agregarAlfombra(e)
}
)
/* ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarAlfombras()
    }
   
    
})


const fetchData = async () => {
     try{
         const res = await fetch ('../Json/alfombras.json')
         const data = await res.json ()
         //console.log(data)
         pintarCards(data)

     } 
     catch (error) {
         console.log (e)
     }

    
}
/* ------------------------------------------------------- */
const pintarCards  = data  => {
   /*  console.log(data) */
    data.forEach(producto => {
      /*   console.log(producto) */
        templateCard.querySelector ('h5').textContent = producto.nombre
        templateCard.querySelector('h6').textContent = producto.descripcion
        templateCard.querySelector ('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.button-favoritos').dataset.id = producto.id

   const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    itemsAlfombras.appendChild(fragment)
}


 const agregarAlfombra = e => {
   
    if(e.target.classList.contains('fa-heart')){
        modalAlfombra(e.target.parentElement.parentElement.parentElement)
 }
 e.stopPropagation()

}

const modalAlfombra= objeto => {
    console.log(objeto)
    const productoAlfombra ={
        id: objeto.querySelector('.button-favoritos').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        img: objeto.querySelector('img').getAttribute('src'),
      

     
        
    }
    

    carrito[productoAlfombra.id] = {...productoAlfombra}
    console.log(productoAlfombra)
    pintarAlfombras()
    
}
   

const pintarAlfombras = () => {
    console.log(carrito)
    contenedorCarrito.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        const div = document.createElement('div')
        div.className =('producto-carrito')
        div.innerHTML = `
        <img src=${producto.img} alt="foto de alfombra">
        <h5>${producto.nombre}</h5>
        <p>Precio: $ ${producto.precio}</p>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarrito.appendChild(div)
    }
    )

 contadorCarrito.textContent = Object.keys(carrito).length

 localStorage.setItem('carrito', JSON.stringify(carrito))

} 




function eliminarDelCarrito(id){
    delete carrito[id]
    pintarAlfombras()
}





