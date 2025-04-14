// LanguageContext.tsx
import { createContext, useState, ReactNode } from "react";

// Define los tipos para tus traducciones
interface Translations {
  [key: string]: {
    home: string;
    abouttitle: string;
    projecttitle: string;
    contacttitle: string;
    maintitle: string;
    maindescription: string;
    download: string;
    about: string;
    about2: string;
    newstitle: string;
    newsdescription: string;
    gallerytitle: string;
    gallerydescription: string;
    coffeetitle: string;
    cofeeedescription: string;
    contact: string;
    // Añade más propiedades según necesites
  };
}

// Define el setipo para el contexto
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Translations;
}

// Crea el contexto con un valor predeterminado más acorde al tipo real
export const LanguageContext = createContext<LanguageContextType>({
  language: "English",
  setLanguage: () => {},
  translations: {},
});

// Define el tipo para las props del proveedor
interface LanguageProviderProps {
  children: ReactNode;
}

// Crea las traducciones
const translations: Translations = {
  English: {
    home: "Home",
    abouttitle: "About me",
    projecttitle: "Projects",
    contacttitle: "Contact",
    maintitle: "I am",
    maindescription: "Web Developer - IT Project Management",
    download: "Download CV",
    about:
      "IT Project Manager with 2 years of experience leading and managing web development projects in remote environments throughout the entire digital product cycle. Skilled in applying agile methodologies, creating workflow diagrams, converting business requirements into effective user stories, and optimizing digital products through data analysis and manual QA testing.",
    about2:
      "Recently graduated as a Junior Web Developer with practical experience in creating responsive web applications. This knowledge was acquired through web development bootcamp training and autodidactic learning through on-going personal projects.",
    newstitle: "News Explorer",
    newsdescription:
      "Responsive website design. It uses React, HTML, and CSS. The page includes features such as pop-ups, information submissionusing React components, and BEM methodology for class naming. Italso incorporates validation to prevent empty forms or formswith incorrect data. Its goal is to provide users with thelatest news on any topic they desire. It includes multipleroutes and the option to save and delete news.",
    gallerytitle: "Interactive Gallery",
    gallerydescription:
      "A dynamic web application built with HTML, CSS, and JavaScript, featuring a responsive design. The project follows BEM methodology and implements interactive elements like pop-ups, form validations, and dynamic content management. Users can like, expand, add, and remove images through seamless DOM manipulation, with robust JavaScript classes ensuring smooth user interactions and engaging web experience",
    coffeetitle: "Coffe Shop",
    cofeeedescription:
      "The project uses HTML and CSS technologies, with the latter divided into files corresponding to each block of the page. Each class is created following the BEM methodology. Flexbox, Grid, and media queries are used to make the page responsive, enhancing the user experience across different devices with varying screen sizes, and considering that not all of them use a cursor.",
    contact:
      "Let's get in touch!, you can reach me through my email or Linkedin and I'll be happy to show you how can add value to your goals with my job and life's perspective",
  },
  Español: {
    home: "Inicio",
    abouttitle: "Sobre mi",
    projecttitle: "Proyectos",
    contacttitle: "Contacto",
    maintitle: "Soy",
    maindescription: "Desarrolladora Web - Gestora de Proyectos de TI",
    download: "Descargar CV",
    about:
      "Desarrollador/a front-end júnior y gestor/a de proyectos de TI con experiencia práctica en la creación de aplicaciones web responsivas utilizando tecnologías React JS, JavaScript, HTML y CSS, adquirida a través de un bootcamp de desarrollo web. Aporto dos años de experiencia en entornos remotos liderando y gestionando proyectos de desarrollo web, aplicando metodologías ágiles y creando diagramas de flujo de trabajo e historias de usuario con Jira y Visio, respectivamente.",
    about2:
      "Mi especialidad es convertir los requisitos de negocio en historias de usuario efectivas y optimizar productos digitales mediante el análisis de datos y las pruebas de control de calidad. Complemento mi perfil técnico con un año de experiencia como voluntario/a en marketing digital y gestión de campañas con Meta-Business. Además, imparto clases de español a extranjeros a través de plataformas digitales (Preply, iTalki). Mi pensamiento creativo facilita la innovación en procesos, la toma de decisiones basadas en datos y la aportación de perspectivas multidisciplinares.",
    newstitle: "Explorador de Noticias",
    newsdescription:
      "Diseño de sitio web responsivo. Utiliza React, HTML y CSS. La página incluye características como ventanas emergentes, envío de información utilizando componentes de React y metodología BEM para la nomenclatura de clases. También incorpora validación para evitar formularios vacíos o formularios con datos incorrectos. Su objetivo es proporcionar a los usuarios las últimas noticias sobre cualquier tema que deseen. Incluye múltiples rutas y la opción de guardar y eliminar noticias.",
    gallerytitle: "Galería Interactiva",
    gallerydescription:
      "Una aplicación web dinámica construida con HTML, CSS y JavaScript, que presenta un diseño responsive. El proyecto sigue la metodología BEM e implementa elementos interactivos como ventanas emergentes, validaciones de formularios y gestión dinámica de contenido. Los usuarios pueden dar like, expandir, añadir y eliminar imágenes mediante una manipulación fluida del DOM, con clases JavaScript robustas que garantizan interacciones de usuario fluidas y una experiencia web atractiva",
    coffeetitle: "Cafetería",
    cofeeedescription:
      "El proyecto utiliza tecnologías HTML y CSS, con esta última dividida en archivos correspondientes a cada bloque de la página. Cada clase se crea siguiendo la metodología BEM. Se utilizan Flexbox, Grid y media queries para hacer que la página sea responsive, mejorando la experiencia del usuario en diferentes dispositivos con diversos tamaños de pantalla, y considerando que no todos ellos utilizan un cursor.",
    contact:
      "¡Pongámonos en contacto!, puedes comunicarte conmigo a través de mi correo electrónico o Linkedin y estaré encantada de mostrarte cómo puedo agregar valor a tus objetivos con mi trabajo y perspectiva de vida",
  },
};

// Crea un proveedor de contexto para encapsular la lógica
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState("English");

  // Este objeto será el valor del contexto
  const value = {
    language,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
