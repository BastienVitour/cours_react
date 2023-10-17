export default function Movie({movie}) {

    return (
        
        <li className="single-movie">
            <a href={"/movies/"+movie.id} className="movie-link">
                <img src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt="Movie poster" width="200px" />
                <span>{movie.title}</span>
            </a>
        </li>

    )

}