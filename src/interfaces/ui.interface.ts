export interface  subMenuItem {
    id: number,
    name: string
  }
  
  
export interface menuItem {
    key: number,
    name: string,
    icon: string,
    subMenuItem : subMenuItem[] 
  }
  
  export  interface SeedData {
    menuItem: menuItem[];
  }
  
