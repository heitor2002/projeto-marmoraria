import Image from "next/image";

type TypeImages = {
    id: string,
    url_image: string
}

export default function GalleryDataBaseImages({images}:{images:TypeImages[]}){

    return(
        <div className="grid grid-cols-3 gap-3 mt-4">
            {images?.map(image => {
                return <img src={image.url_image} alt="image" key={image.id} className="w-full h-52 object-cover" />
            })}
        </div>
    )
}