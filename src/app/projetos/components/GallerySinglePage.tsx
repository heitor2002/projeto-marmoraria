"use client";

import Link from "next/link";
import { useState } from "react";

type TypeSingleProject={
  id: Number,
  name: String,
  category: String,
  branch: String,
  urlImages: String[],
}

export default function GallerySinglePage({dataProject}:{dataProject:TypeSingleProject}) {

  console.log(dataProject)

  const [urlImage, setUrlImage] = useState(dataProject.urlImages[2].src);

  const images = [dataProject.urlImages[2].src, dataProject.urlImages[1].src, dataProject.urlImages[0].src];
  return (
    <main className="container max-w-6xl grid grid-cols-9 py-10">
      <div className="flex flex-col col-span-5">
        <div className="w-full h-96 bg-red-400">
          <img src={urlImage} alt="" className="w-full h-full object-cover flex justify-center items-center" />
        </div>
        <div className="w-full mt-5 grid gap-2 grid-cols-4">
          {images.map((urlImg, index) => {
            return (
              <button
                className="w-full max-w-40 h-20 bg-blue-500"
                key={index}
                onClick={() => setUrlImage(urlImg)}
              >
                <img src={urlImg} alt="" className="w-full h-full" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-5 py-8 col-span-4">
        <h2 className="text-4xl">{dataProject.name}</h2>
        <div className="mt-5 text-lg text-gray-600 mb-10">
          <h3>Categoria: {dataProject.category}</h3>
          <h3>Ramo: {dataProject.branch}</h3>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <Link
            href={"/projetos"}
            className="w-full bg-orange-500 px-4 py-3 text-white"
          >
            Voltar para página de projetos
          </Link>
          <Link
            href={"/projetos"}
            className="w-full bg-green-500 px-4 py-3 text-white"
          >
            Entrar em contato com o vendedor
          </Link>
        </div>
      </div>
    </main>
  );
}
