import LayoutAdmPage from "../../components/LayoutAdmPage";
import GalleryDataBaseImages from "./components/GalleryDataBaseImages";
import SendImage from "./components/SendImage";

export default async function ImagesForm() {
  const response = await fetch("http://localhost:3000/api/images");
  const data = await response.json()
  return (
    <LayoutAdmPage>
        <h2 className="text-lg mt-6">Bem vindo ao banco de imagens:</h2>
        <SendImage />
        <div className="mt-10">
          <h2 className="text-lg font-bold">Banco de imagens:</h2>
          <GalleryDataBaseImages images={data} />
        </div>
    </LayoutAdmPage>
  );
}
