import axios from "axios"
import { useState, useEffect } from "react"
import Movie from "./Movie";
import './movies.scss'
import * as Icon from "react-bootstrap-icons";
import { useLocation, Link } from "react-router-dom";
import {api_key} from "./api_key";

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const location = useLocation()

    const getMovies = async (page) => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${api_key}`)
        .then((res) => {
            setMovies(res.data.results)
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        // const urlParams = new URLSearchParams(location.search)
        // if(urlParams.has("page")) {
        //     setPage(urlParams.get('page'))
        //     //getMovies(urlParams.get('page'))
        // }
        getMovies(page)
        return () => {}
    }, [page])

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        if(urlParams.has("page")) {
            setPage(urlParams.get('page'))
            //getMovies(urlParams.get('page'))
        }
        getMovies(page)
        return () => {}
    }, [])

    return (

        <div className="main-movies">
            <div className="pagination-arrows">
                {/* <Link to={{pathname: '/movies', search: `?page=${page-1}`}}> */}
                    <Icon.ArrowLeftSquareFill fontSize={35} className="arrow" onClick={() => setPage(page-1)} />
                {/* </Link> */}
                {/* <Link to={{pathname: '/movies', search: `?page=${parseInt(page)+1}`}}> */}
                    <Icon.ArrowRightSquareFill fontSize={35} className="arrow" onClick={() => setPage(parseInt(page)+1)} />
                {/* </Link> */}
            </div>
            <ul>
                {movies.map((movie) => {
                    return(
                        <Movie key={movie.id} movie={movie} />
                    )
                })}
            </ul>
        </div>

    )

}