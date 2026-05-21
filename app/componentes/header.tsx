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
            <strong>Layout em trilho lateral.</strong>
            <p>A pagina muda bastante a ordem dos blocos.</p>
          </div>
        </div>
        <Nav />
      </div>
    </header>
  );
}
