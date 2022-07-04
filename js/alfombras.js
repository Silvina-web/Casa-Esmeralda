console.log("hola")
const itemsAlfombras = document.getElementById ('items-alfombras')



/* ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
  
   
    
})


const fetchData = async () => {
     try{
         const res = await fetch ('../Json/alfombras.json')
         const data = await res.json ()
        
         pintarAlfombras(data)

     } 
     catch (error) {
         console.log (e)
     }

    
}

const pintarAlfombras = (data) => {
    data.forEach(element => {
        const divAlfombras = document.createElement('div');
        divAlfombras.classList.add('card-alfombras');
        divAlfombras.innerHTML = `
        <img src=${element.img} alt="foto de alfombras">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>
        `
        itemsAlfombras.appendChild(divAlfombras);
    }
    )}





    
   










