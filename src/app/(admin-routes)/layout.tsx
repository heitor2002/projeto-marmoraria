import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "../../provider/sessionProvider";

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
      <section className="min-h-screen text-zinc-100 bg-zinc-900">
        <div className="container max-w-6xl py-20">
          <h2 className="text-4xl font-bold">
            Seja bem-vindo, {session?.user.name}
          </h2>
          <h3 className="mt-3 text-lg font-bold">
            Cargo:{" "}
            <span className="capitalize text-yellow-400">
              {session?.user.hierarchy}
            </span>
          </h3>
          {children}
        </div>
      </section>
    </NextAuthSessionProvider>
  );
}
