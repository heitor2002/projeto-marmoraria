export type TypeSingleProject = {
  id: Number;
  name: String;
  category: String;
  branch: String;
  urlImages: UrlImage[];
};

interface UrlImage {
  src: string
  height: number
  width: number
  blurDataURL: string
  blurWidth: number
  blurHeight: number
}
