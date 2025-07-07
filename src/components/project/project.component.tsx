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
import sql from "../../assets/images/technologies/sql.svg";
import java from "../../assets/images/technologies/java.svg";
import javafx from "../../assets/images/technologies/JavaFX.png";
import nestjs from "../../assets/images/technologies/nestjs.svg";
import ionic from "../../assets/images/technologies/ionic.png";
import nuxt from "../../assets/images/technologies/nuxt.svg";
import php from "../../assets/images/technologies/php.svg";
import cassandra from "../../assets/images/technologies/cassandra.svg";
import nodejs from "../../assets/images/technologies/nodejs.svg";
import langageR from "../../assets/images/technologies/langageR.svg";

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
    <section>
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
              stack_images={[typescript, react, sql]}
              description={"Gestionnaire de mots de passe"}
            />
            <ProjectCardComponent
              title={"AdlessMusicBroadcast"}
              project_image={amb}
              stack_images={[ionic, vue, nestjs]}
              description={"Service de streaming audio/video"}
              link="https://mbvps.duckdns.org/amb/#/home"
            />
            <ProjectCardComponent
              title={"NuxtFileManager"}
              project_image={filemangager}
              stack_images={[nuxt]}
              description={"Interface de gestion de fichiers dans le cloud"}
              link="https://github.com/BlMathieu/NuxtFileServerManager#"
            />
          </>
        )}

        {project_type === "Professionnel" && (
          <>
            <ProjectCardComponent
              title={"DataDiag"}
              project_image={datadiag}
              stack_images={[php, sql]}
              description={"Outil de gestion d'échantillons biologiques"}
            />
            <ProjectCardComponent
              title={"Diagbiosis"}
              project_image={diagbiosis}
              stack_images={[typescript, nodejs, cassandra, langageR]}
              description={
                "Outil d'analyse/visualisation de données issue d'échantillons biologiques"
              }
              link="https://diagbiosis.com"
            />
          </>
        )}
        {project_type === "Scolaire" && (
          <>
            <div className="flex gap-6 column">
              <ProjectCardComponent
                title="CG-Games"
                project_image={cggames}
                stack_images={[java, javafx, sql]}
                description={
                  "Projet de BUT, création d'un launcher de jeux vidéo"
                }
                link="https://github.com/SAE-IAMSI/cg-games-project"
              />
              <ProjectCardComponent
                title="Casse-Briques"
                project_image={brickbreaker}
                stack_images={[java, javafx, sql]}
                description={"Projet de BUT, création d'un jeu vidéo rétro"}
                link="https://github.com/BlMathieu/BrickBreaker/tree/master"
              />
            </div>
            <div className="flex column gap-6">
              <ProjectCardComponent
                title="Prehispong"
                project_image={prehispong}
                stack_images={[java, javafx, sql]}
                description={"Projet de BUT, création d'un jeu vidéo rétro"}
              />
              <ProjectCardComponent
                title="MovieFinder"
                project_image={""}
                stack_images={[typescript, nestjs]}
                description={
                  "Projet de Bac+4, création d'un moteur de recherche de film"
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// EXPORTS

export { ProjectComponent };
