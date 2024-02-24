import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function AdminPage() {
  const session = await getServerSession(nextAuthOptions);

  console.log(session);

  return(
    <div>Ola mundo</div>
  );
}
