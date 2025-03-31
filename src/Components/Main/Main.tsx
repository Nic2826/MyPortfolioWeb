// Main.tsx
// import { useContext } from "react";
// import { LanguageContext } from "../../contexts/LanguageContext";

export default function Main() {
  // const { language, translations } = useContext(LanguageContext);

  return (
    <section id="main" className="main">
      <div className="main__text">
        <h1 className="main__title">
          I am
          <span className="main__name"> Nicolle Algarín</span>
        </h1>
        <p className="main__profession">Web Developer - IT Project Management</p>

        <div className="main__social">
          <a href="https://www.linkedin.com/in/nicollealgarin-web-developer-project-manager/"  target="_blank"><img src="./images/linkedin.png" alt="linkedin" title="Linkedin" /></a>
          <a href="https://github.com/nic2826"  target="_blank"><img src="./images/github.png" alt="github" title="Github" /></a>
          

          <div className="main__social__cv">
            <a
              className="main__social__cv-text"
              href="https://drive.google.com/file/d/1VS_kgmw3GbzS95b-8mOkJhgHzhJO2DZq/view?usp=sharing"
              target="_blank"
              title="Download CV"
            >
              Download CV
            </a>
            <img
              className="main__social__cv-img"
              src="./images/ArrowLineDown.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <img className="main__image" src="./images/yo.jpg" alt="" />

      <br />
      
    </section>
  );
}
