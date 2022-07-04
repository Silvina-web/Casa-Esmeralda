console.log("ponchos")

const itemsPonchos= document.getElementById('items-ponchos');


/* ................................................ */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () =>{
    try{
        const res= await fetch('../Json/ponchos.json');
        const data = await res.json();
        pintarPonchos(data);

    }catch (error) {
        console.log(e)
    }
}
/* .................................................. */

const pintarPonchos= data =>{
    data.forEach(element =>{
        const divPonchos = document.createElement('div')
        divPonchos.classList.add('card-ponchos')
        divPonchos.innerHTML=`
        <img src=${element.img} alt="foto de ponchos">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>
        `
        itemsPonchos.appendChild(divPonchos);


    })
}