import photo from "../../../assets/images/photo.jpg";
import { calculateYearsOld } from "../../../utils/years-old.utils";

function ProfilInformation() {
  const born = new Date("2003-01-09");
  const years = calculateYearsOld(born);

  return (
    <div className="card p-10 flex column jc-evenly">
      <div className="text-center">
        <h3>À propos</h3>
      </div>

      <div className="flex jc-center">
        <img className="profil-image" src={photo} />
      </div>

      <div className="flex column gap-4">
        <p>
          <span className="underline">Nom</span> : Blanchet
        </p>
        <p>
          <span className="underline">Prenom</span> : Mathieu
        </p>
        <p>
          <span className="underline">Age</span> : {years} ans
        </p>
        <p>
          <span className="underline">Mobilité</span> : France
        </p>
      </div>
    </div>
  );
}

export { ProfilInformation };
