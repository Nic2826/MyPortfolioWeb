import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
export default function About() {
  const { language, translations } = useContext(LanguageContext);
  return (
    <section id="about" className="about">
      <h1 className="about__title">About me</h1>

      <div className="about__description">
        
        <p className="about__description-profile">
          {translations[language]?.description}
        </p>

        <div className="about__tech">
          <p className="about__tech-text">Tech Stack</p>
          <div className="about__tech-img">
            <img
              className="about__tech-img-icon"
              src="./images/JS.png"
              alt="JavaScript"
              title="JavaScript"
            />
            <img
              className="about__tech-img-icon"
              src="./images/CSS.png"
              alt="CSS"
              title="CSS"
            />
            <img
              className="about__tech-img-icon"
              src="./images/HTML5.png"
              alt="HTML5"
              title="HTML"
            />
            <img
              className="about__tech-img-icon"
              src="./images/React.png"
              alt="React"
              title="React"
            />
            <img
              className="about__tech-img-icon"
              src="./images/GithubTech.png"
              alt="Github"
              title="Github"
            />
            <img
              className="about__tech-img-icon"
              src="./images/GIT.png"
              alt="GIT"
              title="GIT"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
