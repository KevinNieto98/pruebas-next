import { Card, CardBody, CardHeader, Switch } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="ml-8">

      <Switch defaultSelected>
        Modo de favoritos
      </Switch>
      </div>

      <div className="gap-8 columns-4 mt-5">

        <Card className="w-64 mx-auto">
          <CardHeader className="pb-3 pt-3 flex flex-col items-center bg-blue-600 min-h-10">
            <p className="text-base font-bold text-white">Sales Operations</p>
            <small className="text-xs text-white">SO</small>
          </CardHeader>
          <CardBody className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-md"
              src="/imgs/logo-SO.png"
              width={150}
              height={40}
            />
          </CardBody>
        </Card>

        <Card className="w-64 mx-auto">
          <CardHeader className="pb-3 pt-3 flex flex-col items-center bg-blue-700 min-h-10">
            <p className="text-base font-bold text-white">B2C</p>
            <small className="text-xs text-white">B2C</small>
            {/* <h4 className="font-bold text-base">Frontend Radio</h4> */}
          </CardHeader>
          <CardBody className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-md"
              src="/imgs/logo-SO.png"
              width={150}
              height={40}
            />
          </CardBody>
        </Card>

        <Card className="w-64 mx-auto">
          <CardHeader className="pb-3 pt-3 flex flex-col items-center bg-blue-800 min-h-10">
            <p className="text-base font-bold text-white">Shared Services</p>
            <small className="text-xs text-white">SS</small>
            {/* <h4 className="font-bold text-base">Frontend Radio</h4> */}
          </CardHeader>
          <CardBody className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-md"
              src="/imgs/logo-SO.png"
              width={150}
              height={40}
            />
          </CardBody>
        </Card>

        <Card className="w-64 mx-auto">
          <CardHeader className="pb-3 pt-3 flex flex-col items-center bg-blue-900 min-h-10">
            <p className="text-base font-bold text-white">B2B</p>
            <small className="text-xs text-white">B2B</small>
            {/* <h4 className="font-bold text-base">Frontend Radio</h4> */}
          </CardHeader>
          <CardBody className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-md"
              src="/imgs/logo-SO.png"
              width={150}
              height={40}
            />
          </CardBody>
        </Card>

      </div>


    </>

  );
}
