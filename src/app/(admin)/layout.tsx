import { NavBar, Sidebar, DropdownSpace } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <NextUIProvider>
    <main className="min-h-screen">
      <NavBar/>
      {/* <DropdownSpace/> */}

      <div className="px-0">
        { children }
      </div>

    </main>
    </NextUIProvider>

  );
}