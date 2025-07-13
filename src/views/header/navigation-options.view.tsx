import type { I_Scrollable } from "../../types/scrollable.type";

type I_NavigationOptionView = {
  scrollToId: (id: I_Scrollable) => void;
};

function NavigationOptionView({ scrollToId }: I_NavigationOptionView) {
  return (
    <div className="flex gap-4">
      <span
        onClick={() => scrollToId("home")}
        className="link-hover pointer underline"
      >
        Accueil
      </span>

      <span>|</span>

      <span
        onClick={() => scrollToId("profil")}
        className="link-hover pointer underline"
      >
        A propos
      </span>

      <span>|</span>

      <span
        onClick={() => scrollToId("stack")}
        className="link-hover pointer underline"
      >
        Compétences
      </span>

      <span>|</span>

      <span
        onClick={() => scrollToId("projects")}
        className="link-hover pointer underline"
      >
        Projets
      </span>

      <span>|</span>

      <span
        onClick={() => scrollToId("contact")}
        className="link-hover pointer underline"
      >
        Me contacter
      </span>
    </div>
  );
}

export { NavigationOptionView };
