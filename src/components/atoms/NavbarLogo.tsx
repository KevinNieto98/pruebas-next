
import Image from 'next/image';
import Link from 'next/link';

export const NavbarLogo = () => {

  return (
    <>
        <Link href="/"  className="mx-1 p-2 hover:bg-blue-950 rounded " >
          <Image
              src= '/imgs/app-360-logo.png'
              alt="Prueba"
              width={75}
              height={4}
              className="h-6"
              />
        </Link>
    </>
  );
};