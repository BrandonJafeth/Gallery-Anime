
 import type { GetCharactersParams } from '@/features/filters/types/jikan';
import {useQuery} from '@tanstack/react-query';
import { getCharacters } from '../services/characterservice';


function useCharacters(params: GetCharactersParams) {
    return useQuery({
        queryKey: ['characters', params],
        queryFn: () => getCharacters(params),
        staleTime: 1000 * 60 * 5,
   });
}



export { useCharacters };