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

  console.log(session)

  if (!session) {
    redirect("/login");
  }
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
