import React, { createContext, useState } from 'react'

export const MovieContext = createContext();


const MovieContextProvider = (props) => {
    const [movies, setMovie] = useState({
        s: '',
        results: [],
        selected:{}
    })

 

 
   

    return ( 
        <MovieContext.Provider value={{movies, setMovie}}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;