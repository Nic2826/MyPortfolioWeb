import { Link } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext'

export default function Cards() {
  const { language, translations } = useContext(LanguageContext);
  return (
    <section id="Cards" className="projects">
      <h1 className="projects_title">{translations[language]?.projecttitle}</h1>
      <div className="cards">
      <Link
          href="https://github.com/Nic2826/project-news-explorer-frontend"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <div className="card_item">
            <img
              src="./images/News-Explorer.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">{translations[language]?.newstitle}</h1>
            <div className="card_description">
              <p className="card_description-text">
                HTML, CSS, Javascript, React y REST API
              </p>
              <p>
              {translations[language]?.newsdescription}
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://nic2826.github.io/web_project_around/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <div className="card_item">
            <img
              src="./images/galeria-interactiva.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">{translations[language]?.gallerytitle}</h1>
            <div className="card_description">
              <p className="card_description-text">
               HTML, CSS y Javascript
              </p>
              <p>
              {translations[language]?.gallerydescription}
                <br />
                <br />
              </p>
            </div>
          </div>
        </Link>
        
        <Link
          href="https://nic2826.github.io/web_project_coffeeshop/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <div className="card_item">
            <img
              src="./images/coffeeshop.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">{translations[language]?.coffeetitle}</h1>
            <div className="card_description">
              <p className="card_description-text">
                HTML y CSS
              </p>
              <p>
              {translations[language]?.cofeeedescription}
                <br />
                <br />
                <br />

              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
