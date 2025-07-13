import type { I_Content } from "../../../types/content.type";
import type { I_ScrollableComponent } from "../../../types/scrollable.type";
import { ProfilInformation } from "./profil-information";
import { ProfilInterest } from "./profil-interest";
import { ProfilSchools } from "./profil-schools";
import "./profil.css";

function ProfilView({ id, className }: I_ScrollableComponent & I_Content) {
  return (
    <section id={id} className={className}>
      <div className="card flex column">
        <div className="flex gap-16 p-10 jc-center">
          <ProfilInformation />
          <ProfilSchools />
        </div>
        <div className="p-10">
          <ProfilInterest />
        </div>
      </div>
    </section>
  );
}

export { ProfilView };
