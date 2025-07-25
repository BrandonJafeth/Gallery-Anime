
import { useQuery } from '@tanstack/react-query';
import { getAnimeById } from '../services/AnimeService';



function useAnime(id: number)
{
    return useQuery({

    queryKey: ['anime', id],
    queryFn: () => (id ? getAnimeById(id) : Promise.resolve(undefined)),
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // 10 minutes
});
}

export { useAnime };