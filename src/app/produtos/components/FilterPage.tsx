import ProductInformation from "@/app/components/ProductInformation";
import Checkbox from "./Checkbox";

export default function FilterPage(){
    const products = [
        {
          name: "Granito",
          category:"granito",
          products: ["Produto 1", "Produto 2"],
          id: 1
        },
        {
          name: "Mármore",
          category:"marmore",
          products: ["Produto 1", "Produto 2"],
          id: 2
        },
        {
          name: "Quartzito",
          category:"quartzito",
          products: ["Produto 1", "Produto 2"],
          id: 3
        },
        {
          name: "Dekton",
          category:"dekton",
          products: ["Produto 1", "Produto 2"],
          id: 4
        },
        {
          name: "Silestone",
          category:"silestone",
          products: ["Produto 1", "Produto 2"],
          id: 5
        },
        {
          name: "Quartzo",
          category:"quartzo",
          products: ["Produto 1", "Produto 2"],
          id: 6
        },
        {
          name: "Neolith",
          category:"neolith",
          products: ["Produto 1", "Produto 2"],
          id: 7
        },
      ]
    return(
        <div className="container max-w-7xl z-10 grid grid-cols-12 py-20 gap-5">
        <aside className="col-span-3">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Categorias:</h2>
          <nav className="flex flex-col gap-3">
            <Checkbox id={"1"} name="granito" title="Granito" key={1} />
            <Checkbox id={"2"} name="marmore" title="Mármore" key={2} />
            <Checkbox id={"3"} name="quartzito" title="Quartzito" key={3} />
            <Checkbox id={"4"} name="dekton" title="Dekton" key={4} />
            <Checkbox id={"5"} name="silestone" title="Silestone" key={5} />
            <Checkbox id={"6"} name="quartzo" title="Quartzo" key={6} />
            <Checkbox id={"7"} name="neolith" title="Neolith" key={7} />
          </nav>
        </aside>
        <div className="grid col-span-9 grid-cols-3 gap-7">
          <ProductInformation name="Granito preto" urlImage="" />
          <ProductInformation name="Granito preto" urlImage="" />
          <ProductInformation name="Granito preto" urlImage="" />
          <ProductInformation name="Granito preto" urlImage="" />
          <ProductInformation name="Granito preto" urlImage="" />
          <ProductInformation name="Granito preto" urlImage="" />
        </div>
      </div>
    )
}