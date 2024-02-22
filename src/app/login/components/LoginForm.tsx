"use client";

import useFetch from "@/app/lib/useFetch";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function LoginForm() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const onChangeInput = (e) => setUser({...user, [e.target.name]:e.target.value})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    try{
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user)
      })

      const json = await response.json()
      console.log(json)
    }catch(error){

    }
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
          value={user.email}
          onChange={onChangeInput}
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
