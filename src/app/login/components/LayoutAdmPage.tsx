export default function LayoutAdmPage({ children } : { children: React.ReactNode }) {
  return (
    <section className="py-10 bg-zinc-900">
      <div className="container max-w-5xl text-white">
        <h2 className="text-4xl">Página do administrador</h2>
        {children}
      </div>
    </section>
  );
}
