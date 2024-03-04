import FormProducts from "../../components/FormProducts";

export default async function ProductForm(){
    const response = await fetch(`${process.env.NEXT_AUTH_URL}api/images`, {cache: "no-cache"})
    const data = await response.json()
    
    console.log(data)
    return(
        <div>
            <h2 className="text-2xl">Gerenciar produtos</h2>
            <div className="mt-5">
                <h3>Adicionar novo produto:</h3>
                <FormProducts data={data}/>
            </div>
        </div>
    )
}