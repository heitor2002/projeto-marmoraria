"use client";

import { useState } from "react";

export default function GallerySinglePage() {
  const [urlImage, setUrlImage] = useState(
    "https://wallpaperset.com/w/full/c/7/f/402336.jpg"
  );

  const images = [
    "https://wallpaperset.com/w/full/c/7/f/402336.jpg",
    "https://media.gettyimages.com/id/1311611922/pt/v%C3%ADdeo/film-leader-countdown-old-movie-countdown-film-reel-imitation-of-an-old-movie-with-noise-and.jpg?s=640x640&k=20&c=qDm88xLkoOyw9j1EXCC_pM608SSjrV3PC-UvMSIhpIw=",
    "https://i.ytimg.com/vi/3KUmWorFds0/maxresdefault.jpg",
  ];
  return (
    <main className="container max-w-6xl grid grid-cols-2 py-10">
      <div className="flex flex-col">
        <div className="w-full h-80 bg-red-400">
          <img src={urlImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full mt-5 grid gap-2 grid-cols-4">
          {images.map((urlImg, index) => {
            return (
              <button className="w-full max-w-40 h-20 bg-blue-500" key={index} onClick={() =>setUrlImage(urlImg)}>
                <img src={urlImg} alt="" className="w-full h-full"/>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-5 py-8">
        <h2 className="text-4xl">Nome da pedra</h2>
        <div className="mt-5 text-lg text-gray-600">
          <h3>Categoria: Mármore</h3>
          <h3>Ramo: Construção civil</h3>
        </div>
      </div>
    </main>
  );
}
