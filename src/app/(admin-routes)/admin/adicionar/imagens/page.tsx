import GridImages from "../../components/GridImages";
import SendImage from "../../components/SendImage";

export default async function ImagesForm() {
  return (
    <div>
      <h2 className="text-md bg-amber-600 py-1 px-2 border-b-4 border-b-yellow-500">
        Após o envio da imagem, será gerado um link de acesso. Melhorias de
        obtenção de link estão sendo desenvolvidas.
      </h2>
      <SendImage />
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-3">Banco de imagens:</h2>
        <GridImages />
      </div>
    </div>
  );
}
