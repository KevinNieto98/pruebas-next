
import React from "react";
import {Switch} from "@nextui-org/react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

export const  SwitchDarkMode = () => {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
            <GoSun className={className} />
          ) : (
            <FaMoon className={className} />
          )
      }
    >
    </Switch>
  );
}
