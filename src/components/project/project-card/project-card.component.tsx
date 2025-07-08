import type { I_Icon } from "../../../types/icon.type";
import { TooltipComponent } from "../../tooltip/tooltip.component";
import "./project-card.css";

type I_ProjectCardComponent = {
  title: string;
  project_image: string;
  icons: I_Icon[];
  informations: string[];
  description: string;
  link?: string;
};

function ProjectCardComponent({
  title,
  project_image,
  icons,
  informations,
  description,
  link,
}: I_ProjectCardComponent) {
  return (
    <div className="project-item">
      <div className="flex gap-10">
        <img className="project-img" src={project_image} alt="p-image" />

        <div className="flex column gap-16 word-wrap">
          {/* PROJECT INFORMATIONS */}

          <div>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>

          {/* PROJECT STACK IMAGES */}

          <div className="project-stack">
            {icons.map((icon, index) => (
              <TooltipComponent key={index} className="icon-container" text={icon.text}>
                <img src={icon.url} />
              </TooltipComponent>
            ))}
          </div>

          {/* REDIRECTION LINK */}

          {!!link && (
            <span>
              <a target="_blank" href={link}>
                Lien
              </a>
            </span>
          )}
        </div>
      </div>

      {/* INFORMATION LIST */}

      <div className="flex column gap-2">
        {informations.map((information, index) => (
          <div key={index} className="card p-4">
            <p>{information}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProjectCardComponent };
