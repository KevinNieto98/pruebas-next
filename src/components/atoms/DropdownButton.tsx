interface Props {
    name: string;
}

export const DropdownButton = ({name  }: Props) => {
    return (
      <li className=' w-36 hover:bg-blue-800'>
        <button  className="flex  font-light text-xs items-center justify-center w-full py-2 px-3 text-white rounded  ">{name} 
          <svg className="w-2.5 h-2.5 ms-2.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>  
        </button>
      </li>
    );
};