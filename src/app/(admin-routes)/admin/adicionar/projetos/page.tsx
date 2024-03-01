import FormProjects from "../../components/FormProjects";

export default async function ProjectForm(){
    const response = await fetch("http://localhost:3000/api/images")
    const images = await response.json()

    return(
        <div>
            <h2>Adicionar novo projetos</h2>
            <FormProjects imagesProps={images} />
        </div>
    )
}