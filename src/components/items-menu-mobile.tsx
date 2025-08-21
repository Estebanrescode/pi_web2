
import { Menu } from "lucide-react";
import { Popover, PopoverContent , PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return ( 
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/categorias/Hombres" className="block">Hombre</Link>
            <Link href="/categorias/Mujeres" className="block">Mujer</Link>
        </PopoverContent>
    </Popover>
  );
}
export default ItemsMenuMobile;