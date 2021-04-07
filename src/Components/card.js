import { Component } from 'react';
import "./../Styles/card.css";
import AddLogo from "./../Assets/plus.png";
import FavoriteLogo from "./../Assets/heart.png";
import DownloadLogo from "./../Assets/download.png";

class Card extends Component{
  render(){
    return(
      <div className="imageDiv">
        <div id="overlay">
          <div className="addlogo"><img src={AddLogo} alt="Add Logo"></img></div>
          <div className="favoritelogo"><img src={FavoriteLogo} alt="Favorite Logo"></img></div>
          <div className="downloadlogo"><img src={DownloadLogo} alt="Download Logo"></img></div>
        </div>
        <img src={this.props.url} className="cardImg" alt={this.props.title}></img>
      </div>
      
    );
  }
}
export default Card;
