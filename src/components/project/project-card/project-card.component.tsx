import "./project-card.css";

type I_ProjectCardComponent = {
  title: string;
  project_image: string;
  stack_images: string[];
  description: string;
  link?: string;
};
function ProjectCardComponent({
  title,
  project_image,
  stack_images,
  description,
  link,
}: I_ProjectCardComponent) {
  const stacks = stack_images.map((si, index) => (
    <div key={index}>
      <img src={si} />
    </div>
  ));

  return (
    <div className="project-item">
      <div className="flex gap-10">
        <img className="project-img" src={project_image} alt="p-image" />
        <div className="flex column gap-16 word-wrap">
          <div>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
          <div className="project-stack">{stacks}</div>

          {!!link && (
            <span>
              <a target="_blank" href={link}>
                Lien
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProjectCardComponent };
