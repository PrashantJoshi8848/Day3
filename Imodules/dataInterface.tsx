export interface datas {
  id: Number;
  title: String;
  description: String;
  rating: Number;
  stock: Number;
  brand: String;
  category: String;
  thumnnail: String;
  images: String[];
}

export interface products {
  products: datas[];
}
