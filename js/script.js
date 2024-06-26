import peliculas from './peliculas.js' //*--*Este código importa el array peliculas desde el archivo peliculas.js. Este array contiene objetos con información sobre varias películas (títulos, géneros y rutas de imágenes)

//*--* Este objeto generoMap asocia los IDs de los géneros (números como 28, 53, etc.) con elementos del DOM (HTML) específicos que tienen IDs correspondientes (genero-28, genero-53, etc.). Esto permite acceder fácilmente a los contenedores de cada género en el documento HTML.

const generoMap = {
  28: document.getElementById('genero-28'),
  53: document.getElementById('genero-53'),
  12: document.getElementById('genero-12'),
  80: document.getElementById('genero-80'),
  18: document.getElementById('genero-18'),
  878: document.getElementById('genero-878'),
  27: document.getElementById('genero-27'),
  10751: document.getElementById('genero-10751'),
  16: document.getElementById('genero-16'),
  10752: document.getElementById('genero-10752'),
};

//*--* Esta función createMovieCard toma un objeto pelicula como argumento y crea un elemento div que representa una tarjeta de película. La tarjeta contiene una imagen (img) y un título (h3), ambos extraídos del objeto pelicula. La ruta de la imagen se construye concatenando la base URL https://image.tmdb.org/t/p/w500 con la ruta relativa de la imagen (pelicula.poster_path).

function createMovieCard(pelicula) {
  const card = document.createElement('div');
  card.classList.add('movie-card');

  const img = document.createElement('img');
  img.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
  img.alt = pelicula.title;

  const title = document.createElement('h3');
  title.textContent = pelicula.title;

  card.appendChild(img);
  card.appendChild(title);

  return card;
}

//*--* Esta parte del código recorre cada película en el array peliculas utilizando forEach. Para cada película, recorre sus genre_ids (que es un array de IDs de géneros) y, si el ID del género existe en generoMap, crea una tarjeta de película utilizando createMovieCard y la añade al contenedor correspondiente en el documento HTML.

peliculas.forEach(pelicula => {
  pelicula.genre_ids.forEach(genero => {
    if (generoMap[genero]) {
      const movieCard = createMovieCard(pelicula);
      generoMap[genero].appendChild(movieCard);
    }
  });
});


//CODIGO DE DATA, CLASE:

// import peliculas from './peliculas.js'

// // const actionMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(28))
// // const thrillerMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(53))
// // const adventuresMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(12))

// // const action = document.getElementById("genero-28")
// // const thriller = document.getElementById("genero-53")
// // const adventures = document.getElementById("genero-12")

// const mostrarPeliculas = (generoID, genero) => {
//   const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoID))
//   const contenedor = document.getElementById(genero)
  
//   // for(let peli of peliculasFiltradas) {
//   //   const urlBase = "https://image.tmdb.org/t/p/w500"
//   //   const template = 
//   //   `
//   //   <div class="pelicula">
//   //     <img src=${urlBase}${peli.poster_path} alt=${peli.title} />
//   //     <h2>${peli.title}</h2>
//   //   </div>
//   //   `
//   //   // contenedor.insertAdjacentHTML("beforeend", template)
//   //   contenedor.innerHTML += template
    
    
//     // const urlBase = "https://image.tmdb.org/t/p/w500"
//     // const peliculaElement = document.createElement("div")
//     // peliculaElement.classList.add("pelicula")
  
//     // const imgElement = document.createElement("img")
//     // imgElement.src = `${urlBase}${peli.poster_path}`
//     // imgElement.alt = peli.title
    
//     // const titleElement = document.createElement("h2")
//     // titleElement.textContent = peli.title
    
//     // peliculaElement.appendChild(imgElement)
//     // peliculaElement.appendChild(titleElement)
    
//     // contenedor.appendChild(peliculaElement)
//   // }

//   // peliculasFiltradas.forEach((peli) => {
//   //   const urlBase = "https://image.tmdb.org/t/p/w500"
//   //   const template = 
//   //   `
//   //   <div class="pelicula">
//   //     <img src=${urlBase}${peli.poster_path} alt=${peli.title} />
//   //     <h2>${peli.title}</h2>
//   //   </div>
//   //   `
//   //   // contenedor.insertAdjacentHTML("beforeend", template)
//   //   contenedor.innerHTML += template
//   // })

//   contenedor.innerHTML = peliculasFiltradas.map(peli => {
//     const urlBase = "https://image.tmdb.org/t/p/w500"
//     const template = 
//     `
//     <div class="pelicula">
//       <img src=${urlBase}${peli.poster_path} alt=${peli.title} />
//       <h2>${peli.title}</h2>
//     </div>
//     `
//     return template
    
//   }).join("")
// }


// mostrarPeliculas(28, "genero-28")
// mostrarPeliculas(53, "genero-53")
// mostrarPeliculas(12, "genero-12")



























// // peliculas.forEach(peli => {
// //   if(peli.genre_ids.includes(28) {

// //   })
// // })

