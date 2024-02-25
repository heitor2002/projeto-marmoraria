"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LogoutButton(){

    const router = useRouter()
    
    async function logout(){
        await signOut({
            redirect: false
        })

        router.replace("/login")
    }

    return(
        <button onClick={logout} className="bg-red-600 hover:bg-red-800 duration-200 py-1 px-3 rounded-md">Desconectar do usuário</button>
    )
}