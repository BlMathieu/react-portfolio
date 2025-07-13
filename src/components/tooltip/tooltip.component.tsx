import type { ReactElement } from "react";
import "./tooltip.css";

type I_Tooltip = {
  children?: ReactElement;
  className?: string;
  text: string;
};

function TooltipComponent({ text, children, className }: I_Tooltip) {
  return (
    <div className={`tooltip ${className}`}>
      {children}

      <div className="tooltip-text p-2">
        <p>{text}</p>
      </div>
    </div>
  );
}

export { TooltipComponent };
