console.log("bandoleras")

const items= document.getElementById('items-bandoleras')



document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () => {
     try{
         const res = await fetch ('../Json/bandoleras.json')
         const data = await res.json ()
         //console.log(data)
         renderizar(data)
       
     } catch (error) {
         console.log (e)
     }
}
const renderizar= data => {
     data.forEach(element => {
     const div= document.createElement ('div')
     /* div.classList.add('card-bandoleras') */
     div.innerHTML =`
    <img src= ${element.img} alt="foto de bandolera">
    <h5>${element.nombre}</h5>
    <h6>${element.descripcion}</h6>
    <p>precio:$ ${element.precio}</p>

  `
  items.appendChild(div)
 }
)};