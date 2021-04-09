import { Component } from 'react';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

class SideBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {this.props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => this.props.handleClickButton(genre.id)}
              selected={this.props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    )
  }
}

export default SideBar;