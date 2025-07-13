import { useEffect, useState } from "react";
import type { I_Scrollable } from "../../types/scrollable.type";
import { NavigationOptionView } from "./navigation-options.view";
import { MobileNavigationView } from "./mobile-navigation.view";

const MOBILE_WIDTH = 800;

function HeaderView() {
  const [is_mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    setMobile(window.innerWidth < MOBILE_WIDTH);

    const handleResize = () => {
      setMobile(window.innerWidth < MOBILE_WIDTH);
    };

    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="pf-menu flex jc-between p-4 ai-center relative">
      <div>
        <span>Portfolio | Mathieu Blanchet</span>
      </div>

      {is_mobile ? (
        <MobileNavigationView scrollToId={scrollToId} />
      ) : (
        <NavigationOptionView scrollToId={scrollToId} />
      )}
    </nav>
  );
}

function scrollToId(id: I_Scrollable) {
  const doc = document.getElementById(id);
  if (doc) doc.scrollIntoView({ behavior: "smooth" });
}

export { HeaderView };
