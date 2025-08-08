
 import type { GetCharactersParams } from '@/features/filters/types/jikan';
import {useQuery} from '@tanstack/react-query';
import { getCharacters } from '../services/characterservice';
import type { ApiResponse } from '@/types/pagination';
import type { Character } from '../types/character';


function useCharacters(params: GetCharactersParams) {
    return useQuery<ApiResponse<Character>>({
        queryKey: ['characters', params],
        queryFn: () => getCharacters(params),
        staleTime: 1000 * 60 * 5,
    });
}



export { useCharacters };