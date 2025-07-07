function HeaderView() {
  return (
    <nav className="pf-menu flex jc-between p-4">
      <div>
        <span>Portfolio</span>
      </div>
      <div>
        <span>Mathieu Blanchet | Développeur full-stack</span>
      </div>

      <div className="flex gap-4">
        <span>Informations</span>
        <span>|</span>
        <span>Projets</span>
        <span>|</span>
        <span>Me contacter</span>
      </div>
    </nav>
  );
}

export { HeaderView };
