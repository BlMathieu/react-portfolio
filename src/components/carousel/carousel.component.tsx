import type { ReactElement } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { DotsComponent } from "../dots/dots.component";

type I_Carousel = {
  children: ReactElement;
  all_elements: string[];
  actual_element: string;
  setElement: (element: string) => void;
};

function CarouselComponent({
  all_elements,
  actual_element,
  setElement,
  children,
}: I_Carousel) {
  function nextElement() {
    const idx_actual_type = all_elements.findIndex((e) => e === actual_element);

    const is_idx_valid =
      idx_actual_type >= 0 && idx_actual_type + 1 < all_elements.length;
    const new_idx_type = is_idx_valid ? idx_actual_type + 1 : 0;

    setElement(all_elements[new_idx_type]);
  }

  function beforeProjectType() {
    const idx_actual_type = all_elements.findIndex((e) => e === actual_element);

    const is_idx_valid = idx_actual_type - 1 >= 0;
    const new_idx_type = is_idx_valid
      ? idx_actual_type - 1
      : all_elements.length - 1;

    setElement(all_elements[new_idx_type]);
  }

  function handleDotClick(index: number) {
    setElement(all_elements[index]);
  }

  return (
    <>
      <div className="flex gap-8 jc-center ai-center">
        <HiChevronLeft
          className="pointer scale-hover"
          onClick={beforeProjectType}
          size={40}
        />
        
        {children}

        <HiChevronRight
          className="pointer scale-hover"
          onClick={nextElement}
          size={40}
        />
      </div>

      <div className="text-center">
        <DotsComponent
          elements={all_elements}
          actual_element={actual_element}
          handleClick={handleDotClick}
        />
      </div>
    </>
  );
}

export { CarouselComponent };
