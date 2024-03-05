"use client"

import { useState } from "react"

export default function ServicesAndProjectsBox({image, title, text}: {image:string, title:string, text:string}){
    
    const [heightAnimation, setHeightAnimation] = useState("6rem")
    const [buttonText, setButtonText] = useState("Ler mais...")

    const heightEvent = () => {
        if(heightAnimation === "6rem"){
            setHeightAnimation("800px")
            setButtonText("Menos...")

        }else {
            setHeightAnimation("6rem")
            setButtonText("Ler mais...")
        }
    }

    return(
        <div className="w-full">
            <img src={image} alt="" className="w-full h-32 object-cover" />
            <div className="py-1 px-2">
                <h2 className="text-lg font-bold text-zinc-950">{title}</h2>
                <p className="text-sm text-zinc-700 mt-2 overflow-hidden duration-300" style={{
                    maxHeight: heightAnimation
                }}>{text}</p>
                <center><button className="mt-2 py-2 text-orange-500 border-b border-b-orange-500" onClick={heightEvent}>{buttonText}</button></center>
            </div>
        </div>
    )
}