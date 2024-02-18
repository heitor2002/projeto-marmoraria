"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SendImage() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [uploading, setUploading] = useState(false);

  const [dataImage, setDataImage] = useState({
    id: uuidv4(),
    url_image: selectedFile,
  });

  const activeImageButton = () => {
    const inputImage = document.getElementById("image");
    inputImage?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      let options = {
        method: "POST",
        body: formData,
      };

      const response = await fetch("/api/images", options);

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  return (
    <div className="mt-5 flex flex-col">
      <button
        className="border border-emerald-600 text-emerald-600 w-full py-4 hover:bg-emerald-600 hover:text-white duration-200"
        onClick={activeImageButton}
      >
        Enviar nova imagem
      </button>

      {selectedImage && (
        <div className="w-full max-w-2xl md:h-72 lg:h-96">
          <img
            src={selectedImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <form className="max-w-sm" onSubmit={handleSubmit}>
        {selectedImage && (
          <button className="border border-emerald-600 text-emerald-600 hover:text-white hover:bg-emerald-600 cursor-pointer duration-200 w-full py-4">
            {uploading ? "Cadastrando..." : "Enviar imagem"}
          </button>
        )}
        <input
          type="file"
          accept="image/*"
          name="image"
          className="hidden"
          id="image"
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
      </form>
    </div>
  );
}
