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
            const imagen = pelicula.poster_path ? `
                <img src="http://image.tmdb.org/t/p/w185${pelicula.poster_path}" alt="imagen de la pelicula" id=imageaviable>`:'<img src="/img/imagenotaviable.jpg" class=imagenotaviable>'
                mymovies.innerHTML+= `
            
            
            <div class="showmovies">
            <div class="title">
            <h1>${pelicula.original_title}</h1>
            <div class="contentfit">
            <div class="imagemovie">
            ${imagen}
            <div class="resume">
            <h3>${pelicula.overview}<h3>
            <h4>${pelicula.release_date}<h4>
            </div>
            </div>
            </div>
            <div class="vote">
            <h5>${pelicula.vote_average}<h5>
            </div>
           </div>
           </div>
            ` 
        }
    })
}
