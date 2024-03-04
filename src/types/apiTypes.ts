export interface ProductProps {
  _id: string;
  productName: string;
  productCategory: string;
  productImage: string;
}

export interface TypeSingleProject {
  _id: string
  name: string
  category: string
  branch: string
  images: Image[]
  __v?: number
  views?: number
}

export interface Image {
  _id: string
  urlImage: string
}
