export default function Address(){
    return(
        <article className="py-10 bg-zinc-900">
          <div className="container max-w-4xl">
            <div className="text-slate-100 font-thin text-lg text-center">
              <main>
                <h2 className="font-bold text-2xl tracking-widest">
                  Nos faça uma visita
                </h2>
                <h3 className="mt-5">Rua Francisco Bellusci, 871</h3>
                <h3>Adamantina, 17800-000</h3>
                <h5 className="font-bold text-2xl tracking-widest mt-5">
                  Atendimento
                </h5>
                <div className="flex justify-center gap-14 mt-10">
                  <div className="flex flex-col justify-center gap-5 bg-zinc-950 rounded-md hover:-translate-y-4 duration-300 p-5">
                    <h2 className="text-lg">Vendedor <span className="font-bold text-orange-600">Marcos</span></h2>
                    <div className="flex gap-5 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h2>(18) 9 9146-5072</h2>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-5 bg-zinc-950 rounded-md hover:-translate-y-4 duration-300 p-5">
                    <h2 className="text-lg"><span className="font-bold text-orange-600">Escritório</span></h2>
                    <div className="flex gap-5 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h2>(18) 9 9668-0223</h2>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </article>
    )
}