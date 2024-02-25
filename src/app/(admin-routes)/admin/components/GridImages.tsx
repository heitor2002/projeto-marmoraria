import DeleteButton from "./DeleteButton"

interface DataImages{
    id: string,
    url_image: string
}

export default async function GridImages(){
    const response = await fetch("http://localhost:3000/api/images")
    const data:DataImages[] = await response.json()

    return(
        <div className="grid grid-cols-3 gap-3">
            {data.map(url => {
                return (
                    <div key={url.id} className="relative img-delete-button-animation">
                        <img src={url.url_image} alt="" className="w-full h-40 object-cover" />
                        <div className="w-full h-10 p-1 flex justify-end hidden-delete-button">
                            <DeleteButton id={url.id} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}