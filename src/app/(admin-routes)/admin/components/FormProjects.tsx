"use client";

import { TypeSingleProject } from "@/types/apiTypes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ImagesProps {
  _id: string;
  urlImage: string;
}

export default function FormProjects({
  imagesProps,
}: {
  imagesProps: ImagesProps[];
}) {
  // console.log(products)
  const [images, setImages] = useState<ImagesProps[]>([]);
  const [project, setProject] = useState<TypeSingleProject>({
    _id: "",
    branch: "",
    category: "",
    name: "",
    views: 0,
    images
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

  const branch = ["Túmulos", "Pias", "Lavatórios"];
  const onChangeInput = (e: any) =>
    setProject({ ...project, [e.target.name]: e.target.value });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, branch, category, views } = project;

    try{

      const options = {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({name, branch, category, views, images})
      }

      const response = await fetch(`/api/projects`, options)
      const json = await response.json()

      console.log(json)
    }catch(error){
      console.log(error)
    }
  };

  const incrementImage = (objectImage: ImagesProps) => {
    const filterItem = images.find((image) => image._id === objectImage._id);

    const removeImage = ({ _id }: ImagesProps) => {
      const removeItem = images.filter((image) => image._id !== _id);
      setImages([...removeItem]);
    };
    filterItem ? removeImage(objectImage) : setImages([...images, objectImage]);
  };

  return (
    <div>
      <h2>Crie sua publicação:</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-md flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nome do produto:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
              value={project.name}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category">Categoria do produto:</label>
            <select
              name="category"
              id="category"
              className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
              value={project.category}
              onChange={onChangeInput}
              required
            >
              <option value="">Selecionar categoria</option>
              {category.map((category, index) => {
                return (
                  <option
                    value={category}
                    key={index}
                    className="text-zinc-900"
                  >
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category">Ramo:</label>
            <select
              name="branch"
              id="branch"
              className="bg-transparent border border-zinc-500 text-zinc-300 py-1 px-2"
              value={project.branch}
              onChange={onChangeInput}
              required
            >
              <option value="">Selecionar um ramo:</option>
              {branch.map((branch, index) => {
                return (
                  <option value={branch} key={index} className="text-zinc-900">
                    {branch}
                  </option>
                );
              })}
            </select>
          </div>
        <input type="submit" value={"Cadastrar"} className="bg-emerald-600 hover:bg-emerald-700 py-2 cursor-pointer duration-200" />
        </div>
        <div>

        </div>
      </form>
      <div className="flex flex-col gap-1">
        {images.length !== 0 && (
          <div className="">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl">Imagem de destaque:</h2>
              <img
                src={images[0].urlImage}
                alt=""
                className="w-full max-w-60"
              />
            </div>
            <h2 className="text-2xl mt-10">Outras imagens de visualização:</h2>
            <div className="w-full max-w-5xl grid grid-cols-4 mt-4 gap-3">
              {images.map((image,index) => {
                return (
                  <img
                    src={image.urlImage}
                    alt="Projeto"
                    className="max-w-48 object-contain"
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <h2 className="text-3xl my-10">Selecione as imagens do projeto:</h2>
      <div className="columns-3 mt-5">
        {imagesProps.map((dataImage) => {
          return (
            <div
              className="border border-zinc-600 cursor-pointer m-3"
              key={dataImage._id}
              onClick={(e) => incrementImage(dataImage)}
            >
              <img src={dataImage.urlImage} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
