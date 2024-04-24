"use client";

import{ useQuery } from "convex/react";
import{ api } from "@/convex/_generated/api";

import { json } from "stream/consumers";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoard } from "./empty-board";
import { BoardCard } from "../board-card";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps{
    orgId:string;
    query:{
        search?:string;
        favorites?: string;
    };
};
export const BoardList =(  { orgId,
    query,
}:BoardListProps)  =>  {
const data = useQuery(api.boards.get,{ orgId });

if (data === undefined) {
    return( <div>Loading...</div>
)
  }

if(!data?.length && query.search){
    return(
      <EmptySearch/>
    );
};
if(!data?.length && query.favorites){
    return(
        <div>
           <EmptyFavorites/>
        </div>
    );
};

if(!data?.length){
    return(
        <div>
<EmptyBoard/>
        </div> 
    );
};
    return(
        <div>
           <h2 className="text-3xl">
           {query.favorites ?  "Favorite Boards" : "Team Boards"}
           </h2>
           <div className="grid frid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
            2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton  orgId={orgId}/> 


                {data?.map((board)=>(
                   <BoardCard
                    key={board._id}
                    id={board._id}
                    title={board.title}
                    imageUrl={board.imageUrl}
                    authorId={ board.authorId}
                    authorName={board.authorName}
                    createdAt={board._creationTime}
                    orgId={board.orgId}
                    isFavorite={false}
                    />
                ))}

           </div>
        </div>
    );
 
};