import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./mobile-navigation.css";
import type { I_Scrollable } from "../../types/scrollable.type";

type I_MobileNavigation = {
  scrollToId: (id: I_Scrollable) => void;
};

function MobileNavigationView({ scrollToId }: I_MobileNavigation) {
  const [is_selected, setSelected] = useState<boolean>(false);

  function handleScroll(id: I_Scrollable) {
    scrollToId(id);
    setSelected(false);
  }

  return (
    <>
      <div className="pointer" onClick={() => setSelected(!is_selected)}>
        <GiHamburgerMenu size={30} />
      </div>

      {is_selected && (
        <div className="mobile-navigation slide-down">
          <ul className="flex column p-4">
            <li className="p-4" onClick={() => handleScroll("home")}>Accueil</li>
            <li className="p-4" onClick={() => handleScroll("profil")}>À Propos</li>
            <li className="p-4" onClick={() => handleScroll("projects")}>Projets</li>
            <li className="p-4" onClick={() => handleScroll("contact")}>Me contacter</li>
          </ul>
        </div>
      )}
    </>
  );
}

export { MobileNavigationView };
