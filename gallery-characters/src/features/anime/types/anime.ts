import type { Images } from "@/features/shared/types/images";

interface Anime {
mail_id: number;
title: string;
}

 interface AnimeShort {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}

export type { Anime, AnimeShort };