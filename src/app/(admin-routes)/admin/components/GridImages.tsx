import DeleteButton from "./DeleteButton"

interface DataImages{
    _id: string,
    urlImage: string
}

export default async function GridImages(){
    const response = await fetch(`${process.env.NEXT_AUTH_URL}api/images`, {cache: "no-cache"})
    const data:DataImages[] = await response.json()

    return(
        <div className="grid grid-cols-3 gap-3">
            {data.map(url => {
                return (
                    <div key={url._id} className="relative img-delete-button-animation">
                        <img src={url.urlImage} alt="" className="w-full h-40 object-cover" />
                        <div className="w-full h-10 p-1 flex justify-end hidden-delete-button">
                            <DeleteButton id={url._id} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}