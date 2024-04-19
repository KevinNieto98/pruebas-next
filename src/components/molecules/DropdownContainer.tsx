'use client'

import { SubCategoryMenu } from "@/interfaces";
import Link from "next/link";
import {  IoHomeOutline } from "react-icons/io5";
import { DropdownItem } from "../atoms";

interface Props {
  subCategories : SubCategoryMenu[] 
}

export const DropdownContainer = ({subCategories }: Props ) => {


  return (
  <div id="dropdown" className="inline-block z-10 items-center self-start  w-36 mx-0.5 origin-top-right rounded-b-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <ul className="text-sm text-gray-700 dark:text-gray-200"  aria-labelledby="dropdownDefaultButton">


      {
        subCategories.map( subCategories => (
          <DropdownItem
            key={ subCategories.id }
            name = {subCategories.name}
            icon = {subCategories.icon}
          />
        ) )
      }

    </ul>
  </div>
  );
};