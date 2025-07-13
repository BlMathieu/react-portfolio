import type { I_Content } from "../../../types/content.type";
import type { I_ScrollableComponent } from "../../../types/scrollable.type";
import { StackCardsView } from "./stack-cards.view";

function StackView({ id, className }: I_ScrollableComponent & I_Content) {
  return (
    <section id={id} className={className}>
      <div className="card flex column jc-center gap-8 p-10">
        <div className="text-center">
          <h3>Mes compétences</h3>
        </div>

        <StackCardsView />
      </div>
    </section>
  );
}

export { StackView };
