import { useState } from "react";
import type { Character } from "../types/character";
import CharacterCard from "./CharacterCard";
import type { Anime } from "@/features/anime/types/anime";
import { useCharacterFull } from "../hooks/useCharacterFull";
import ExpandableText from "@/components/ui/ExpandableText";
import { Dialog, DialogTrigger, DialogContent, DialogHeader,DialogTitle,DialogDescription} from '@/components/animate-ui/radix/dialog';

type Props = {
  character: Character;
  anime?: Anime;
};

function CharacterModal({ character }: Props) {
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useCharacterFull(character.mal_id, open);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <CharacterCard character={character} />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:max-w-lg md:max-w-xl sm:rounded-lg p-0 sm:p-4 flex flex-col max-h-screen">
        <DialogHeader className="p-4 pb-0 sm:p-0">
          <DialogTitle className="text-center text-base sm:text-lg">
            {isLoading ? "Cargando..." : error ? "Error" : data?.name || ""}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isLoading && "Cargando detalles..."}
            {error && "Error al cargar detalles."}
          </DialogDescription>
        </DialogHeader>
        {data && (
          <div className="flex flex-col gap-3 flex-1 items-center w-full p-4 sm:p-0">
            <img
              src={data.images?.webp?.image_url}
              alt={data.name}
              className="rounded-lg w-24 h-24 sm:w-28 sm:h-28 object-cover mx-auto"
            />
            <div className="flex flex-col flex-1 min-w-0 w-full">
              <div className="text-xs text-gray-500 mb-1 text-center min-h-[1.5em] max-h-[2.5em] overflow-hidden line-clamp-2">
                {data.nicknames?.length ? data.nicknames.join(", ") : "No Nicknames"}
              </div>
              <div className="mb-2 text-center">
                <span className="text-yellow-600 font-semibold text-sm">
                  ★ {data.favorites} Favorites
                </span>
              </div>
              <div className="text-xs mb-2 text-center">
                <b>Anime:</b>{" "}
                {data.anime && data.anime.length > 0
                  ? data.anime[0].anime.title
                  : "No Anime"}
              </div>
            </div>
          </div>
        )}
        {data && (
       <div className="mt-4 px-4 pb-4 max-h-[20vh] overflow-y-auto flex-shrink ">
            <ExpandableText
              text={data.about}
              className="text-xs text-muted-foreground"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CharacterModal;