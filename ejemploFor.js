const muestra = document.querySelector('.container');

const url = 'https://jsonplaceholder.typicode.com/users';/* esta es la URL que accede al endpoint de la API */

fetch(url)
      .then(response => response.json())
      .then(data =>{
        data.forEach(element => {
            /* console.log(element.address); */
            const h2= document.createElement('h2')
            h2.innerHTML= element.name;/*  en esta parte el codigo podemos acceder a los endpoints de la API y a cada uno de los elementos de los objetos que nos arroja el Json */
            muestra.appendChild(h2)
        });
      })
      