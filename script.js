var mymovies = document.querySelector(".mymovies");
var searchInput = document.querySelector(".searchInput");
searchInput.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        getMovies(event.target.value)
        event.target.value = ''
    }
})
const getMovies =(busqueda)=>{
    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+busqueda)
    .then(res=>res.json())//parsearlo a json
    .then(res=>{
        mymovies.innerHTML='';
        const peliculas =res.results;
        for (const pelicula of peliculas) {
            mymovies.innerHTML+=
            `
            <div class="movie">
            <h1>${pelicula.original_title}</h1>
            <img src="http://image.tmdb.org/t/p/w185/${pelicula.poster_path}">
            <h3>${pelicula.overview}<h3>
            <h3>${pelicula.release_date}<h3>
            <h4>${pelicula.vote_average}<h4>
            <h5>${pelicula.original_language}</h5>
          
            </div>
            `
        }
    })
}
    