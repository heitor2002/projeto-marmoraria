"use client";

import useFetch from "@/app/lib/useFetch";
import { v4 as uuidv4 } from "uuid";

export default function LoginForm() {
  const { data } = useFetch("/api/users");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-100 w-full px-3 py-5 flex flex-col gap-5 text-zinc-900 rounded-lg"
    >
      <h2 className="text-center text-lg font-bold tracking-wide">
        Login do administrador:
      </h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="p-2 border border-zinc-700"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 border border-zinc-700"
        />
      </div>
      <input
        type="submit"
        className="bg-emerald-700 hover:bg-green-700 duration-200 cursor-pointer py-3 text-white round"
      />
    </form>
  );
}
