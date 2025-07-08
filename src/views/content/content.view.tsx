import { ContactComponent } from "../../components/contact/contact.component";
import { PresentationComponent } from "../../components/presentation/presentation.component";
import { ProfilComponent } from "../../components/profil/profil.component";
import { ProjectComponent } from "../../components/project/project.component";
import { StackComponent } from "../../components/stack/stack.component";

function ContentView() {
  return (
    <div className="flex-1 overflow-y">
      <PresentationComponent />
      <main className="flex column gap-20">
        <ProfilComponent />
        <StackComponent />
        <ProjectComponent />
        <ContactComponent />
      </main>
    </div>
  );
}

export { ContentView };
