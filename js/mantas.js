console.log("mantas");

const itemsMantas = document.getElementById('items-mantas')

/* ............................................ */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()


})

const fetchData = async ()=> {
    try{
        const res = await fetch ('../Json/mantas.json')
        const data = await res.json ()

        pintarMantas(data)
    }
    catch (error){
        console.log (e)
    }

}
/* .............................................. */

const pintarMantas = (data) => {
    data.forEach(element => {
        const divMantas = document.createElement('div');
        divMantas.classList.add ('card-mantas');
        divMantas.innerHTML = `
         <img src=${element.img} alt="foo de manta">
         <h5>${element.nombre}</h5>
         <p>Medidas:${element.medidas}</p>
         <p> ${element.otros} </p>
         <p class="precio">${element.precio}</p>
        `
        itemsMantas.appendChild(divMantas);
        
    })
}