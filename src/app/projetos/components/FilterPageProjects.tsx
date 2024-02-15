"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TypeSingleProject } from "@/types/apiTypes";

export default function FilterPageProjects() {
  
  const [products, setProducts] = useState<TypeSingleProject[]>([])
  const [rockCategory, setRockCategory] = useState("Todos")

  const category = [
    "Granito",
    "Mármore",
    "Quartzito",
    "Dekton",
    "Silestone",
    "Quartzo",
    "Neolith",
    "Lâmina Ultracompacta",
  ];
  
  const getProducts = async (url:string) => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  const filterProjects = () => {
    if(rockCategory !== "Todos"){
      console.log("Diferente")
    }
  }

  useEffect(() => {
    getProducts("http://localhost:3000/api/projects")
    filterProjects()
  },[])



  //   const filteredProducts =
  //     categoryFilters.size === 0
  //       ? products
  //       : products.filter((p) => categoryFilters.has(p.category));
  return (
    <section className="py-20 container max-w-7xl">
      <h2 className="text-center text-zinc-900 text-3xl tracking-widest">
        Conheça nossos projetos
      </h2>
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <div>
          <h2 className="text-lg mb-3">Filtrar por categoria:</h2>
          <select name="category" id="category" className="border border-zinc-300 py-2 px-4">
            <option value={rockCategory}>{rockCategory}</option>
            {category.map((name, index) => {
              return(
                <option value={name} className="bg-gray-200" key={index} onChange={() => setRockCategory(name)}>{name}</option>
              )
            })}
          </select>
        </div>
        <div>
          <h2 className="text-lg mb-3">Filtrar por ramo:</h2>
          <select name="category" id="category" className="border border-zinc-300 py-2 px-4">
          <option value="Túmulos" className="bg-gray-200">Túmulos</option>
          <option value="Galerias" className="bg-gray-200">Galerias</option>
          <option value="Construção civil" className="bg-gray-200">Construção civil</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {products.map((item, index) => {
          return (
            <div className="w-full max-w-80 border border-zinc-200" key={index}>
              <img src={item.urlImages[2].src} alt="" className="w-full h-44 object-cover" />
              <div className="py-3 px-2">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <h3 className="text-sm text-zinc-700">Categoria: {item.category}</h3>
                <h3 className="text-sm text-zinc-700 mb-3">
                  Ramo: {item.branch}
                </h3>
                <Link href={"/projetos/1"}>
                  <h2 className="w-full bg-orange-500 text-white py-1 text-center text-md">
                    Ver mais
                  </h2>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
