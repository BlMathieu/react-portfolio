import type { I_Content } from "../../../types/content.type";
import "./presentation.css";
function PresentationView({ className }: I_Content) {
  return (
    <section
      id="home"
      className={`presentation-content ${className}`}
    >
      <span>
        Étudiant en mastère de développement FullStack au sein de LiveCampus
      </span>
      <span>Je recherche une alternance pour une période de 12 à 24 mois</span>
    </section>
  );
}

export { PresentationView };
