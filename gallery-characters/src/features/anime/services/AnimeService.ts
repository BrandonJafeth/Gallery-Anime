import jikanapi from "@/api/api";
import type { Anime } from "../types/anime";


async function getAnimeById(id:number){
    const response =  await jikanapi.get<{ data: Anime }>(`/anime/${id}`);
    return response.data;
}


export { getAnimeById };