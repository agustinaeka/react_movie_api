import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext';

const Result = ({ showPopup, movie}) => {
    const { movies} = useContext(MovieContext);
   
    return ( 
       <div>

            <button className="btn btn-primary" data-toggle="modal" data-target="#movieDetail" onClick={() => showPopup(movie.imdbID)}>Details</button>
       
            <div className="modal fade" id="movieDetail" tabIndex="-1" role="dialog" aria-labelledby="movieDetailLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                
                <div className="modal-body pt-5">
                    <div className="container-fluid">
                        <div className="row">
                                <div className="col-md-3">
                                    <img className="img-fluid" src={movies.selected.Poster} alt=""/>
                                </div>
                                <div className="col-md">
                                    <ul className="list-group text-left">
                                            <li className="list-group-item"><h4>{movies.selected.Title} ({ movies.selected.Year})</h4></li>
                                            <li className="list-group-item"><strong>Genre: </strong>{movies.selected.Genre}</li>
                                            <li className="list-group-item"><strong>Director: </strong>{movies.selected.Director}</li>
                                            <li className="list-group-item"><strong>Actors: </strong>{movies.selected.Actors }</li>
                                            <li className="list-group-item"><strong>Country: </strong>{movies.selected.Country}</li>
                                            <li className="list-group-item"><strong>Rating: </strong>{movies.selected.imdbRating}</li>
                                            <li className="list-group-item"><strong>Plot: </strong>{movies.selected.Plot}</li>

                                    </ul> 
                                </div>
                        </div>
                   </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>

     );
}
 
export default Result;