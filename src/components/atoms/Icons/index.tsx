import React from "react";
import { FaHeart, FaLightbulb } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

interface Props {
    name: string;
    style?: React.CSSProperties;
}

export const Icons = ({ name,style, ...rest }: Props) => {
  switch (name) {
    case "FaLightbulb":
      return <FaLightbulb style={style} {...rest} />;
    case "FaHeart":
      return <FaHeart  style={style} {...rest} />;
    case "IoNotifications":
      return <IoNotifications  style={style} {...rest} />;
    default:
      return null;
  }
};
