import jikanapi from "@/api/api";
import type { GetCharactersParams } from "@/features/filters/types/jikan";
import type { Character } from "../types/character";

async function getCharacters (params: GetCharactersParams = {}){
const response = await jikanapi.get<{ data: Character[] }>("/characters", {
  params :{
    page: params.page || 2,
    q: params.q || '',
    order_by: params.order_by || 'mal_id',
    sort: params.sort || 'asc',
    anime: params.anime || '',
    limit: params.limit || 25
  }
});
return response.data.data;
}

async function getCharacterFull(id: number): Promise<Character> {
  const { data } = await jikanapi.get<{ data: Character }>(`/characters/${id}/full`);
  return data.data;
}

export { getCharacters, getCharacterFull };