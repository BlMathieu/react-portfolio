import type { I_Content } from "../../../types/content.type";
import type { I_ScrollableComponent } from "../../../types/scrollable.type";

function ContactView({ id, className }: I_ScrollableComponent & I_Content) {
  return (
    <section id={id} className={className}>
      <div className="card p-10 flex column gap-8 text-center">
        <h3>Me contacter</h3>
        <span>Email : blanchet.mathieu30@gmail.com</span>
        <span>Mobile : 07 67 46 85 21</span>
      </div>
    </section>
  );
}

export { ContactView };
