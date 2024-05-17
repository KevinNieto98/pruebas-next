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

        <Card className="py-2 w-64 mx-auto">
          <CardHeader className="pb-0 pt-1 px-2 flex flex-col items-center">
            <p className="text-base font-bold">Sales Operations</p>
            <small className="text-xs text-default-500">SO</small>
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

        <Card className="py-2 w-64 mx-auto">
          <CardHeader className="pb-0 pt-1 px-2 flex flex-col items-center">
            <p className="text-base font-bold">B2C</p>
            <small className="text-xs text-default-500">B2C</small>
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

        <Card className="py-2 w-64 mx-auto">
          <CardHeader className="pb-0 pt-1 px-2 flex flex-col items-center">
            <p className="text-base font-bold">Shared Services</p>
            <small className="text-xs text-default-500">SS</small>
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

        <Card className="py-2 w-64 mx-auto">
          <CardHeader className="pb-0 pt-1 px-2 flex flex-col items-center">
            <p className="text-base font-bold">B2C</p>
            <small className="text-xs text-default-500">B2C</small>
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
