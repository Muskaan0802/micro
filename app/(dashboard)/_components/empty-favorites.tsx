import Image from "next/image";

export const EmptyFavorites =()=>{
    return (
        <div className="h-full flex flex-col mt-60 items-center justify-center">
            <Image src="/empty-favorites.svg"
            height={140}
            width={140}
            alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favorites found
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                try favoriting a board
            </p>
        </div>
    )
}