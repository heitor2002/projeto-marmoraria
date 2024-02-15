import { TypeSingleProject } from "@/types/apiTypes";
import GallerySinglePage from "../components/GallerySinglePage";
import SwiperProjects from "../components/SwiperProjects";
import Comments from "@/app/components/Comments";
import Mosaic from "@/app/components/Mosaic";

export default async function SinglePageProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  const data: TypeSingleProject[] = await res.json();

  console.log(data);

  return (
    <section>
      <GallerySinglePage dataProject={data[0]} />
      <div className="bg-slate-200 py-10">
        <div className="container max-w-6xl">
          <h2 className="text-4xl text-zinc-950">Veja mais projetos</h2>
          <div className="w-full max-w-52 h-1 bg-orange-500 mt-8"></div>
          <div className="mt-10">
            <SwiperProjects dataProjects={data} />
          </div>
        </div>
      </div>
      <Mosaic />
      <Comments />
    </section>
  );
}
