import { GoDot, GoDotFill } from "react-icons/go";

type I_DotsComponents = {
  handleClick: (index: number) => void;
  elements: string[];
  actual_element: string;
};

function DotsComponent({
  elements,
  actual_element,
  handleClick,
}: I_DotsComponents) {
  return (
    <>
      {elements.map((_e, index) => {
        const selected_idx = elements.findIndex((t) => t === actual_element);

        if (index === selected_idx) return <GoDotFill size={35} key={index} />;

        return (
          <GoDot
            onClick={() => handleClick(index)}
            key={index}
            className="pointer scale-hover"
            size={35}
          />
        );
      })}
    </>
  );
}

export { DotsComponent };
