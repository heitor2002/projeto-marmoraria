import FormProjects from "../../components/FormProjects";

export default async function ProjectForm(){
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/images`, {cache: "no-cache"})
    const images = await response.json()

    return(
        <div>
            <h2>Adicionar novo projetos</h2>
            <FormProjects imagesProps={images} />
        </div>
    )
}