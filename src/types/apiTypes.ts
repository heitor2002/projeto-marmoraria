export type TypeSingleProject = {
  id: number;
  name: string;
  category: string;
  branch: string;
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
