'use client'

import { CategoryMenu } from "@/interfaces";
import { PiChartLineUpLight } from "react-icons/pi";
import { Card } from "../atoms";

interface Props {
  data : CategoryMenu[] 
}

export const CardGrid = ({ data  }: Props) => {


  return (
    <div className="justify-center  items-center mt-5 ">
      <div className="grid grid-cols-3 gap-3  w-11/12  mx-auto ">
          {
        data.map( data => (
          <Card
            key={ data.codigo }
            name = {data.name}
            codigo = {data.codigo}
          />
        ) )
      }
      </div>
    </div>
  );
};