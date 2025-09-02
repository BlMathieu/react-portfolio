import { CgScreen } from "react-icons/cg";
import { GiBlackBelt } from "react-icons/gi";
import { IoGameController, IoHardwareChipSharp } from "react-icons/io5";

function ProfilInterest() {
  return (
    <div className="card p-10">
      <div className="text-center">
        <h3>Mes centres d'intérêts</h3>
      </div>

      <div className="flex column gap-8 p-6">
        <div className="card flex ai-center gap-6 p-6">
          <IoHardwareChipSharp />
          <p>Le Hardware</p>
        </div>
        <div className="card flex ai-center gap-6 p-6">
          <IoGameController />
          <p>Les jeux vidéos (rétro - fastfps - moba - mmorpg ...)</p>
        </div>
        <div className="card flex ai-center gap-6 p-6">
          <GiBlackBelt />
          <p>Les sports de combats (8 ans de pratique de Taekwondo)</p>
        </div>
        <div className="card flex ai-center gap-6 p-6">
          <CgScreen />
          <p>Mangas & Animations 2D/3D</p>
        </div>
      </div>
    </div>
  );
}

export { ProfilInterest };
