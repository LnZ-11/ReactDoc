import Button from "./button"
import ReactSvg from "./ReactSvg"
import {ShoppingBasket, User} from "lucide-react"
export default function Header(){
    return <div className="flex flex-row mt-4 items-center fixed top-0 left-0 right-0">
        <ReactSvg className="m-4" size={50}  />
        <h1 className="text-3xl font-bold m-4">ReactJourey</h1>
        <div className="flex ml-auto h-10 items-center">
        <Button intent="secondary" size="medium" className="ml-auto font-bold text-2xl bg-tranparent transition" ><ShoppingBasket /></Button>
        <Button intent="secondary" size="medium" className="ml-auto font-bold text-2xl bg-tranparent" ><User /></Button>
        </div>
    </div> 
}