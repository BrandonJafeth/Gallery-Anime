import type { AnimeShort } from "@/features/anime/types/anime";
import type { Images } from "@/features/shared/types/images";
import type { MangaShort } from "@/features/shared/types/mangas";


 interface CharacterAnimeRelation {
  role: string;
  anime: AnimeShort;
}

 interface CharacterMangaRelation {
  role: string;
  manga: MangaShort;
}

 interface Person {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
}

 interface CharacterVoice {
  language: string;
  person: Person;
}

 interface Character {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
  anime: CharacterAnimeRelation[];
  manga: CharacterMangaRelation[];
  voices: CharacterVoice[];
}

export type { Character,CharacterAnimeRelation, CharacterMangaRelation, CharacterVoice, AnimeShort, MangaShort, Person };