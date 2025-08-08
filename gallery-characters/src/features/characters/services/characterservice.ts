import jikanapi from "@/api/api";
import type { GetCharactersParams } from "@/features/filters/types/jikan";
import type { Character } from "../types/character";
import type { ApiResponse } from "@/types/pagination";

async function getCharacters(params: GetCharactersParams): Promise<ApiResponse<Character>> {
    const response = await jikanapi.get('/characters', {
        params
    });
    return response.data;
}

async function getCharacterFull(id: number): Promise<Character> {
  const { data } = await jikanapi.get<{ data: Character }>(`/characters/${id}/full`);
  return data.data;
}

export { getCharacters, getCharacterFull };