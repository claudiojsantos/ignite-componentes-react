import { Component } from "react";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss'
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
class Content extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {this.props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {this.props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    )
  }
}

export default Content;