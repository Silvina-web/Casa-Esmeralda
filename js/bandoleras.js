console.log("bandoleras")

const items= document.getElementById('items-bandoleras')
const contenedorCarrito= document.getElementById('carrito-contenedor')

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData= async () => {
     try{
         const res = await fetch ('../Json/bandoleras.json')
         const data = await res.json ()
         console.log(data)
         renderizar(data)
       
     } catch (error) {
         console.log (e)
     }
}


const renderizar= data => {
     let carrito=[]
     data.forEach(element => {
     const div= document.createElement ('div')
     /* div.classList.add('card-bandoleras') */
     div.innerHTML =`
    <img src= ${element.img} alt="foto de bandolera">
    <h5>${element.nombre}</h5>
    <h6>${element.descripcion}</h6>
    <p>precio:$ ${element.precio}</p>
    <button id="agregar${element.id}" >Agregar</button>
  `
  items.appendChild(div)

  const boton= document.getElementById(`agregar${element.id}`) 
  boton.addEventListener('click',()=> {
      agregarCarrito(element.id)
  })
  
     }
)
 const agregarCarrito= (prodId) => {
     const item= data.find(item => item.id === prodId)
     carrito.push(item)
     actualizarCarro()
     console.log(carrito)
 }


const eliminarCarrito= (prodId) => {
    const item= carrito.find((item) => item.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarro()
}


const actualizarCarro= (item) => {
    contenedorCarrito.innerHTML= ''
    carrito.forEach(item => {
        const div= document.createElement('div')
        div.innerHTML= `
        <img src= ${item.img} alt="foto de bandolera"> 
        <h5>${item.nombre}</h5>
        <h6>${item.descripcion}</h6>
        <p>precio:$ ${item.precio}</p>
        <p>cantidad: <span id="cantidad"> ${item.cantidad}<span></p>
        <button id="eliminar${item.id}" >Eliminar</button>
        `
        contenedorCarrito.appendChild(div)
        const boton= document.getElementById(`eliminar${item.id}`)
        boton.addEventListener('click',()=> {
            eliminarCarrito(item.id)
        })
    })





}
}