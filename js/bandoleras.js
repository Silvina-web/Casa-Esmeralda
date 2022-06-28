console.log("bandoleras")

const itemsB= document.getElementById('itemsB-bandoleras')



 


          

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
     div.classList.add('card-bandoleras')
     div.innerHTML =`
    <img src= ${element.img} alt="foto de bandolera">
    <h5>${element.nombre}</h5>
    <p>${element.descripcion}</p>
    <p> Medidas:${element.medidas}</p>
    <p> ${element.otros}</p>
    <p> ${element.precio}</p>
   
  `
         itemsB.appendChild(div)

              
                                              
        

  
     }
         )


 
 


}




