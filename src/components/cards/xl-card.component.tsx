import type { I_Icon } from "../../types/icon.type";
import { TooltipComponent } from "../tooltip/tooltip.component";
import "./xl-card.css";

type I_XLCardComponent = {
  title: string;
  project_image: string;
  icons: I_Icon[];
  informations: string[];
  description: string;
  link?: string;
};

function XLCardComponent({
  title,
  project_image,
  icons,
  informations,
  description,
  link,
}: I_XLCardComponent) {
  return (
    <div className="project-item appear-content p-8">
      <div className="flex gap-10">
        <img
          className={`project-img ${link ? "scale-hover pointer" : ""}`}
          src={project_image}
          alt="p-image"
          onClick={() => window.open(link,'_blank')} 
        />

        <div className="flex column gap-16 word-wrap">
          {/* CARD INFORMATIONS */}

          <div>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>

          {/* CARD ICONS */}

          <div className="flex jc-center ai-center gap-4">
            {icons.map((icon, index) => (
              <TooltipComponent
                key={index}
                className="icon-container"
                text={icon.text}
              >
                <img src={icon.url} />
              </TooltipComponent>
            ))}
          </div>

          {/* REDIRECTION LINK */}

          {!!link && (
            <span>
              <a className="link-hover" target="_blank" href={link}>
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

export { XLCardComponent };
