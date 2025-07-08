import { useState, type ReactElement } from "react";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

import keyguard from "../../assets/images/projects/keyguard.png";
import amb from "../../assets/images/projects/amb.png";

import brickbreaker from "../../assets/images/projects/casse-brique.png";
import cggames from "../../assets/images/projects/cg-games.png";
import prehispong from "../../assets/images/projects/prehispong.png";
import filemangager from "../../assets/images/projects/filemanager.png";

import vue from "../../assets/images/technologies/vue.svg";
import react from "../../assets/images/technologies/react.svg";
import typescript from "../../assets/images/technologies/typescript.svg";
import java from "../../assets/images/technologies/java.svg";
import javafx from "../../assets/images/technologies/JavaFX.png";
import nestjs from "../../assets/images/technologies/nestjs.svg";
import ionic from "../../assets/images/technologies/ionic.png";
import nuxt from "../../assets/images/technologies/nuxt.svg";
import php from "../../assets/images/technologies/php.svg";
import nodejs from "../../assets/images/technologies/nodejs.svg";
import langageR from "../../assets/images/technologies/langageR.svg";
import mariadb from "../../assets/images/technologies/mariadb.svg";
import oracle from "../../assets/images/technologies/oracle.png";
import postgres from "../../assets/images/technologies/postgres.png";
import cassandra from "../../assets/images/technologies/cassandra.svg";

import diagbiosis from "../../assets/images/projects/diagbiosis.png";
import datadiag from "../../assets/images/projects/datadiag.png";

// TYPES

type I_Project = "Scolaire" | "Personnel" | "Professionnel";
type I_ProjectCards = {
  project_type: string;
};

// CONSTANTES

const types: I_Project[] = ["Personnel", "Professionnel", "Scolaire"];

// DOM

function ProjectComponent() {
  // REACT STATES
  const [project_type, setProjectType] = useState<I_Project>("Personnel");

  // DOTS
  const dots = types.map((_i, index) => {
    const selected_idx = types.findIndex((t) => t === project_type);
    if (index === selected_idx) return <GoDotFill size={25} key={index} />;
    return (
      <GoDot
        onClick={() => setProjectType(types[index])}
        key={index}
        className="pointer"
        size={25}
      />
    );
  });

  // FUNCTIONS
  function nextProjectType() {
    const idx_actual_type = types.findIndex((s) => s === project_type);

    const is_idx_valid =
      idx_actual_type >= 0 && idx_actual_type + 1 < types.length;
    const new_idx_type = is_idx_valid ? idx_actual_type + 1 : 0;

    setProjectType(types[new_idx_type]);
  }

  function beforeProjectType() {
    const idx_actual_type = types.findIndex((s) => s === project_type);

    const is_idx_valid = idx_actual_type - 1 >= 0;
    const new_idx_type = is_idx_valid ? idx_actual_type - 1 : types.length - 1;

    setProjectType(types[new_idx_type]);
  }

  return (
    <section id="projects">
      <div className="flex jc-center ai-center">
        <div>
          <HiChevronLeft
            className="pointer"
            onClick={beforeProjectType}
            size={40}
          />
        </div>

        <ProjectCards project_type={project_type} />

        <div>
          <HiChevronRight
            className="pointer"
            onClick={nextProjectType}
            size={40}
          />
        </div>
      </div>

      <div className="text-center">{dots}</div>
    </section>
  );
}

function ProjectCards({ project_type }: I_ProjectCards): ReactElement {
  return (
    <div className="flex column gap-8 text-center">
      <h3>Mes projets : {project_type}</h3>

      <div className="flex jc-center gap-8 wrap">
        {project_type === "Personnel" && (
          <>
            <ProjectCardComponent
              title={"Keyguard"}
              project_image={keyguard}
              icons={[
                { url: typescript, text: "Typescript" },
                { url: react, text: "React" },
                { url: postgres, text: "Postgres" },
              ]}
              description={"Gestionnaire de mots de passe"}
              informations={[
                "Principe du Zéro-Knowledge",
                "Gestion de comptes utilisateur",
                "Hash des mots de passe avec BCrypt",
                "Dérivation de clés avec PBKDF2",
                "Chiffrement des données avec AES-GCM",
                "Déploiement sur mon VPS avec Docker",
              ]}
            />
            <ProjectCardComponent
              title={"AdlessMusicBroadcast"}
              project_image={amb}
              icons={[
                { url: ionic, text: "Ionic" },
                { url: vue, text: "VueJs" },
                { url: nestjs, text: "NestJs" },
              ]}
              description={"Service de streaming audio/video"}
              informations={[
                "Récupération des informations Youtube & Soundcloud",
                "Utilisation de YTDLP pour récupéré les flux audio/video",
                "Crossplatform Web/Android avec Ionic",
                "Déploiement sur mon VPS avec Docker",
              ]}
              link="https://mbvps.duckdns.org/amb/#/home"
            />
            <ProjectCardComponent
              title={"NuxtFileManager"}
              project_image={filemangager}
              icons={[{ url: nuxt, text: "Nuxt" }]}
              description={"Interface de gestion de fichiers dans le cloud"}
              link="https://github.com/BlMathieu/NuxtFileServerManager#"
              informations={[
                "Récupération des dossiers et fichiers avec Nodejs FS",
                "Sécurisation des endpoints",
                "Utilisation de web-socket pour la gestion des backup",
                "Lecture de fichiers textes, audio, video, pdf et images",
                "Écriture de fichiers textes",
                "Création de nouveaux fichiers et dossiers",
              ]}
            />
          </>
        )}

        {project_type === "Professionnel" && (
          <>
            <ProjectCardComponent
              title={"DataDiag (Stage Diag2Tech)"}
              project_image={datadiag}
              icons={[
                { url: php, text: "PHP" },
                { url: mariadb, text: "MariaDB" },
              ]}
              description={"Outil de gestion d'échantillons biologiques"}
              informations={[
                "Conception d'une base de données relationnel",
                "Création d'une API avec PHP",
                "Création d'un frontend avec Javascript",
                "Création d'un module d'importation de données par CSV",
                "Création d'un module permettant la modification du schéma des tables sans connaissance du SQL",
                "Gestion de comptes utilisateur et de permissions",
                "Déploiement du logiciel sur le NAS de Diag2Tech",
              ]}
            />
            <ProjectCardComponent
              title={"Diagbiosis (Alternance Diag2Tech)"}
              project_image={diagbiosis}
              icons={[
                { url: vue, text: "VueJs" },
                { url: typescript, text: "Typescript" },
                { url: nodejs, text: "NodeJs" },
                { url: cassandra, text: "CassandraDB" },
                { url: langageR, text: "Langage R" },
              ]}
              description={
                "Outil d'analyse/visualisation de données issue d'échantillons biologiques"
              }
              informations={[
                "Conception du frontend avec Vuejs",
                "Conception du backend avec ExpressJS",
                "Conception d'une base de données avec CassandraDB",
                "Création d'un wrapper Nodejs/R",
                "Création de scripts d'analyses et de visualisation avec R",
                "Création d'un module d'importation de données par CSV",
                "Création des modules : Analyse d'expression | Analyse de survie | Analyse différentielle | Analyse en composantes principales",
                "Création de tests unitaires avec Jest",
                "Intégration de SonarQube",
                "Déploiement du projet sur le VPS de l'entreprise Diag2Tech",
                "Présentation du projet à JOBIM 2024",
              ]}
              link="https://diagbiosis.com"
            />
          </>
        )}
        {project_type === "Scolaire" && (
          <>
            <ProjectCardComponent
              title="CG-Games"
              project_image={cggames}
              icons={[
                { url: java, text: "Java" },
                { url: javafx, text: "JavaFX" },
                { url: oracle, text: "Oracle" },
              ]}
              description={
                "Projet de BUT, création d'un launcher de jeux vidéo"
              }
              informations={[
                "Intégration de jeux à l'interieur du launcher CGG-Games développé en classe entière",
                "Gestion des statistiques entre chaque jeux",
                "Création de tournois",
                "Gestion de comptes utilisateurs",
                "Projets de groupe (Méthode SCRUM)",
              ]}
              link="https://github.com/SAE-IAMSI/cg-games-project"
            />
            <ProjectCardComponent
              title="Casse-Briques"
              project_image={brickbreaker}
              icons={[
                { url: java, text: "Java" },
                { url: javafx, text: "JavaFX" },
                { url: oracle, text: "Oracle" },
              ]}
              description={"Projet de BUT, création d'un jeu vidéo rétro"}
              informations={[
                "Création d'un jeux vidéo avec Java et JavaFX",
                "Gestion de comptes utilisateurs",
                "Projets de groupe (Méthode SCRUM)",
                "Architecture MVC",
              ]}
              link="https://github.com/BlMathieu/BrickBreaker/tree/master"
            />
            <ProjectCardComponent
              title="Prehispong"
              project_image={prehispong}
              icons={[
                { url: java, text: "Java" },
                { url: javafx, text: "JavaFX" },
                { url: oracle, text: "Oracle" },
              ]}
              description={"Projet de BUT, création d'un jeu vidéo rétro"}
              informations={[
                "Création d'un jeux vidéo avec Java et JavaFX",
                "Gestion de comptes utilisateurs",
                "Projets de groupe (Méthode SCRUM)",
                "Architecture MVC",
              ]}
            />
            <ProjectCardComponent
              title="MovieFinder"
              project_image={""}
              icons={[
                { url: typescript, text: "Typescript" },
                { url: nestjs, text: "NestJs" },
              ]}
              description={
                "Projet de Bac+4, création d'un moteur de recherche de film"
              }
              informations={[
                "Utilisation des API open weather et dbmovie",
                "Géolocalisation de l'utilisateur",
              ]}
            />
          </>
        )}
      </div>
    </div>
  );
}

// EXPORTS

export { ProjectComponent };
