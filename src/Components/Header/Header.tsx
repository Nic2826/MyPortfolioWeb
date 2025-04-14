
import Dropdown from '../Dropdown/Dropdown'
import '../Dropdown/Dropdown.css'
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext'
export default function Header() {

const { language, translations } = useContext(LanguageContext);
 
  return (
    <header className="header">
      <a href=""><img className= "header__logo" src="./images/cat.png" alt="logo" /></a>
      
      <nav className="navbar">
        <Dropdown />
        
        <a className="navbar__item" href="">{translations[language]?.home}</a>
        <a className="navbar__item" href="#about">{translations[language]?.abouttitle}</a>
        <a className="navbar__item" href="#Cards">{translations[language]?.projecttitle}</a>
        <a className="navbar__item" href="#contact">{translations[language]?.contacttitle}</a>
        
        </nav>


    </header>
  )
}
