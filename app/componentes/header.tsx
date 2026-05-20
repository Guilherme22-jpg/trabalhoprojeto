import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div className="grid gap-4">
          <Link href="/" className="brand-link">
            <span className="brand-mark">FG</span>
            <span className="brand-copy">
              <small>FlowGrid</small>
              <strong>Curriculos</strong>
            </span>
          </Link>

          <div className="header-note">
            <strong>Gestão de currículos</strong>
            <p>Organize perfis de candidatos e acompanhe informações profissionais com clareza.</p>
          </div>
        </div>

        <Nav />

        <div className="header-footer">
          <span>Busca em tempo real</span>
          <span>Formulários claros e validados</span>
        </div>
      </div>
    </header>
  );
}
