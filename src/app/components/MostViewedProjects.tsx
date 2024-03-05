import { TypeSingleProject } from "@/types/apiTypes";
import Link from "next/link";

export default function MostViewedProjects({projects}:{projects:TypeSingleProject[]}){
    return(
        <div className="w-full flex flex-col gap-4">
            <h2 className="text-lg text-orange-600 tracking-widest">Últimas publicações</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {projects.slice(0, 4).map(project => {
                return (
                    <Link href={"/projetos/"+ project._id} className="flex items-center gap-3 hover:bg-orange-100 duration-200" key={project._id}>
                        <img src={project.images[0].urlImage} alt="" className="max-h-32 max-w-44 object-cover" />
                        <div className="py-3">
                            <h3 className="text-md font-bold text-orange-600">{project.name}</h3>
                            <h2 className="text-sm text-zinc-600">Categoria: {project.category}</h2>
                            <h2 className="text-sm text-zinc-600">Ramo: {project.branch}</h2>
                        </div>
                    </Link>
                )
            })}
            </div>
            <Link href={"/projetos"} className="text-center text-lg font-bold text-white hover:scale-105 w-full bg-orange-500 hover:bg-orange-600 duration-300">Ver mais...</Link>
        </div>
    )
}