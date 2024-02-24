import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function AdminPage() {
  const session = await getServerSession(nextAuthOptions);

  console.log(session);

  return(
    <section className="min-h-screen text-zinc-100 bg-zinc-900">
        <div className="container max-w-6xl py-20">
            <h2 className="text-4xl font-bold">Seja bem-vindo, {session?.user.name}</h2>
        </div>
    </section>
  );
}
