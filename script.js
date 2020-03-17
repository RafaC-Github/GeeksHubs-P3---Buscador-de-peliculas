var mymovies = document.querySelector(".mymovies");
var searchInput = document.querySelector(".searchInput");

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getMovies(event.target.value)
        event.target.value = ''
    }
})

const getTrailer = (movie_id) => {
    fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/videos?api_key=cea68b520beecac6718820e4ac576c3a')
        .then(res => res.json())
        .then(res => {
            const key = res.results[0].key;
            document.querySelector(".modal-body").innerHTML = '<iframe class="videoyt" src="https://www.youtube.com/embed/' + key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

        })
}
const getMovies = (busqueda) => {

    fetch('https://api.themoviedb.org/4/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + busqueda)
        .then(res => res.json()) //parsearlo a json
        .then(res => {
            mymovies.innerHTML = '';
            const peliculas = res.results;
            for (const pelicula of peliculas) {
                const imagen = pelicula.poster_path ? `
                <img src="http://image.tmdb.org/t/p/w185${pelicula.poster_path}" alt="imagen de la pelicula" class=imageaviable>` : '<img src=""/img/imagenotaviable.jpg"" class=imagenotaviable>'
                mymovies.innerHTML += `
                    
                        
                <div class="headmovie">
                <div class="titulo">
                    <h5 class="text-center" >${pelicula.title}</h4>
                </div>
                    <div class="centered">
                    <div class="imagemovie">
                        ${imagen}
                        <div class="resume">
                            <h5>${pelicula.overview}<h5>
                            <h5>${pelicula.release_date}<h5> 
                        </div>
                        </div>
                        <div class="voteaverage">
                        <h5 class="text-center">${pelicula.vote_average}<h5>   
                        </div>
                        <div class="buttontrailer"                 
                        <a onclick="getTrailer(${pelicula.id})"><button  value=${pelicula.id}  id="buttonmodal" class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal">Trailer</button></a>
                        </div>
                    </div>
                    

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Trailer oficial</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    </div>
                  </div>
                </div>
              </div>
            `
            }
        })
}