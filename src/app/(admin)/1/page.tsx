import { Sidebar } from "@/components";
import { CardGrid } from "@/components/molecules";
import { initialData } from "@/seed";


export default function Page() {
  const {categories} = initialData 
  return (
    <div className="flex">
      <Sidebar />
      <div className="m-4  bg-white rounded-lg p-10">
        <h1 className="text-3xl font-semibold ">Pagina Principal</h1>
        <h1 className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus ullam similique fugit illo pariatur quas. Commodi soluta sunt, harum itaque unde inventore dolorum nisi voluptatem voluptatibus eos repellendus natus!</h1>

        <CardGrid data={categories}/>

      </div>
    </div>
  );
}
