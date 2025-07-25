import { useState } from "react";
import type { Character } from "../types/character";
import CharacterCard from "./CharacterCard";
import type { Anime } from "@/features/anime/types/anime";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/animate-ui/radix/popover";
import { useCharacterFull } from "../hooks/useCharacterFull";
import ExpandableText from "@/components/ui/ExpandableText";

type Props = {
  character: Character;
  anime?: Anime;
};

function CharacterModal({ character }: Props) {
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useCharacterFull(character.mal_id, open);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={false}>
      <PopoverTrigger asChild>
        <div>
          <CharacterCard character={character} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-xs sm:max-w-md md:max-w-lg p-4 rounded-lg">
        {isLoading && <div>Cargando...</div>}
        {error && <div>Error al cargar detalles.</div>}
        {data && (
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <div className="flex-shrink-0 flex justify-center md:block">
              <img
                src={data.images?.webp?.image_url}
                alt={data.name}
                className="rounded-lg w-24 h-24 sm:w-28 sm:h-28 object-cover mx-auto md:mx-0"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="font-bold text-lg truncate text-center md:text-left">{data.name}</h3>
              <div className="text-xs text-gray-500 mb-1 truncate text-center md:text-left min-h-[1.5em] max-h-[2.5em] overflow-hidden line-clamp-2">
                {data.nicknames?.length ? data.nicknames.join(", ") : "Sin apodos"}
              </div>
              <div className="mb-2 text-center md:text-left">
                <span className="text-yellow-600 font-semibold text-sm">
                  ★ {data.favorites}
                </span>
              </div>
              <div className="text-xs mb-2 text-center md:text-left">
                <b>Anime:</b>{" "}
                {data.anime && data.anime.length > 0
                  ? data.anime[0].anime.title
                  : "Sin animes"}
              </div>
            </div>
          </div>
        )}
        {data && (
          <div className="mt-4 max-h-32 overflow-y-auto pr-1">
            <ExpandableText
              text={data.about}
              className="text-xs text-muted-foreground"
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default CharacterModal;