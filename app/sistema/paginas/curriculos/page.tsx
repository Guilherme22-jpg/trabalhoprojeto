"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Header from "../../../componentes/header";
import Footer from "../../../componentes/footer";
import { Curriculo, loadCurriculos } from "./data";

export default function CurriculosPage() {
  const [storedRecords] = useState<Curriculo[]>(() => loadCurriculos());
  const [typedSearch, setTypedSearch] = useState("");
  const [committedSearch, setCommittedSearch] = useState("");

  useEffect(() => {
    const waitSearch = setTimeout(() => {
      setCommittedSearch(typedSearch.trim().toLowerCase());
    }, 200);

    return () => clearTimeout(waitSearch);
  }, [typedSearch]);

  const matchingItems = useMemo(() => {
    if (!committedSearch) return storedRecords;
    return storedRecords.filter((profile) => profile.nome.toLowerCase().includes(committedSearch) || profile.cargo.toLowerCase().includes(committedSearch));
  }, [storedRecords, committedSearch]);

  return (
    <div className="site-shell"><Header /><div className="main-pane"><main className="page-wrap">
      <section className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-teal-200 bg-white p-4 sm:col-span-2"><h1 className="text-3xl font-black text-slate-900">FlowGrid quadros</h1><p className="mt-3 text-sm text-slate-600">Area de consulta e pesquisa dos currículos cadastrados.</p></div><div className="rounded-2xl bg-teal-50 p-4"><Link href="/sistema/paginas/curriculos/novo" className="rounded-md px-4 py-3 text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white">Adicionar</Link></div></div>
        <div className="rounded-2xl border border-teal-200 bg-white p-4">
          <label className="relative block">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={typedSearch} onChange={(event) => setTypedSearch(event.target.value)} placeholder="Buscar por nome ou cargo" className="input-shell pl-11" />
          </label>
        </div>
        {matchingItems.length === 0 ? (
          <div className="rounded-2xl border border-teal-200 bg-white p-8 text-center text-sm text-slate-600">Nenhum curriculo encontrado. Tente outro termo de pesquisa.</div>
        ) : (
          <div className="grid gap-3 xl:grid-cols-2">
            {matchingItems.map((profile) => (
      <article key={profile.id} className="rounded-2xl border border-teal-200 bg-white p-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><h2 className="text-xl font-bold text-slate-900">{profile.nome}</h2><p className="mt-1 text-sm text-slate-600">{profile.cargo}</p></div>
          <Link href={`/sistema/paginas/curriculos/${profile.id}`} className="rounded-md border px-3 py-2 text-sm font-semibold border-teal-300 text-teal-900">Ficha</Link>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{profile.resumo}</p>
      </article>
    ))}
          </div>
        )}
      </section>
    </main><Footer /></div></div>
  );
}
