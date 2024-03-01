export type TypeSingleProject = {
  id: string;
  name: string;
  category: string;
  branch: string;
  images?: UrlImage[];
};

export interface UrlImage {
  id: string,
  url_image: JSON,
}