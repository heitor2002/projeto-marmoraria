import Link from "next/link";

export default function ProductInformation({name, urlImage}: {name:string, urlImage: string}){
    return(
        <div className="flex justify-center flex-col gap-2">
            <div className="relative rounded-md">
                <img src="https://realmarmoraria.com.br/wp-content/uploads/2022/05/Marmore-Vantablack_Granimar-1024x576.jpg" alt="" className="h-60 object-cover rounded-md" />
                <h2 className="p-3 text-lg font-bold absolute bottom-0 left-0 w-full text-white stone-fade-name rounded-md">{name}</h2>
            </div>
            <Link href={"/"} className="w-full bg-transparent border border-orange-500 text-center text-orange-500 rounded-md py-2 hover:bg-orange-500 hover:text-white duration-200">Visualizar projetos</Link>
        </div>
    )
}