import { TypeSingleProject } from "@/types/apiTypes";
import GallerySinglePage from "../components/GallerySinglePage";
import SwiperProjects from "../components/SwiperProjects";
import Comments from "@/app/components/Comments";
import Mosaic from "@/app/components/Mosaic";

type Params = {
  params: {
    id: number;
  };
};

export default async function SinglePageProjects({ params: { id } }: Params) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects/${id}`);
  const singleData = await response.json()

  const responseAll = await fetch(`${process.env.NEXTAUTH_URL}/api/projects`)
  const data = await responseAll.json()

  return (
    <section>
      <GallerySinglePage data={singleData[0]} />
      <div className="bg-slate-200 py-10">
        <div className="container max-w-6xl">
          <h2 className="text-4xl text-zinc-950">Veja mais projetos</h2>
          <div className="w-full max-w-52 h-1 bg-orange-500 mt-8"></div>
          <div className="mt-10">
            <SwiperProjects data={data} />
          </div>
        </div>
      </div>
      <Mosaic />
      <Comments />
    </section>
  );
}
