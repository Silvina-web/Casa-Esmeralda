console.log("personalizados")

const itemsPersonalizados= document.getElementById('items-personalizados');


document.addEventListener('DOMContentLoaded' ,() => {
    fetchData()
})

const fetchData = async ()=> {
    try{
        const res = await fetch('../Json/personalizados.json');
        const data = await res.json();

        pintarPersonalizados(data);
    }
    catch(error){
        console.log(e)
    }
}

const pintarPersonalizados = data =>{
    data.forEach(element => {
        const divPersonalizados = document.createElement('div')
        divPersonalizados.classList.add('card-personalizados')
        divPersonalizados.innerHTML=`
        <img src=${element.img} alt="foto de ponchos">
        <h5>${element.nombre}</h5>
        <p>${element.descripcion}</p>
        <p> Medidas: ${element.medidas}</p>
        <p> ${element.otros}</p>
        <p class="precio"> ${element.precio}</p>

        `
        itemsPersonalizados.appendChild(divPersonalizados);
    })
}