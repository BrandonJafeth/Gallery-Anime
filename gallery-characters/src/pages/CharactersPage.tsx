
import CharactersGallery from "../features/characters/components/CharactersGallery";



export default function CharactersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <CharactersGallery />
      </main>
    </div>
  );
}
