"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onChangeInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/admin");
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
          onChange={onChangeInput}
          value={user.email}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 border border-zinc-700"
          value={user.password}
          onChange={onChangeInput}
        />
      </div>
      <input
        type="submit"
        className="bg-emerald-700 hover:bg-green-700 duration-200 cursor-pointer py-3 text-white round"
      />
    </form>
  );
}
