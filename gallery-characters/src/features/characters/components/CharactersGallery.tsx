import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterModal from "./CharacterModal";
import type { PaginationInfo } from "@/types/pagination";

type CharactersGalleryProps = {
  page: number;
  onPaginationData?: (pagination: PaginationInfo) => void; 
};

function CharactersGallery({ page, onPaginationData }: CharactersGalleryProps) {
  const { data: response, isLoading, error } = useCharacters({ page });

  
  useEffect(() => {
    if (response?.pagination && onPaginationData) {
      onPaginationData(response.pagination);
    }
  }, [response?.pagination, onPaginationData]);

  if (isLoading) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://media.tenor.com/onfz4T81HIUAAAAj/bronya-zaychik-honkai.gif"
        alt="Cargando personajes..."
        style={{ width: 200, height: 'auto', marginBottom: 16 }}
      />
    </div>
  );
  
  if (error) return <div>Error al cargar personajes</div>;
  if (!response?.data || response.data.length === 0) return <div>No se encontraron personajes.</div>;
  
  const characters = response.data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mr-8 ml-8">
      {characters.map(character => (
        <CharacterModal
          key={character.mal_id}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharactersGallery;