import "./stack-card.css";

type I_StackCardComponent = {
  title: string;
  images: string[];
  card_image: string;
};

function StackCardComponent({
  title,
  card_image,
  images,
}: I_StackCardComponent) {
  const image_cards = images.map((i, index) => (
    <div key={index}>
      <img src={i} />
    </div>
  ));

  return (
    <div className="stack-card">
      <div className="flex gap-8">
        <div>
          <img src={card_image} alt="img-card" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="stack-tech">{image_cards}</div>
    </div>
  );
}

export { StackCardComponent };
