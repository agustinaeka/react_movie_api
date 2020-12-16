import axios from 'axios';
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Result from './Result';



const Results = () => {
    const {movies, setMovie} = useContext(MovieContext)
    const showPopup = (id) => {
        axios.get(" http://www.omdbapi.com/?apikey=1d45287e&i=" + id)
            .then(response => {
                console.log(response.data);
                setMovie(() => {
                    return {...movies, selected: response.data }
                       
                })
               
            })
        
        console.log(movies);
        
    }

    return ( 
        <div className="results">
        {
                (movies.results.length > 0) ? (
                     movies.results.map(movie => {
                        return (
                            <div className="result card" key={movie.imdbID}>
                                <img className="card-img-top" src={movie.Poster} alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="text-muted">{movie.Year}</p>
                                    <Result showPopup={showPopup} movie={movie} />
                                    
                                </div>
                
                
                            </div>
                        )
                    }
                )) : (
                    <div>Movie not found</div>
                    )       
            }

           
        </div>
   
     );
}
 
export default Results;