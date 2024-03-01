import { Metadata } from "next";
import FilterPageProjects from "./components/FilterPageProjects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Generated by create next app",
};

export default async function Projects() {

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects`)
  const data = await response.json()

  console.log(data)

  return (
    <section className="z-10">
      <main>
        <div className="w-full banner-projects relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1682617327331-e5a45af2ed5a?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center banner-opacity">
            <h2 className="text-white text-2xl sm:text-4xl md:text-6xl relative z-10">
              #CadaPedraUmaHistória
            </h2>
          </div>
        </div>
      </main>
      <FilterPageProjects projects={data}/>
    </section>
  );
}
