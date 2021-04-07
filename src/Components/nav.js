import { Component } from 'react';
import MenuLogo from "./../Assets/menu.png";
import MainLogo from "./../Assets/infinity-logo.png";
import SearchLogo from "./../Assets/loupe.png";
import "./../Styles/nav.css";
class Nav extends Component{
  render(){
    return(
      <nav className="mainNav">
        <span>
          <a href="/"><img src={MenuLogo} className="menu" alt="Menu Logo"></img></a>
        </span>
        <span>
          <a href="/"><img src={MainLogo} className="logo" alt="Main Logo"></img></a>
        </span>
        <span>
          <a href="/"><img src={SearchLogo} className="search" alt="Search Logo"></img></a>
          <a href="/"><span className="loginBtn">Login</span></a>
        </span>
      </nav>
    );
  }
}
export default Nav;
