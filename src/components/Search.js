import React, { useContext } from 'react';
import axios from 'axios'
import { MovieContext } from '../context/MovieContext';

const Search = () => {
    const {movies, setMovie} = useContext(MovieContext)
    const baseURL = "http://www.omdbapi.com/?apikey=1d45287e";

    const handleChange = (e) => {
        setMovie(() => {
            return {...movies, s:e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(baseURL + "&s=" + movies.s)
            .then(response => {
                setMovie(() => {
                return {...movies, results:response.data.Search}
            })
            })
        console.log(movies);
        setMovie(() => {
            return{...movies, s:''}
        })
        
        
    }

    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={movies.s} className="form-control" placeholder="Search for a movie..." aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </form>
     );
}
 
export default Search;