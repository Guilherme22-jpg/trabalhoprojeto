import Link from "next/link";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export default function Home() {
  return (
    <div className="site-shell"><Header /><div className="main-pane"><main className="page-wrap">
      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]"><aside className="rounded-3xl bg-teal-50 p-5"><span className="inline-flex rounded-full px-3 py-1 text-xs font-bold bg-teal-100 text-teal-900">FlowGrid</span><p className="mt-4 text-sm leading-7 text-slate-700">Um sistema academico para reunir dados profissionais e consultar candidatos em poucos passos.</p><div className="mt-5 grid gap-2"><Link href="/sistema/paginas/curriculos/novo" className="rounded-md px-4 py-3 text-center text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white">Novo perfil</Link><Link href="/sistema/paginas/curriculos" className="rounded-md border px-4 py-3 text-center text-sm font-semibold border-teal-300 text-teal-900">Ver todos</Link></div></aside><section className="rounded-3xl border border-teal-200 bg-white p-5"><h1 className="text-4xl font-black text-slate-900">Central de quadros.</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">O ambiente concentra busca, cadastro e detalhes em uma interface simples e funcional.</p><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-teal-200 p-4 text-sm text-slate-700">Nome e cargo como filtro principal.</div><div className="rounded-xl border border-teal-200 p-4 text-sm text-slate-700">Experiencias e formacoes dinâmicas.</div><div className="rounded-xl border border-teal-200 p-4 text-sm text-slate-700">Feedback visual com toast.</div></div></section></section>
    </main><Footer /></div></div>
  );
}
