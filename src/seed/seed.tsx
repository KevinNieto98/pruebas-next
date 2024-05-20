import { SeedData } from "@/interfaces";

export const initialData : SeedData = {
    menuItem : [ 
      {
        key: 1,  
        name: 'Favoritas',
        icon: 'FaLightbulb',
        subMenuItem: [
          { id: 1,
            name: 'New file',
            
          },
          { 
            id: 2,
            name: 'Copy link',
            
          },
          { 
            id: 3,
            name: 'Edit file',
            
          },
          { 
            id: 4,
            name: 'Delete file',
            
          }
        ]
      },
      {
        key: 2,  
        name: 'Paginas de Interes',
        icon: 'FaHeart',
        subMenuItem: [
          { id: 1,
            name: 'New file',
            
          },
          { 
            id: 2,
            name: 'Copy link',
            
          },
          { 
            id: 3,
            name: 'Edit file',
            
          },
          { 
            id: 4,
            name: 'Delete file',
            
          }
        ]
      }
      

  
  
    ]
  }