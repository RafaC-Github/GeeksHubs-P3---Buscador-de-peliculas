axios.get('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+busqueda)
.then(res=>{
    const peliculas =res.data.results
})

const getMovies =()=>{
    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=')
    .then(res=>res.json())
    .then(movies=>{
        document.querySelector('.movies').innerHTML='';
        for (const movie of movies) {
            document.querySelector('.movies').innerHTML+=`
        <div class="movies">
        </div>
            `
        }
    })
}