
import Results from "./components/Results";
import MovieContextProvider from "./context/MovieContext";

const { default: Search } = require("./components/Search");



function App() {
  return (
    <div className="App container text-center mt-3">
      <h1>Movie Database</h1>
      <MovieContextProvider>
         <Search/>
        <Results />
      </MovieContextProvider>
    
    </div>
  );
}

export default App;
