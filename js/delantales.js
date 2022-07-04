console.log("delantales")
const itemsDelantales= document.getElementById('items-delantales');

/* ...................................... */

document.addEventListener('DOMContentLoaded', ()=> {
    fetchData()
} )

const fetchData = async () => {
    try{
        const res = await fetch ('../Json/delantales.json');
        const data = await res.json();
        pintarDelantales(data);
    } 
    catch (error){
        console.log(e);
    }
}
/* .................................... */

const pintarDelantales = data => {
    data.forEach(element =>{
        const divDelantales = document.createElement('div');
        divDelantales.classList.add('card-delantales');
        divDelantales.innerHTML = `
        <img src=${element.img} alt="foto de delantales">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>

        `
  itemsDelantales.appendChild(divDelantales)
    })
}