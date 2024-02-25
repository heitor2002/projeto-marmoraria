import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "../../provider/sessionProvider";
import NavBar from "./admin/components/NavBar";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <NextAuthSessionProvider>
      <section className="text-zinc-100 bg-zinc-900">
        <div className="container max-w-6xl pt-20">
          <h2 className="text-4xl font-bold">
            Seja bem-vindo, {session?.user.name}
          </h2>
          <h3 className="mt-3 text-lg font-bold">
            Cargo:{" "}
            <span className="capitalize text-yellow-400">
              {session?.user.hierarchy}
            </span>
          </h3>
        </div>
        <div className="mt-5 bg-zinc-950">
          <div className="container max-w-6xl grid grid-cols-11 py-10">
            <NavBar />
            <main className="col-span-9 px-10">{children}</main>
          </div>
        </div>
      </section>
    </NextAuthSessionProvider>
  );
}
