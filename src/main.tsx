import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeaderView } from "./views/header/header.view.tsx";
import { ThreeCanvasView } from "./views/three-canvas/three-canvas.view.tsx";
import "./assets/css/global.css";
import { ContentView } from "./views/content/content.view.tsx";
import { FooterView } from "./views/footer/footer.view.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="content-section">
      <HeaderView />
      <ContentView />
      <FooterView />
    </section>

    <ThreeCanvasView />
  </StrictMode>
);
