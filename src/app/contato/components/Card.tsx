import Link from "next/link";

export default function Card({
  name,
  urlContact,
}: {
  name: string;
  urlContact: string;
}) {
  return (
    <Link href={urlContact} className="bg-orange-500 hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 rounded-lg">
      <button className="px-5 py-3 border border-orange-500 hover:border-green-700 text-white rounded-lg">Entrar em contato por WhatsApp</button>
    </Link>
  );
}
