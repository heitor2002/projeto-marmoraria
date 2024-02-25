import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LogoutButton from "../components/LogoutButton";

export default async function UserPage(){

    const session = await getServerSession(nextAuthOptions);

    return(
        <div>
            <h2 className="text-md">Nome do usuário: <span className="text-lg text-yellow-400">{session?.user.name}</span></h2>
            <h2 className="text-md">E-mail cadastrado: <span className="text-lg text-yellow-400">{session?.user.email}</span></h2>
            <h2 className="text-md">Cargo do usuário: <span className="text-lg text-yellow-400 capitalize">{session?.user.hierarchy}</span></h2>
            <h2 className="text-sm text-zinc-500 mt-3">ID do usuário: {session?.user.id}</h2>
            <div className="mt-10">
                <LogoutButton />
            </div>
        </div>
    )
}