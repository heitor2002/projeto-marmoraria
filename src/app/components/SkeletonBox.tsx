export default function SkeletonBox(){
    return(
        <div className="container max-w-6xl grid grid-cols-4 gap-4 py-10">
            <div className="w-full h-60 bg-zinc-300 animate-pulse rounded-lg"></div>
            <div className="w-full h-60 bg-zinc-300 animate-pulse rounded-lg"></div>
            <div className="w-full h-60 bg-zinc-300 animate-pulse rounded-lg"></div>
            <div className="w-full h-60 bg-zinc-300 animate-pulse rounded-lg"></div>
        </div>
    )
}