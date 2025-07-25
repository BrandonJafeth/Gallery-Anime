import type { Images } from "./images";


 interface MangaShort {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}

export type { MangaShort };