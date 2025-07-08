function HeaderView() {
  return (
    <nav className="pf-menu flex jc-between p-4">
      <div>
        <span>Portfolio | Mathieu Blanchet | Développeur full-stack</span>
      </div>

      <div className="flex gap-4">
        <span><a href="#informations">Informations</a></span>
        <span>|</span>
        <span><a href="#projets">Projets</a></span>
        <span>|</span>
        <span><a href="#contact">Me contacter</a></span>
      </div>
    </nav>
  );
}

export { HeaderView };
