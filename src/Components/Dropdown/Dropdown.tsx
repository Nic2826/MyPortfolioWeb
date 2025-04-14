import { useState, useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function DropdownButton() {
  const [dropdown, setDropdown] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  }

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    setDropdown(false);
  }

  return (
    <Dropdown
      className="navbar__dropdown navbar__item"
      isOpen={dropdown}
      toggle={handleDropdown}
      direction="down"
    >
      <DropdownToggle caret>
        {language}
      </DropdownToggle>

      <DropdownMenu className="navbar__dropdown-menu" align="end">
        <DropdownItem onClick={() => changeLanguage("English")}>
          English
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("Español")}>
          Español
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
