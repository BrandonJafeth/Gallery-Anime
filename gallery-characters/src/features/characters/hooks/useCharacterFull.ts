import { useQuery } from "@tanstack/react-query";
import { getCharacterFull } from "../services/characterservice";
import type { Character } from "../types/character";

export function useCharacterFull(id: number | undefined, enabled: boolean) {
  return useQuery<Character>({
    queryKey: ['character-full', id],
    queryFn: () => getCharacterFull(id!),
    enabled: !!id && enabled,
  });
}