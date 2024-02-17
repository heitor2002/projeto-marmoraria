import LayoutAdmPage from "../../components/LayoutAdmPage";
import SendImage from "./components/SendImage";

export default function ImagesForm() {
  return (
    <LayoutAdmPage>
        <h2 className="text-lg mt-6">Bem vindo ao banco de imagens:</h2>
        <SendImage />
    </LayoutAdmPage>
  );
}
