import { SeedData } from "@/interfaces";
import { BsDatabaseUp } from "react-icons/bs";
import { NavbarContainer } from "../molecules";
import { DropdownContainer } from "../molecules/DropdownContainer";
import { initialData } from "@/seed";



export const DropdownSpace  = () => {
    const {categories} = initialData 
    return (
        <div className="flex absolute  items-start justify-start">
                  {
        categories.map( categories => (
          <DropdownContainer
            key={ categories.id }
            subCategories = {categories.subCategories}
          />
        ) )
      }
        </div>

    );
};