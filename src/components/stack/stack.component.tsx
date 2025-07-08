import { StackCardComponent } from "./stack-card/stack-card.component";

import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.png";
import langages from "../../assets/images/langages.png";
import tools from "../../assets/images/tools.png";
import other from "../../assets/images/other.png";

import vue from "../../assets/images/technologies/vue.svg";
import react from "../../assets/images/technologies/react.svg";

import nestjs from "../../assets/images/technologies/nestjs.svg";
import nodejs from "../../assets/images/technologies/nodejs.svg";
import symfony from "../../assets/images/technologies/symfony.svg";

import docker from "../../assets/images/technologies/docker.svg";
import github from "../../assets/images/technologies/github.svg";

import typescript from "../../assets/images/technologies/typescript.svg";
import java from "../../assets/images/technologies/java.svg";
import php from "../../assets/images/technologies/php.svg";
import cpp from "../../assets/images/technologies/c++.png";
import python from "../../assets/images/technologies/python.svg";

import cassandra from "../../assets/images/technologies/cassandra.svg";
import sql from "../../assets/images/technologies/sql.svg";
import mongodb from "../../assets/images/technologies/mongodb.svg";

import javafx from "../../assets/images/technologies/JavaFX.png";
import sfml from "../../assets/images/technologies/sfml.png";
import raylib from "../../assets/images/technologies/raylib.png";
import nuxt from "../../assets/images/technologies/nuxt.svg";
import tauri from "../../assets/images/technologies/tauri.svg";

function StackComponent() {
  return (
    <section className="flex column gap-16">
      <div className="text-center">
        <h3>Mes compétences</h3>
      </div>

      <StackCards />
    </section>
  );
}

function StackCards() {
  return (
    <div className="flex column jc-center ai-center gap-8">
      <div className="flex wrap gap-8 jc-center">
        <StackCardComponent
          title="Frontend"
          card_image={frontend}
          icons={[
            { url: typescript, text: "Typescript" },
            { url: vue, text: "VueJs" },
            { url: react, text: "React" },
          ]}
        />
        <StackCardComponent
          title="Backend"
          card_image={backend}
          icons={[
            { url: nodejs, text: "NodeJs" },
            { url: nestjs, text: "NestJs" },
            { url: symfony, text: "Symfony" },
            { url: sql, text: "Base de données relationnel" },
            { url: mongodb, text: "MongoDB" },
            { url: cassandra, text: "CassandraDB" },
          ]}
        />
        <StackCardComponent
          title="Langages"
          card_image={langages}
          icons={[
            { url: typescript, text: "Typescript" },
            { url: java, text: "Java" },
            { url: php, text: "PHP" },
            { url: cpp, text: "C++" },
            { url: python, text: "Python" },
          ]}
        />
      </div>

      <div className="flex wrap gap-8 jc-center">
        <StackCardComponent
          title="Outils"
          card_image={tools}
          icons={[
            { url: github, text: "GitHub" },
            { url: docker, text: "Docker" },
          ]}
        />
        <StackCardComponent
          title="Autres"
          card_image={other}
          icons={[
            { url: nuxt, text: "Nuxt" },
            { url: tauri, text: "Tauri" },
            { url: javafx, text: "JavaFX" },
            { url: sfml, text: "SFML" },
            { url: raylib, text: "Raylib" },
          ]}
        />
      </div>
    </div>
  );
}

export { StackComponent };
