"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TypeProducts={
  name: string,
  category: string,
  urlImage: string
}

export default function FilterPage() {
  const [categoryFilters, setCategoryFilters] = useState(new Set());
  const [products, setProducts] = useState<TypeProducts[]>([])

  const updateFilter = (checked: boolean, categoryFilters:string) => {
    if (checked)
      setCategoryFilters((prev) => new Set(prev).add(categoryFilters));
    if (!checked) {
      setCategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilters);
        return next;
      });
    }
  };

  const getProducts = async (url:string) => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }
  useEffect(() => {
    getProducts("http://localhost:3000/api/rock")
  },[])

  const category = [
    "Granito",
    "Mármore",
    "Quartzito",
    "Dekton",
    "Silestone",
    "Quartzo",
    "Neolith",
  ];

  const filteredProducts =
    categoryFilters.size === 0
      ? products
      : products.filter((p) => categoryFilters.has(p.category));
  return (
    <div className="container max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 py-20 gap-5">
      <aside className="col-span-3">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Filtrar por:</h2>
        <div className="w-44 h-1 bg-orange-200 mb-10"></div>
        <nav className="flex flex-wrap gap-5 lg:gap-0 lg:flex-col filter-products rounded-lg">
          {category.map((element, index) => {
            return (
              <div
                className="flex gap-3 items-center text-orange-600 text-xl font-thin"
                key={index}
              >
                <input
                  type="checkbox"
                  id={element}
                  name={element}
                  onChange={(e) => updateFilter(e.target.checked, element)}
                />
                <label htmlFor={element}>{element}</label>
              </div>
            );
          })}
        </nav>
      </aside>
      <div className="flex flex-col items-center sm:grid col-span-9 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {filteredProducts.map((item, index) => {
          return (
            <div className="flex justify-center flex-col gap-2" key={index}>
              <div className="relative rounded-md">
                <img
                  src={item.urlImage}
                  alt=""
                  className="w-full h-60 object-cover rounded-md"
                />
                <h2 className="p-3 text-lg font-bold absolute bottom-0 left-0 w-full text-white stone-fade-name rounded-md">
                  {item.name}
                </h2>
              </div>
              <Link
                href={"/projetos?name=" + item.name + "&category=" + item.category}
                className="w-full bg-transparent border border-orange-500 text-center text-orange-500 rounded-md py-2 hover:bg-orange-500 hover:text-white duration-200"
              >
                Visualizar projetos
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
