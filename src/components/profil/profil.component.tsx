import "./profil.css";
import photo from "../../assets/images/photo.jpg";

function calculateYearsOld(born: Date) {
  const now = new Date();
  const born_date = new Date(born);

  let years_old = now.getFullYear() - born_date.getFullYear();

  const mouth = now.getMonth() - born_date.getMonth();
  const day = now.getDate() - born_date.getDate();

  if (mouth < 0 || (mouth === 0 && day < 0)) {
    years_old--;
  }

  return years_old;
}

function ProfilComponent() {
  const born = new Date("2003-01-09");
  const years = calculateYearsOld(born);

  return (
    <section className="flex jc-center">
      <div className="flex card gap-16 p-10 jc-center">
        <ProfilInformation years={years} />
        <Schools />
      </div>
    </section>
  );
}

function ProfilInformation({ years }: { years: number }) {
  return (
    <div className=" flex column jc-evenly">
      <div className="text-center">
        <h3>À propos</h3>
      </div>

      <div className="flex jc-center">
        <img className="profil-image" src={photo} />
      </div>

      <div className="flex column text-center">
        <span>Nom : Blanchet</span>
        <span>Prenom : Mathieu</span>
        <span>Age : {years} ans</span>
        <span>Mobilité : Occitanie</span>
      </div>
    </div>
  );
}

function Schools() {
  return (
    <div className="card p-10 text-center">
      <div className="flex column gap-10">
        <div className="text-center">
          <h3>Scolarité</h3>
        </div>

        <div className="flex gap-16">
          <div className="flex column card p-10">
            <span>Ecole : LiveCampus (Master de développement Full-Stack)</span>
            <span>Année : 2025 - 2027</span>
            <span>Statut : En cours</span>
          </div>

          <div className="flex column card p-10 ">
            <span>Ecole : BUT Informatique (IUT de Montpellier)</span>
            <span>Année : 2021 - 2024</span>
            <span>Statut : Obtenu</span>
          </div>
        </div>
        <div>
          <div className="flex column card p-10">
            <span>Ecole : Lycée Jean Baptiste Dumas (STI2D)</span>
            <span>Année : 2021</span>
            <span>Statut : Obtenu (Mention très bien)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { ProfilComponent };
