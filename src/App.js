import { Component } from 'react';
import Nav from "./Components/nav";
import Card from "./Components/card";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Nav></Nav>
        <div className="cardContainer">
        <Card url="https://images.unsplash.com/uploads/14127101912749510b8ed/82743738?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" title="Wallpaper"></Card>
        <Card url = "https://images.unsplash.com/photo-1617597837929-b34c021186f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1510749383218-f64dc61c9630?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1586093708488-7e30a6e77396?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617718875775-c5f9800b17fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url = "https://images.unsplash.com/photo-1617746029822-3f36f2ba0f49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617051180942-9ae0ba2fbeb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617462493829-da7ad3ed9b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617340646579-097994590c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url = "https://images.unsplash.com/photo-1617546400924-bd3659f2f102?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617627824653-30d2a99c5dc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1615499797532-2612dceed768?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1590075621589-2aa0b980a9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" title="Wallpaper"></Card>
        <Card url = "https://images.unsplash.com/photo-1617209637559-e5189a9c234c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1603659344702-c3be0ea6ebde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617130266198-067b697fd425?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" title="Wallpaper"></Card>
        <Card url="https://images.unsplash.com/photo-1617103650310-7f2e1500eae4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" title="Wallpaper"></Card>
        </div>
        <footer>&#169; Infinity &#174; 2021</footer>
      </div>
    );
  }
}
export default App;
