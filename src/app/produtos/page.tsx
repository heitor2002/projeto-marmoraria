import ProductInformation from "../components/ProductInformation";

export default function Products() {
  return (
    <section className="bg-image-products flex justify-start items-center">
      <div className="container max-w-7xl z-10 grid grid-cols-12 py-20 gap-5">
        <aside className="col-span-3 border border-slate-500">

        </aside>
        <div className="grid col-span-9 grid-cols-3 gap-7">
          <ProductInformation name="Granito preto" urlImage=""/>
          <ProductInformation name="Granito preto" urlImage=""/>
          <ProductInformation name="Granito preto" urlImage=""/>
          <ProductInformation name="Granito preto" urlImage=""/>
          <ProductInformation name="Granito preto" urlImage=""/>
          <ProductInformation name="Granito preto" urlImage=""/>
        </div>
      </div>
    </section>
  );
}
