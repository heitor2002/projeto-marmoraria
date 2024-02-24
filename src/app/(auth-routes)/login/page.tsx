import LoginForm from "./components/LoginForm";

export default function LoginPage(){
    return(
        <section className="w-full bg-zinc-900">
            <div className="container max-w-lg flex justify-center items-center min-h-screen pb-24">
                <LoginForm />
            </div>
        </section>
    )
}