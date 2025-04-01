
import Dropdown from '../Dropdown/Dropdown'
import '../Dropdown/Dropdown.css'

export default function Header() {


 
  return (
    <header className="header">
      <a href=""><img className= "header__logo" src="./images/cat.png" alt="logo" /></a>
      
      <nav className="navbar">
        <Dropdown/>
        
        <a className="navbar__item" href="">Home</a>
        <a className="navbar__item" href="#about">About me</a>
        <a className="navbar__item" href="#Cards">Projects</a>
        <a className="navbar__item" href="">Contact</a>
        
        </nav>


    </header>
  )
}
