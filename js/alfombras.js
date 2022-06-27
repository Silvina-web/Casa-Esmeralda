console.log("hola")

/* Alfombras */
const itemsAlfombras = document.getElementById ('items-alfombras')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const contenedorCarrito = document.getElementById('carrito-contenedor')


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
        

   const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    itemsAlfombras.appendChild(fragment)
}


 



    
   










