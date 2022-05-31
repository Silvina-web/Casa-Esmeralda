console.log("hola")
/* Alfombras */
const items = document.getElementById ('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () => {
     try{
         const res = await fetch ('../Json/alfombras.json')
         const data = await res.json ()
         //console.log(data)
         pintarCards(data)
     } catch (error) {
         console.log (e)
     }
}
const pintarCards  = data  => {
    console.log(data)
    data.forEach(producto => {
        console.log(producto)
        templateCard.querySelector ('h5').textContent = producto.nombre
        templateCard.querySelector('h6').textContent = producto.descripcion
        
        templateCard.querySelector ('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)

   const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    items.appendChild(fragment)
}



/* Bandoleras */


/* try{
fetch('Json/bandoleras.json')
  .then(respuesta => {
      return respuesta.json()

  })
  .then(datos => console.log(datos)) 
     }
catch (e){
    console.log(e)
              } */



