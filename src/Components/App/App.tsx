import "./App.css";
import Header from "../Header/Header";
import { LanguageProvider } from "../../contexts/LanguageContext";
import Main from "../Main/Main";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Contact from '../Contact/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Main />
        <About />
        <Cards />
        <Contact/>
      </div>
    </LanguageProvider>
  );
}

export default App;
