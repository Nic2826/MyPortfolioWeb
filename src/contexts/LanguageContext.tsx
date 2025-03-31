// LanguageContext.tsx
import { createContext, useState, ReactNode } from 'react';

// Define los tipos para tus traducciones
interface Translations {
  [key: string]: {
    description: string;
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
  language: 'English',
  setLanguage: () => {},
  translations: {}
});

// Define el tipo para las props del proveedor
interface LanguageProviderProps {
  children: ReactNode;
}

// Crea las traducciones
const translations: Translations = {
  English: {
    description: "2 years of experience in remote environments. Proven track record in optimizing digital products through data analysis and QA testing. Expertise in developing user stories and technical documentation that bridge business needs with user experience. Skilled in streamlining IT processes through detailed workflow mapping and agile methodologies"
  },
  Español: {
    description: "2 años de experiencia en entornos remotos. Historial comprobado en la optimización de productos digitales mediante análisis de datos y pruebas de control de calidad. Experiencia en el desarrollo de historias de usuario y documentación técnica que conectan las necesidades comerciales con la experiencia del usuario. Especializada en la simplificación de procesos de TI mediante mapeo detallado de flujos de trabajo y metodologías ágiles"
  }
};

// Crea un proveedor de contexto para encapsular la lógica
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('English');

  // Este objeto será el valor del contexto
  const value = {
    language,
    setLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}