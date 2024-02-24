import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <section className="w-full bg-zinc-950">
      <div className="container max-w-lg flex justify-center items-center flex-col min-h-screen pb-24">
        <h2 className="text-center text-2xl mb-5 font-thin tracking-widest text-zinc-100">
          Página do administrador:
        </h2>
        <LoginForm />
      </div>
    </section>
  );
}
