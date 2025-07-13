import { useState } from "react";
import type { I_ScrollableComponent } from "../../../types/scrollable.type";
import { ProjectCardsView } from "./project-cards.view";
import { CarouselComponent } from "../../../components/carousel/carousel.component";
import type { I_Content } from "../../../types/content.type";

// TYPES

type I_Project = "Scolaire" | "Personnel" | "Professionnel";

// CONSTANTES

const project_types: I_Project[] = ["Personnel", "Professionnel", "Scolaire"];

// DOM

function ProjectView({ id, className }: I_ScrollableComponent & I_Content) {
  const [project_type, setProjectType] = useState<string>("Personnel");

  return (
    <section id={id} className={className}>
      <div className="card flex column jc-center p-8">
        <CarouselComponent
          all_elements={project_types}
          actual_element={project_type}
          setElement={setProjectType}
        >
          <ProjectCardsView project_type={project_type} />
        </CarouselComponent>
      </div>
    </section>
  );
}

// EXPORTS

export { ProjectView };
