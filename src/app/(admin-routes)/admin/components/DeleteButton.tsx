"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [showOrHiddenButton, setShowOrHiddenButton] = useState({
    showButton: "block",
    secondEvent: "none",
  });

  const handleShowDeleteButton = () => {
    if (
      showOrHiddenButton.showButton === "block" &&
      showOrHiddenButton.secondEvent === "none"
    ) {
      setShowOrHiddenButton({
        showButton: "none",
        secondEvent: "flex",
      });
    } else {
      setShowOrHiddenButton({
        showButton: "block",
        secondEvent: "none",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!id) return;
    try {
      const deleteOptions = {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      };

      const response = await fetch(
        `${process.env.NEXT_AUTH_URL}api/images/` + id,
        deleteOptions
      );
      const json = await response.json();
      console.log(json);
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cursor-pointer">
      <div
        className="gap-5"
        style={{
          display: `${showOrHiddenButton.secondEvent}`,
        }}
      >
        <button
          className="bg-red-600 p-1 flex gap-1 rounded-md"
          onClick={() => handleDelete(id)}
        >
          <div>
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          Confirmar
        </button>
        <button
          className="bg-zinc-100 p-1 flex gap-1 text-zinc-900 rounded-md"
          onClick={handleShowDeleteButton}
        >
          <div>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          Cancelar
        </button>
      </div>
      <div
        className="bg-red-600 p-1 rounded-md"
        onClick={handleShowDeleteButton}
        style={{
          display: `${showOrHiddenButton.showButton}`,
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}
