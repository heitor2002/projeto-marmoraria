"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TypeSingleProject } from "@/types/apiTypes";
import { useSearchParams } from "next/navigation";

export default function FilterPageProjects({projects}:{projects:TypeSingleProject[]}) {

  console.log(projects)

  const searchParams = useSearchParams();

  var nameParams = searchParams.get("name");
  var categoryParams = searchParams.get("category");

  const [products, setProducts] = useState<TypeSingleProject[]>([]);
  const [rockCategory, setRockCategory] = useState("Todos");
  const [branchCategory, setBranchCategory] = useState("Todos");

  const category = [
    "Granito",
    "Mármore",
    "Quartzito",
    "Dekton",
    "Silestone",
    "Quartzo",
    "Neolith",
  ];

  const branch = ["Túmulos", "Galerias", "Construção Civil"];

  const resetFilterByParams = () => {
    if (nameParams || categoryParams) {
      nameParams = "";
      categoryParams = "";
    }
  };

  // const getProducts = async (url: string) => {
    const getProducts = () => {
    const data = projects;
    if (!nameParams) {
      setProducts(data);
    } else {
      var filterByName = data.filter(
        (item: TypeSingleProject) => item.name === nameParams
      );
      setProducts(filterByName);
    }

    if (rockCategory && branchCategory !== "Todos") {
      var filterByCategoryAndBranch = data.filter(
        (item: TypeSingleProject) =>
          item.category === rockCategory && item.branch === branchCategory
      );
      setProducts(filterByCategoryAndBranch);
    }

    if (rockCategory !== "Todos") {
      var filterByCategory = data.filter(
        (item: TypeSingleProject) => item.category === rockCategory
      );
      setProducts(filterByCategory);
    }

    if (branchCategory !== "Todos") {
      var filterByBranch = data.filter(
        (item: TypeSingleProject) => item.branch === branchCategory
      );
      setProducts(filterByBranch);
    }
  };

  useEffect(() => {
    getProducts();
  }, [rockCategory, branchCategory]);


  return (
    <section className="py-20 container max-w-7xl">
      <h2 className="text-center text-zinc-900 text-3xl tracking-widest">
        Conheça nossos projetos
      </h2>
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <div>
          <h2 className="text-lg mb-3">Filtrar por categoria:</h2>
          <select
            name="category"
            id="category"
            className="border border-zinc-300 py-2 px-4"
            value={rockCategory}
            onChange={(e) => setRockCategory(e.target.value)}
            onClick={resetFilterByParams}
          >
            <option value={"Todos"}>{"Todos"}</option>
            {category.map((name, index) => {
              return (
                <option value={name} className="bg-gray-200" key={index}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h2 className="text-lg mb-3">Filtrar por ramo:</h2>
          <select
            name="category"
            id="category"
            className="border border-zinc-300 py-2 px-4"
            value={branchCategory}
            onChange={(e) => setBranchCategory(e.target.value)}
            onClick={resetFilterByParams}
          >
            <option value={"Todos"}>{"Todos"}</option>
            {branch.map((dataBranch, index) => {
              return (
                <option value={dataBranch} className="bg-gray-200" key={index}>
                  {dataBranch}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {products.map((item, index) => {
          const image = JSON.parse(item.images)
          console.log(image)
          return (
            <div className="w-full max-w-80 border border-zinc-200" key={index}>
              <img
                src={image[0].url_image}
                alt=""
                className="w-full h-44 object-cover"
              />
              <div className="py-3 px-2">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <h3 className="text-sm text-zinc-700">
                  Categoria: {item.category}
                </h3>
                <h3 className="text-sm text-zinc-700 mb-3">
                  Ramo: {item.branch}
                </h3>
                <Link href={"/projetos/" + item.id}>
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
