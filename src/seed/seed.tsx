import { SeedData } from "@/interfaces";
import { BsDatabaseUp } from 'react-icons/bs';

export const initialData : SeedData = {
    categories : [ 
      {
        codigo: 'SO',  
        name: 'Sale Operation',
        subCategories: [
          { id: 1,
            name: 'ICS',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 2,
            name: 'DMS',
            icon: <BsDatabaseUp />,
          },
          { 
            id: 3,
            name: 'Comisiones',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 4,
            name: 'S&OP',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 5,
            name: 'Operaciones Comerciales',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 6,
            name: 'Soporte Comercial y de Sistemas',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 7,
            name: 'Trabajo en proceso',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 8,
            name: 'Operaciones en campo',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 9,
            name: 'Servicios Especializado en campo',
            icon: <BsDatabaseUp /> 
          },
        ]
      },
      {
        codigo: 'B2C',  
        name: 'B2C',
        subCategories: [
          { id: 1,
            name: 'Prepago',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 2,
            name: 'Pospago',
            icon: <BsDatabaseUp />,
          },
          { 
            id: 3,
            name: 'Home',
            icon: <BsDatabaseUp /> 
          }
        ]
      },
      {
        codigo: 'SS',  
        name: 'Shared Services',
        subCategories: [
          { id: 1,
            name: 'Regional Station SCM',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 2,
            name: 'Admon & Supply Chain',
            icon: <BsDatabaseUp />,
          },
          { 
            id: 3,
            name: 'Pospago GTM',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 4,
            name: 'Customer Experience',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 5,
            name: 'Negocios de suscripción',
            icon: <BsDatabaseUp /> 
          }
        ]
      },
      {
        codigo: 'B2B',  
        name: 'B2B',
        subCategories: [
          { id: 1,
            name: 'Ventas B2B',
            icon: <BsDatabaseUp /> 
          },
          { 
            id: 2,
            name: 'Dasboard B2B',
            icon: <BsDatabaseUp />,
          }
        ]
      }
  
  
    ]
  }