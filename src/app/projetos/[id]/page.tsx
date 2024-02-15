import GallerySinglePage from "../components/GallerySinglePage";

export default async function SinglePageProjects(){
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json()
    
    return(
        <section>
            <GallerySinglePage dataProject={data[0]} />
        </section>
    )
}