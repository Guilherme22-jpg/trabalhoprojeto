import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiLayers, FiTarget } from "react-icons/fi";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />

      <div className="main-pane">
        <main className="page-wrap">
          <section className="hero-shell">
            <div className="hero-grid">
              <div className="hero-story">
                <article className="hero-primary">
                  <span className="eyebrow">Gestão de currículos</span>
                  <h1 className="hero-title">Cadastro e administração de currículos em um único painel.</h1>
                  <p className="soft-copy mt-5 text-base sm:text-lg">
                    Cadastre candidatos, acompanhe o histórico profissional e acesse perfis completos com facilidade.
                  </p>
                </article>

                <article className="hero-panel">
                  <span className="eyebrow">
                    <FiTarget />
                    Objetivo
                  </span>
                  <p className="body-copy mt-4">
                    Simplificar o cadastro e a consulta de currículos com uma interface clara e fácil de usar.
                  </p>
                </article>
              </div>

              <div className="hero-cta-block">
                <div>
                  <span className="eyebrow">Acoes principais</span>
                  <div className="hero-actions mt-4">
                    <Link href="/sistema/paginas/curriculos/novo" className="btn-primary">
                      Cadastrar currículo
                      <FiArrowRight />
                    </Link>
                    <Link href="/sistema/paginas/curriculos" className="btn-secondary">
                      Ver currículos
                    </Link>
                  </div>
                </div>

                <div className="hero-mini-grid">
                  <div className="mini-card">
                    <FiCheckCircle />
                    <strong className="mt-3 block">Cadastro completo</strong>
                    <p className="body-copy m-0 mt-2 text-sm">Formulários claros e validados para cada currículo.</p>
                  </div>
                  <div className="mini-card">
                    <FiLayers />
                    <strong className="mt-3 block">Navegação clara</strong>
                    <p className="body-copy m-0 mt-2 text-sm">Ações e informações distribuídas para leitura simples.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stats mt-4">
              <div className="stats-grid">
                <article className="metric-card">
                  <span className="eyebrow">Tecnologia</span>
                  <div className="hero-stat-value">100%</div>
                  <p className="body-copy m-0 mt-2 text-sm">Construído com tecnologias modernas para uma interface responsiva.</p>
                </article>
                <article className="metric-card">
                  <span className="eyebrow">Funções</span>
                  <div className="hero-stat-value">4</div>
                  <p className="body-copy m-0 mt-2 text-sm">Cadastro, busca, visualização de detalhes e gestão de perfis.</p>
                </article>
                <article className="metric-card">
                  <span className="eyebrow">Foco</span>
                  <div className="hero-stat-value">Usuário</div>
                  <p className="body-copy m-0 mt-2 text-sm">Experiência e organização de currículos em primeiro lugar.</p>
                </article>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
