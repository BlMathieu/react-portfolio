import { FaBuilding } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDescription, MdOutlineSubtitles } from "react-icons/md";
import { PiCity } from "react-icons/pi";
import { SiFramework } from "react-icons/si";

// TYPES

type I_ExperienceType = "Stage" | "Alternance";
type I_Experience = {
  type: I_ExperienceType;
  company: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  linked_projects?: string[];
};

// CONSTANTES

const experiences: I_Experience[] = [
  {
    type: "Stage",
    company: "Diag2Tech",
    title: "Développeur full-stack",
    duration: "2023 | 12 semaines",
    location: "France - Montpellier",
    description:
      "Création d'une application web permettant la recherche et le stockage d'échantillons issue de patients atteints d'hémopathie maligne.",
    linked_projects: ["DataDiag"],
  },
  {
    type: "Alternance",
    title: "Bioinformaticien / Développeur full-stack",
    duration: "2023 - 2024 | 1 an",
    company: "Diag2Tech",
    location: "France - Montpellier",
    description:
      "Création d'une application web permettant l'automatisation d'analyses et la visualisations de données bioinformatiques",
    linked_projects: ["DiagBIOsis"],
  },
  {
    type: "Alternance",
    title: "Développeur front-end",
    location: "France - Bordeaux",
    duration: "2025 | 2.5 mois",
    company: "Ingefox",
    description:
      "Développement d'interfaces de logiciels fait sûr-mesure en React",
  },
];

const Experiences = experiences.map((e, index) => {
  return (
    <div className="card p-10 flex column gap-4" key={index}>
      <p className="flex ai-center gap-4">
        <MdOutlineSubtitles />
        <span className="underline">Titre :</span>{" "}
        <span>
          {e.type} - {e.title}
        </span>
      </p>
      <p className="flex ai-center gap-4">
        <FaBuilding />
        <span className="underline">Entreprise :</span> <span>{e.company}</span>
      </p>
      <p className="flex ai-center gap-4">
        <IoMdTime />
        <span className="underline">Durée : </span> <span>{e.duration}</span>
      </p>
      <p className="flex ai-center gap-4">
        <PiCity />
        <span className="underline">Ville :</span> <span>{e.location}</span>
      </p>
      <p className="flex ai-center gap-4">
        <MdOutlineDescription />
        <div>
          <span className="underline">Description :</span>{" "}
          <span>{e.description}</span>
        </div>
      </p>
      {e.linked_projects && (
        <p className="flex ai-center gap-4">
          <SiFramework />
          <span className="underline">Projets liées :</span>{" "}
          <span>{e.linked_projects}</span>
        </p>
      )}
    </div>
  );
});

// DOM

export function ProfilExperience() {
  return (
    <div className="card p-10 flex column gap-8">
      <div className="text-center">
        <h3>Expériences</h3>
      </div>
      {Experiences}
    </div>
  );
}
