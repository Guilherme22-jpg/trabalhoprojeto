"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import Header from "../../../componentes/header";
import Footer from "../../../componentes/footer";
import { Curriculo, loadCurriculos } from "./data";

export default function CurriculosPage() {
  const [curriculos] = useState<Curriculo[]>(() => loadCurriculos());
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query.trim().toLowerCase());
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const filteredCurriculos = useMemo(
    () =>
      curriculos.filter((item) => {
        const term = search;
        if (!term) return true;
        return item.nome.toLowerCase().includes(term) || item.cargo.toLowerCase().includes(term);
      }),
    [curriculos, search],
  );

  return (
    <div className="site-shell">
      <Header />

      <div className="main-pane">
        <main className="page-wrap">
          <section className="page-shell">
            <div className="toolbar-shell">
              <div className="toolbar-banner">
                <div className="search-card">
                  <span className="eyebrow">Lista de curriculos</span>
                  <h1 className="section-title">Gerencie os currículos cadastrados</h1>
                  <p className="section-copy mt-4 text-sm sm:text-base">
                    Filtre perfis por nome ou cargo e acesse detalhes de maneira rápida e direta.
                  </p>
                </div>

                <div className="search-card">
                  <label className="search-shell">
                    <FiSearch className="h-4 w-4" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Buscar por nome ou cargo"
                      className="input-shell pl-11"
                    />
                  </label>
                </div>
              </div>

              <div className="action-card">
                <span className="eyebrow">Acesso rapido</span>
                <p className="body-copy mt-4">
                  Use este painel para cadastrar um novo currículo ou navegar pelos perfis existentes.
                </p>
                <div className="toolbar-actions mt-6">
                  <Link href="/sistema/paginas/curriculos/novo" className="btn-primary">
                    Novo curriculo
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="stats-grid mt-4">
              <article className="metric-card">
                <span className="eyebrow">Registros visiveis</span>
                <div className="hero-stat-value">{filteredCurriculos.length}</div>
              </article>
              <article className="metric-card">
                <span className="eyebrow">Persistencia</span>
                <div className="hero-stat-value text-xl">LocalStorage</div>
              </article>
              <article className="metric-card">
                <span className="eyebrow">Filtro</span>
                <div className="hero-stat-value text-xl">Nome e cargo</div>
              </article>
            </div>

            <div className="record-grid mt-4">
              <section className="stack-list">
                {filteredCurriculos.slice(0, Math.ceil(filteredCurriculos.length / 2)).map((item) => (
                  <article key={item.id} className="record-card">
                    <div className="record-head">
                      <div className="chip-row">
                        <span className="chip">{item.cargo}</span>
                      </div>
                      <Link href={`/sistema/paginas/curriculos/${item.id}`} className="ghost-link">
                        Abrir perfil
                        <FiArrowRight />
                      </Link>
                    </div>

                    <h2 className="m-0 mt-4 text-2xl font-semibold">{item.nome}</h2>
                    <p className="body-copy m-0 mt-3 text-sm">{item.resumo}</p>
                  </article>
                ))}
              </section>

              <section className="stack-list">
                {filteredCurriculos.length === 0 ? (
                  <div className="surface-card empty-state">Nenhum curriculo encontrado. Tente outro termo de pesquisa.</div>
                ) : (
                  filteredCurriculos.slice(Math.ceil(filteredCurriculos.length / 2)).map((item) => (
                    <article key={item.id} className="record-card">
                      <div className="record-head">
                        <div className="chip-row">
                          <span className="chip">{item.email}</span>
                        </div>
                        <Link href={`/sistema/paginas/curriculos/${item.id}`} className="ghost-link">
                          Ver detalhes
                          <FiArrowRight />
                        </Link>
                      </div>

                      <h2 className="m-0 mt-4 text-2xl font-semibold">{item.nome}</h2>
                      <p className="body-copy m-0 mt-2 font-medium">{item.cargo}</p>
                      <p className="body-copy m-0 mt-3 text-sm">{item.resumo}</p>
                    </article>
                  ))
                )}
              </section>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
