import { useCharacters } from "../hooks/useCharacters";

import CharacterModal from "./CharacterModal";



function CharactersGallery() {
    const { data: characters, isLoading, error } = useCharacters({ page: 1 });
 

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
  if (!characters || characters.length === 0) return <div>No se encontraron personajes.</div>;
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {characters.map(character => {
        return (
          <CharacterModal
            key={character.mal_id}
            character={character}
          />
        )
      })}
    </div>
    </>
  )
}

export default CharactersGallery
