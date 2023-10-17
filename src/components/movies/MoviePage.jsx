import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './moviePage.scss'
import { api_key } from "./api_key";

export default function MoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api_key}`)
        .then((res) => {
            setMovie(res.data)
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getMovie()
        return () => {}
    }, [])

    return (

        <div className="main-movie-page">
            {
                (movie !== undefined)
                ?
                <div className="movie-loaded">
                    <img src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt="Movie poster" width="350px" />
                    <div className="movie-informations">
                        <h2>{movie.title}</h2>
                        <div>
                            <span className="movie-genres">Genres :&nbsp;
                            {movie.genres !== undefined
                            ?
                            movie.genres.map((genre, index) => {
                                return index == (movie.genres.length -1) ? genre.name : (genre.name + ', ')
                            })
                            :
                            'Loading'
                            }
                            </span>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
                :
                <p>Loading</p>
            }
            
        </div>

    )

}