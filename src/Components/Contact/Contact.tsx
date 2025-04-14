import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Contact() {
  const { language, translations } = useContext(LanguageContext);
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">    
        {translations[language]?.contacttitle}</h2>
      <p className="contact__description">{translations[language]?.contact}</p>

      <div className="contact__social">
      <a href="https://www.linkedin.com/in/nicollealgarin-web-developer-project-manager/"  target="_blank"><img className="contact__social-linkedin" src="./images/linkedin.png" alt="linkedin" title="Linkedin" /></a>
      <a href="https://github.com/nic2826"  target="_blank"><img className="contact__social-github" src="./images/github.png" alt="github" title="Github" /></a>
       <a className="contact__social-email" href="mailto:nicolalgarin2605@gmail.com">nicolalgarin2605@gmail.com</a>
      </div>
      <p className="contact__social-copyright">© 2024 Nicolle Algarín</p>      
    </section>
  )
}
