"use client";

import { useState } from "react";
import Link from "next/link";

export default function FilterPageProjects() {
  //   const [categoryFilters, setCategoryFilters] = useState(new Set());

  //   const updateFilter = (checked: boolean, categoryFilters: string) => {
  //     if (checked)
  //       setCategoryFilters((prev) => new Set(prev).add(categoryFilters));
  //     if (!checked) {
  //       setCategoryFilters((prev) => {
  //         const next = new Set(prev);
  //         next.delete(categoryFilters);
  //         return next;
  //       });
  //     }
  //   };

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
  const products = [
    {
      name: "Granito",
      category: "Granito",
      id: 1,
    },
    {
      name: "Mármore",
      category: "Mármore",
      id: 2,
    },
    {
      name: "Quartzito",
      category: "Quartzito",
      id: 3,
    },
    {
      name: "Dekton",
      category: "Dekton",
      id: 4,
    },
    {
      name: "Silestone",
      category: "Silestone",
      id: 5,
    },
    {
      name: "Quartzo",
      category: "Quartzo",
      id: 6,
    },
    {
      name: "Neolith",
      category: "Neolith",
      id: 7,
    },
    {
      name: "Granito 2",
      category: "Granito",
      id: 7,
    },
  ];

  //   const filteredProducts =
  //     categoryFilters.size === 0
  //       ? products
  //       : products.filter((p) => categoryFilters.has(p.category));
  return (
    <main>
      <div className="w-full banner-projects relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1682617327331-e5a45af2ed5a?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center banner-opacity">
          <h2 className="text-white text-6xl relative z-10">Cada pedra é uma história</h2>
        </div>
      </div>
      
    </main>
  );
}
