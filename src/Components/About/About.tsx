import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
export default function About() {
  const { language, translations } = useContext(LanguageContext);
  return (
    <section id="about" className="about">
      <h1 className="about__title">{translations[language]?.abouttitle}</h1>

      <div className="about__description">
        <div >
        <p className="about__description-profile">
          {translations[language]?.about}
        </p>
        <p>
          {translations[language]?.about2}
        </p>
        </div>
        
        <div className="about__tech">
          <p className="about__tech-text">Tech Stack</p>
          <div className="about__tech-img">
            <div>
            <img
              className="about__tech-img-icon"
              src="./images/JS.png"
              alt="JavaScript"
              title="JavaScript"
            /> 
            <p className="about__tech-icon">JavaScript</p>
            </div>
          <div>
          <img
              className="about__tech-img-icon"
              src="./images/CSS.png"
              alt="CSS"
              title="CSS"
            />
            <p className="about__tech-icon">CSS</p>
          </div>
            
            <div>
            <img
              className="about__tech-img-icon"
              src="./images/HTML5.png"
              alt="HTML5"
              title="HTML"
            />
            <p className="about__tech-icon">HTML</p>
            </div>
            
            <div>
            <img
              className="about__tech-img-icon"
              src="./images/React.png"
              alt="React"
              title="React"
            />
            <p className="about__tech-icon">React</p>
            </div>
            
            <div>
            <img
              className="about__tech-img-icon"
              src="./images/GithubTech.png"
              alt="Github"
              title="Github"
            />
            <p className="about__tech-icon">Github</p>
            </div>
            
            <div>
            <img
              className="about__tech-img-icon"
              src="./images/GIT.png"
              alt="GIT"
              title="GIT"
            />
            <p className="about__tech-icon">GIT</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
