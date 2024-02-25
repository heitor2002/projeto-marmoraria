import FormProducts from "../../components/FormProducts";

export default function ProductForm(){
    return(
        <div>
            <h2 className="text-2xl">Gerenciar produtos</h2>
            <div className="mt-5">
                <h3>Adicionar novo produto:</h3>
                <FormProducts />
            </div>
        </div>
    )
}