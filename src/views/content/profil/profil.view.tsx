import type { I_Content } from "../../../types/content.type";
import type { I_ScrollableComponent } from "../../../types/scrollable.type";
import { ProfilExperience } from "./profil-experience";
import { ProfilInformation } from "./profil-information";
import { ProfilInterest } from "./profil-interest";
import { ProfilSchools } from "./profil-schools";
import "./profil.css";

function ProfilView({ id, className }: I_ScrollableComponent & I_Content) {
  return (
    <section id={id} className={className}>
      <div className="flex column">
        <div className="p-10 ">
          <div className="flex card gap-16 jc-center p-10">
            <ProfilInformation />
            <ProfilSchools />
          </div>
        </div>

        <div className="p-10">
          <ProfilExperience />
        </div>

        <div className="p-10">
          <ProfilInterest />
        </div>
      </div>
    </section>
  );
}

export { ProfilView };
