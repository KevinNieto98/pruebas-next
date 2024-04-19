import { Navbar, Sidebar, DropdownSpace } from "@/components";


export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <DropdownSpace/>

      <div className="px-0">
        { children }

      </div>

    </main>
  );
}