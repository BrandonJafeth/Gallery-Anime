import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Character } from "../types/character";

type CharacterCardProps = {
  character: Character;
  animeId?: number;
  onClick?: (character: Character) => void;
};

function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <Card
      className="w-full cursor-pointer transition-transform hover:scale-105 h-72 flex flex-col justify-between"
      onClick={() => onClick?.(character)}
    >
      <CardHeader className="flex flex-col items-center gap-4 p-2 sm:p-4">
        <img
          src={character.images?.webp?.image_url}
          alt={character.name}
          className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full border shadow"
        />
        <CardTitle className="text-center text-lg font-bold">
          {character.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-end flex-1">
        <div className="text-xs text-muted-foreground text-center min-h-[1.5em] max-h-[2.5em] overflow-hidden line-clamp-2 w-full">
          {character.nicknames?.length
            ? character.nicknames.join(", ")
            : "No Nicknames"}
        </div>
        {character.favorites !== undefined && (
          <div className="mt-2 text-center text-yellow-600 font-semibold w-full">
            ⭐ {character.favorites} Favorites
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CharacterCard;