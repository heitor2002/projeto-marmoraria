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

  const onChangeInput = (e: any) =>
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
      className="w-full px-3 py-5 flex flex-col gap-5 text-zinc-900 rounded-lg"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-zinc-100">
          E-mail:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="p-2 border border-zinc-700 bg-transparent text-zinc-300"
          onChange={onChangeInput}
          value={user.email}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-zinc-100">
          Senha:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 border border-zinc-700 bg-transparent text-zinc-300"
          onChange={onChangeInput}
          value={user.password}
          required
        />
      </div>
      <input
        type="submit"
        className="bg-emerald-700 hover:bg-green-700 duration-200 cursor-pointer py-3 text-white round"
      />
    </form>
  );
}
