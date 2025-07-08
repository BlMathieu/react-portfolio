import { ProfilInformation } from "./profil-information";
import { ProfilInterest } from "./profil-interest";
import { ProfilSchools } from "./profil-schools";
import "./profil.css";

function ProfilComponent() {
  return (
    <section id="informations" className="flex jc-center">
      <div className="card">
        <div className="flex gap-16 p-10 jc-center">
          <ProfilInformation />
          <ProfilSchools />
        </div>
        <ProfilInterest />
      </div>
    </section>
  );
}

export { ProfilComponent };
