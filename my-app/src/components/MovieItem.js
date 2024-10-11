const MovieItem = (props) => {
    return (
        <div>
            <h3>{props.mymovie.Title}</h3>
            <img src = {props.mymovie.Poster}/>
            <h4>{props.mymovie.Year}</h4>
            <h5>{props.mymovie.Type}</h5>
            <h5>{props.mymovie.imdbID}</h5>
            <br/>
        </div>
    );
  }

  export default MovieItem;