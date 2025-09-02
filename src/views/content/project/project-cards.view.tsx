import amb from "../../../assets/images/projects/amb.png";
import keyguard from "../../../assets/images/projects/keyguard.png";
import { XLCardComponent } from "../../../components/cards/xl-card.component";

import brickbreaker from "../../../assets/images/projects/casse-brique.png";
import cggames from "../../../assets/images/projects/cg-games.png";
import filemangager from "../../../assets/images/projects/filemanager.png";
import prehispong from "../../../assets/images/projects/prehispong.png";

import cassandra from "../../../assets/images/technologies/cassandra.svg";
import ionic from "../../../assets/images/technologies/ionic.png";
import java from "../../../assets/images/technologies/java.svg";
import javafx from "../../../assets/images/technologies/JavaFX.png";
import langageR from "../../../assets/images/technologies/langageR.svg";
import mariadb from "../../../assets/images/technologies/mariadb.svg";
import nestjs from "../../../assets/images/technologies/nestjs.svg";
import nodejs from "../../../assets/images/technologies/nodejs.svg";
import nuxt from "../../../assets/images/technologies/nuxt.svg";
import oracle from "../../../assets/images/technologies/oracle.png";
import php from "../../../assets/images/technologies/php.svg";
import postgres from "../../../assets/images/technologies/postgres.png";
import react from "../../../assets/images/technologies/react.svg";
import typescript from "../../../assets/images/technologies/typescript.svg";
import vue from "../../../assets/images/technologies/vue.svg";

import datadiag from "../../../assets/images/projects/datadiag.png";
import diagbiosis from "../../../assets/images/projects/diagbiosis.png";

type I_ProjectCards = {
  project_type: string;
};

function ProjectCardsView({ project_type }: I_ProjectCards) {
  return (
    <div className="flex gap-8 column text-center">
      <h3>Mes projets : {project_type}</h3>
      <div className="flex jc-center gap-8 wrap">
        {project_type === "Personnel" && (
          <>
            <XLCardComponent
              title={"Keyguard"}
              project_image={keyguard}
              icons={[
                { url: react, text: "React" },
                { url: typescript, text: "Typescript" },
                { url: nestjs, text: "NestJs" },
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
            <XLCardComponent
              title={"AdlessMusicBroadcast"}
              project_image={amb}
              icons={[
                { url: ionic, text: "Ionic" },
                { url: typescript, text: "Typescript" },
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
            <XLCardComponent
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
            <XLCardComponent
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
            <XLCardComponent
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
            <XLCardComponent
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
            <XLCardComponent
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
            <XLCardComponent
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
          </>
        )}
      </div>
    </div>
  );
}

export { ProjectCardsView };
