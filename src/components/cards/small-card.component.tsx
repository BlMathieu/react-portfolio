import { TooltipComponent } from "../tooltip/tooltip.component";
import type { I_Icon } from "../../types/icon.type";
import "./small-card.css";

type I_SmallCardComponent = {
  title: string;
  card_image: string;
  icons: I_Icon[];
};

function SmallCardComponent({
  title,
  card_image,
  icons,
}: I_SmallCardComponent) {
  return (
    <div className="small-card p-16">
      <div className="flex gap-8">
        <div>
          <img className="card-img" src={card_image} alt="icon" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>

      {/* CARD IMAGES  */}

      <div className="small-card-icons">
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

export { SmallCardComponent };
