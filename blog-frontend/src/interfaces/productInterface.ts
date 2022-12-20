export interface Iarticle {
  data: any;
  map(arg0: (product: any) => JSX.Element): import("react").ReactNode;
  name: string;
  content: string;
  image: any;
  author: string;
  publishDate: string;
  category: string;
}

export interface Icategory {
  map(arg0: (product: any) => JSX.Element): import("react").ReactNode;
  name: string;
}
