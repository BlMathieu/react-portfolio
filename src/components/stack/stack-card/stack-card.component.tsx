import type { I_Icon } from "../../../types/icon.type";
import { TooltipComponent } from "../../tooltip/tooltip.component";
import "./stack-card.css";

type I_StackCardComponent = {
  title: string;
  card_image: string;
  icons: I_Icon[];
};

function StackCardComponent({
  title,
  card_image,
  icons,
}: I_StackCardComponent) {
  return (
    <div className="stack-card">
      {/* STACK INFORMATION */}

      <div className="flex gap-8">
        <div>
          <img className="stack-img" src={card_image} alt="img-card" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>

      {/* STACK IMAGES  */}

      <div className="stack-tech">
        {icons.map((icon, index) => (
          <TooltipComponent
            className="icon-container"
            key={index}
            text={icon.text}
          >
            <img src={icon.url} />
          </TooltipComponent>
        ))}
      </div>
    </div>
  );
}

export { StackCardComponent };
