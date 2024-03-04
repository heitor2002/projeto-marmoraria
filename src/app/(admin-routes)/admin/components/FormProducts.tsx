"use client";

import useFetch from "@/app/lib/useFetch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductProps {
  id: string;
  productName: string;
  productCategory: string;
}

export default function FormProducts() {
  const { data } = useFetch(`${process.env.NEXT_AUTH_URL}api/images`);

  console.log(data)

  const router = useRouter()

  const [image, setImage] = useState<string>("");

  const [product, setProduct] = useState<ProductProps>({
    id: uuidv4(),
    productName: "",
    productCategory: "",
  });

  const [productMessage, setProductMessage] = useState(false)

  const category = [
    "Granito",
    "Mármore",
    "Quartzito",
    "Dekton",
    "Silestone",
    "Quartzo",
    "Neolith",
  ];

  const onChangeInput = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productImage = image
    const {id, productName, productCategory } = product

    try{
      const options = {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({id, productName, productCategory, productImage})
      }

      const response = await fetch(`${process.env.NEXT_AUTH_URL}api/products`, options)
      const json = await response.json()

      console.log(json)
      setProductMessage(true)
      setTimeout(() => {
        setProductMessage(false)
        setProduct({
          id: uuidv4(),
          productCategory: "",
          productName: "",
        })
      }, 2000)
      
      router.refresh()
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
            id="productName"
            name="productName"
            className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
            value={product.productName}
            onChange={onChangeInput}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="product_category">Categoria do produto:</label>
          <select
            name="productCategory"
            id="productCategory"
            className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
            value={product.productCategory}
            onChange={onChangeInput}
            required
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
        {product.productName !== "" && (
          <div className="flex flex-col gap-1">
            <label htmlFor="product_image">Imagem do produto:</label>
            {image && <h2 className="text-sm">{image}</h2>}
          </div>
        )}
        {product.productName !== "" && (
          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              {image && <img src={image} alt="image" />}
            </div>
            {productMessage && <h2 className="text-emerald-600 text-sm">Produto cadastrado com sucesso!</h2>}
            <input
              type="submit"
              name="acao"
              className="bg-emerald-600 text-zinc-300 py-1 px-2 mt-5 cursor-pointer hover:bg-green-600 duration-200"
              value={"Enviar"}
            />
          </div>
        )}
      </div>
      {product.productName !== "" && (
        <div className="grid grid-cols-3 gap-3 break-inside-avoid">
          {data
            .map((dataImage, index) => {
              return (
                <div key={index} onClick={() => setImage(dataImage.urlImage)}>
                  <img
                    src={dataImage.urlImage}
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
