/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


// INTL
//  se utiliza 1 para dar formato a fecha 2- dar formato a moneda
const formatPrice = (price) =>{
    const newPrice= new window.Intl.NumberFormat('en-En',{
        style:'currency',
        currency:'USD',
    }).format(price)
    return newPrice;
}


const appNode = document.querySelector('#app');
//web api
const baseUrl = "https://platzi-avo.vercel.app";
//const url = "https://platzi-avo.vercel.app/api/avo";
//Conectarnos al servidor
window.fetch(`${baseUrl}/api/avo`)
//Prosesar resuesta, y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> data-> renerizar
.then(responseJson => {
    const todoLosItems = [];
    console.log(responseJson);
    responseJson.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        
        //Crear titulo
        const title = document.createElement('h2');
        title.textContent= item.name;
        title.className = 'text-xl text-red-500';
        //crear Precio
        const price = document.createElement('p');
        price.textContent=formatPrice(item.price);
        price.className="text-gray-500";
        
        const container = document.createElement('div')
        container.append(imagen, title, price)
        container.className= 'm-6 shadow-xl rounded hover:shadow-md';


        todoLosItems.push(container);
        
    });
    appNode.append(...todoLosItems);
    appNode.className = 'container mt-8';
   
})
