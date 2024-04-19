export interface  SubCategoryMenu {
    id: number,
    name: string,
    icon :  JSX.Element 
  }
  
  
export interface CategoryMenu {
    codigo: string,
    name: string,
    subCategories : SubCategoryMenu[] 
  }
  
  export  interface SeedData {
    categories: CategoryMenu[];
  }
  
