import MovieItem from "./MovieItem";

// The Movies
const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie}/>
        }
    );
  }

  export default Movies;