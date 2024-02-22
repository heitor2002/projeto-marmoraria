import Link from "next/link";
import Card from "./components/Card";

export default function Contact() {
  return (
    <section className="grid grid-cols-2 min-h-screen">
      <main className="flex justify-end bg-zinc-100 text-zinc-900">
        <div className="w-full max-w-lg flex justify-center items-start flex-col px-3">
          <h2 className="text-3xl">
            Gostou do nosso trabalho? <br /> Entre em{" "}
            <span className="text-orange-600 font-bold">contato</span>, vamos
            fazer um{" "}
            <span className="text-orange-600 font-bold">orçamento!</span>
          </h2>
          <h3 className="mt-5 text-lg text-left pb-3 font-thin">
            Atendimento em{" "}
            <span className="font-bold text-orange-600">Adamantina</span> e
            região!
          </h3>
          <div className="pb-28 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-orange-500">
                Marcos vendedor:
              </h2>
              <Card name="Marcos vendedos" urlContact="/" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-orange-500">Escritório:</h2>
              <Card name="Marcos vendedos" urlContact="/" />
            </div>
          </div>
        </div>
      </main>
      <div className="bg-image-contact-page"></div>
    </section>
  );
}
