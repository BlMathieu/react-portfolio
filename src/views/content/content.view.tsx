import { useEffect, useRef } from "react";
import { PresentationView } from "./presentation/presentation.view";

import { SCROLLABLE_KEYS } from "../../types/scrollable.type";
import { ContactView } from "./contact/contact.component";
import { ProfilView } from "./profil/profil.view";
import { ProjectView } from "./project/project.view";
import { StackView } from "./stack/stack.view";

function ContentView() {
  const container_ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    container_ref.current?.addEventListener("scroll", scrollReveal);
    return () =>
      container_ref.current?.removeEventListener("scroll", scrollReveal);
  }, []);

  return (
    <main id="content-div" ref={container_ref} className="flex-1 overflow-y">
      <PresentationView className="flex column jc-center ai-center text-center appear h-parallax" />
      <ProfilView
        id={"profil"}
        className="flex jc-center hidden h-parallax p-10"
      />
      <StackView
        id={"stack"}
        className="flex column jc-center ai-center hidden h-parallax gap-8"
      />
      <ProjectView id={"projects"} className="hidden h-parallax p-10" />
      <ContactView
        id={"contact"}
        className="flex jc-center ai-center hidden h-parallax"
      />
    </main>
  );
}

function scrollReveal() {
  const elements = SCROLLABLE_KEYS.map((scroll_key) =>
    document.getElementById(scroll_key)
  );

  for (const element of elements) {
    const isBounding =
      element && element?.getBoundingClientRect().top < window.innerHeight;

    if (isBounding && element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("appear-content");
    }
  }
}
export { ContentView };
