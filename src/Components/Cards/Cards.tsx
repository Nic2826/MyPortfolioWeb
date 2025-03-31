import { Link } from "@mui/material";

export default function Cards() {
  return (
    <section id="Cards" className="projects">
      <h1 className="projects_title">Projects</h1>
      <div className="cards">
        <Link
          href="https://nic2826.github.io/web_project_around/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <div className="card_item">
            <img
              src="../../images/galeria-interactiva.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">galeria-interactiva</h1>
            <div className="card_description">
              <p className="card_description-text">
                Tecnologías utilizadas: HTML, CSS y Javascript
              </p>
              <p>
                A dynamic web application built with HTML, CSS, and JavaScript,
                featuring a responsive design. The project follows BEM
                methodology and implements interactive elements like pop-ups,
                form validations, and dynamic content management. Users can
                like, expand, add, and remove images through seamless DOM
                manipulation, with robust JavaScript classes ensuring smooth
                user interactions and engaging web experience
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
              src="../../images/galeria-interactiva.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">galeria-interactiva</h1>
            <div className="card_description">
              <p className="card_description-text">
                Tecnologías utilizadas: HTML, CSS y Javascript
              </p>
              <p>
                A dynamic web application built with HTML, CSS, and JavaScript,
                featuring a responsive design. The project follows BEM
                methodology and implements interactive elements like pop-ups,
                form validations, and dynamic content management. Users can
                like, expand, add, and remove images through seamless DOM
                manipulation, with robust JavaScript classes ensuring smooth
                user interactions and engaging web experience
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
              src="../../images/galeria-interactiva.png"
              alt="icon"
              className="card_image"
            />
            <h1 className="card_title">galeria-interactiva</h1>
            <div className="card_description">
              <p className="card_description-text">
                Tecnologías utilizadas: HTML, CSS y Javascript
              </p>
              <p>
                A dynamic web application built with HTML, CSS, and JavaScript,
                featuring a responsive design. The project follows BEM
                methodology and implements interactive elements like pop-ups,
                form validations, and dynamic content management. Users can
                like, expand, add, and remove images through seamless DOM
                manipulation, with robust JavaScript classes ensuring smooth
                user interactions and engaging web experience
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
