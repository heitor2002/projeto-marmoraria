import LayoutAdmPage from "@/app/(auth-routes)/login/components/LayoutAdmPage";
import SendImage from "../../components/SendImage";

export default async function ImagesForm() {
  return (
    <LayoutAdmPage>
      <h2 className="text-lg mt-6">Bem vindo ao banco de imagens:</h2>
      <SendImage />
      <div className="mt-10">
        <h2 className="text-lg font-bold">Banco de imagens:</h2>
      </div>
    </LayoutAdmPage>
  );
}
