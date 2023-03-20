import Images from "./images";

export interface IBookUserCategories {
  id: number;
  title: string;
  path: string;
  description: string;
  idCategory: number;
  idUser: string;
  imagepaths: Images[];
  categorie: Categories;
  user: Omit<User, 'password' | 'email' | 'emailVerified'>;
};