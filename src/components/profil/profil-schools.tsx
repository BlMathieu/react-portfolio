// TYPES

type I_SchoolStatus = "En cours" | "Obtenu";
type I_School = {
  diplome: string;
  duration: string;
  status: I_SchoolStatus;
  mention?: string;
};

// CONSTANTES

const schools_list: I_School[] = [
  {
    diplome: "Master de développment web Full-Stack (LiveCampus)",
    duration: "2025 - 2027",
    status: "En cours",
  },
  {
    diplome: "BUT Informatique (IUT de Montpellier)",
    duration: "2021 - 2024",
    status: "Obtenu",
  },
  {
    diplome: "BAC STI2D (Lycée Jean Baptiste Dumas Alès)",
    duration: "2021",
    status: "Obtenu",
    mention: "Très bien",
  },
];

// DOM

const schools = schools_list.map((s, index) => {
  return (
    <div key={index} className="flex column card p-10">
      <p>
        <span className="underline">Diplome</span> : {s.diplome}
      </p>
      <p>
        <span className="underline">Année</span> : {s.duration}
      </p>
      <p>
        <span className="underline">Statut</span> :{" "}
        <span className={s.status === "Obtenu" ? "green" : "orange"}>
          {s.status}
        </span>
      </p>

      {!!s.mention && (
        <p>
          <span className="underline">Mention</span> : {s.mention}
        </p>
      )}
    </div>
  );
});

function ProfilSchools() {
  return (
    <div className="card p-10">
      <div className="flex column gap-10">
        <div className="text-center">
          <h3>Scolarité</h3>
        </div>
        {schools}
      </div>
    </div>
  );
}

export { ProfilSchools };
