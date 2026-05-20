"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FiBriefcase, FiMail, FiPhone, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";
import Header from "../../../../componentes/header";
import Footer from "../../../../componentes/footer";
import { findCurriculo, loadCurriculos, saveCurriculos } from "../data";
import { Button } from "../../../../componentes/ui/button";

export default function CurriculoDetalhesPage() {
  const [curriculo, setCurriculo] = useState(() => null as null | ReturnType<typeof findCurriculo>);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const router = useRouter();
  const curriculoId = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!curriculoId) {
        setCurriculo(null);
        setIsLoading(false);
        return;
      }

      const foundCurriculo = findCurriculo(curriculoId) ?? null;
      setCurriculo(foundCurriculo);
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [curriculoId]);

  const handleDelete = () => {
    if (!curriculo) return;
    const current = loadCurriculos().filter((item) => item.id !== curriculo.id);
    saveCurriculos(current);
    toast.success("Curriculo excluido com sucesso.");
    router.push("/sistema/paginas/curriculos");
  };

  return (
    <div className="site-shell">
      <Header />

      <div className="main-pane">
        <main className="page-wrap">
          <section className="page-shell">
            <div className="detail-actions">
              <Link href="/sistema/paginas/curriculos" className="btn-secondary">
                Voltar para a lista
              </Link>
              <Button type="button" variant="danger" onClick={handleDelete}>
                <FiTrash2 />
                Excluir curriculo
              </Button>
            </div>

            {isLoading ? (
              <div className="surface-card empty-state mt-4">Carregando curriculo...</div>
            ) : curriculo ? (
              <div className="stack-list mt-4">
                <section className="detail-hero">
                  <article className="surface-card detail-person">
                    <span className="eyebrow">Perfil principal</span>
                    <div className="detail-person-main">
                      <div className="avatar-frame">
                        <Image src={curriculo.avatar} alt={curriculo.nome} fill className="object-cover" />
                      </div>
                      <div>
                        <span className="eyebrow">{curriculo.cargo}</span>
                        <h2>{curriculo.nome}</h2>
                        <div className="chip-row mt-3">
                          <span className="chip">
                            <FiMail />
                            {curriculo.email}
                          </span>
                          <span className="chip">
                            <FiBriefcase />
                            {curriculo.cargo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="surface-card detail-id-card">
                    <div>
                      <span className="eyebrow">Registro</span>
                      <h3 className="m-0 mt-3 text-2xl font-semibold">ID do perfil</h3>
                    </div>
                    <span className="status-chip">{curriculo.id}</span>
                  </article>
                </section>

                <section className="summary-shell">
                  <article className="surface-card">
                    <span className="eyebrow">Contato</span>
                    <div className="stack-list mt-4">
                      <div className="array-card">
                        <strong className="flex items-center gap-2">
                          <FiPhone />
                          Telefone
                        </strong>
                        <p className="body-copy m-0 mt-2">{curriculo.telefone}</p>
                      </div>
                      <div className="array-card">
                        <strong>CPF</strong>
                        <p className="body-copy m-0 mt-2">{curriculo.cpf}</p>
                      </div>
                    </div>
                  </article>

                  <article className="surface-card">
                    <span className="eyebrow">Resumo profissional</span>
                    <p className="body-copy mt-4">{curriculo.resumo}</p>
                  </article>
                </section>

                <section className="details-grid">
                  <article className="surface-card">
                    <div className="panel-head">
                      <div>
                        <span className="eyebrow">Historico</span>
                        <h3 className="m-0 mt-2 text-xl font-semibold">Experiencias profissionais</h3>
                      </div>
                    </div>
                    <div className="stack-list mt-5">
                      {curriculo.experiencias.map((item, index) => (
                        <div key={index} className="array-card">
                          <strong>{item.empresa}</strong>
                          <p className="body-copy m-0 mt-2">
                            {item.cargo} | {item.periodo}
                          </p>
                          <p className="body-copy m-0 mt-3">{item.descricao}</p>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="surface-card">
                    <div className="panel-head">
                      <div>
                        <span className="eyebrow">Academico</span>
                        <h3 className="m-0 mt-2 text-xl font-semibold">Formacao academica</h3>
                      </div>
                    </div>
                    <div className="stack-list mt-5">
                      {curriculo.formacoes.map((item, index) => (
                        <div key={index} className="array-card">
                          <strong>{item.instituicao}</strong>
                          <p className="body-copy m-0 mt-2">{item.curso}</p>
                          <p className="body-copy m-0 mt-3">{item.periodo}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </section>

                <section className="surface-card">
                  <div className="panel-head">
                    <div>
                      <span className="eyebrow">Competencias</span>
                      <h3 className="m-0 mt-2 text-xl font-semibold">Habilidades</h3>
                    </div>
                  </div>
                  <div className="skill-row mt-4">
                    {curriculo.habilidades.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="surface-card empty-state mt-4">Curriculo nao encontrado. Verifique se o ID esta correto.</div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
