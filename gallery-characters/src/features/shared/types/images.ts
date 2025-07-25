 interface ImageSet {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}
 interface Images {
  jpg: ImageSet;
  webp?: ImageSet;
}


export type { Images, ImageSet };