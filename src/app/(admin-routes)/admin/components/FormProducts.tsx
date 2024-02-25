"use client";

import useFetch from "@/app/lib/useFetch";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductProps {
  id: string;
  product_name: string;
  product_category: string;
  product_image: string;
}

export default function FormProducts() {
  const { data } = useFetch("/api/images");

  const [image, setImage] = useState<string>("");

  const [copyColor, setCopyColor] = useState<string>("");
  const [copyMessage, setCopyMessage] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductProps>({
    id: uuidv4(),
    product_name: "",
    product_category: "",
    product_image: "",
  });

  const category = [
    "Granito",
    "Mármore",
    "Quartzito",
    "Dekton",
    "Silestone",
    "Quartzo",
    "Neolith",
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(image);
      setCopyColor("rgb(5 150 105)");
      setCopyMessage(true)
      setTimeout(() => {
        setCopyColor("rgb(39 39 42)");
        setCopyMessage(false)
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const options = {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(product)
      }

      const response = await fetch("/api/products", options)
      const json = response.json()

      console.log(json)
    }catch(error){
      console.log(error)
    }
  };
  return (
    <form
      className="w-full max-w-6xl flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-md flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="product_name">Nome do produto:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
            value={product.product_name}
            onChange={onChangeInput}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="product_category">Categoria do produto:</label>
          <select
            name="product_category"
            id="product_category"
            className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
            value={product.product_category}
            onChange={onChangeInput}
          >
            <option value="">Selecionar categoria</option>
            {category.map((category, index) => {
              return (
                <option value={category} key={index} className="text-zinc-900">
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        {product.product_name !== "" && (
          <div className="flex flex-col gap-1">
            <label htmlFor="product_image">Imagem do produto:</label>
            <input
              type="text"
              id="product_image"
              name="product_image"
              className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
              value={product.product_image}
              onChange={onChangeInput}
            />
          </div>
        )}
        {product.product_name !== "" && (
          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              {image !== "" && (
                <button
                  className="bg-zinc-800 p-2 rounded-lg animate-bounce"
                  onClick={copyToClipboard}
                  style={{
                    backgroundColor: copyColor,
                    transition: ".3s",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </button>
              )}
              {!copyMessage && <h2 className="text-xs">{image}</h2>}
              {copyMessage && <h3 className="text-emerald-600 text-sm">Link copiado!</h3>}
            </div>
            <input
              type="submit"
              name="acao"
              className="bg-emerald-600 text-zinc-300 py-1 px-2 mt-5 cursor-pointer hover:bg-green-600 duration-200"
              value={"Enviar"}
            />
          </div>
        )}
      </div>
      {product.product_name !== "" && (
        <div className="grid grid-cols-3 gap-3 break-inside-avoid">
          {data
            .map((dataImage, index) => {
              return (
                <div key={index} onClick={() => setImage(dataImage.url_image)}>
                  <img
                    src={dataImage.url_image}
                    alt=""
                    className="hover:border-4 duration-200 border-green-600"
                  />
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </form>
  );
}
