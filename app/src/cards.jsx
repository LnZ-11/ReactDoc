import { REACT_CARDS } from "./REACT_CARDS"
import ReactSvg from "./ReactSvg";
import Button from "./button";
import {BookText, PlusCircle} from "lucide-react"
import Link from "next/link";

export default function Cards(props, isAllCategory) {
    return (
        <div className="flex flex-col gap-8 w-96 ml-4 mt-4 border-2 border-sky-500 drop-shadow-lg rounded-2xl p-4">
            <div className="flex flex-row items-center">
            <ReactSvg size={50} />
            <h1 className="p-4 font-bold text-1xl">React</h1>
            </div>
            <div className=" text-3xl font-extrabold text-center">
                <p>{props.name}</p>
            </div>
            <div className="flex flex-row items-center">
            {!isAllCategory ? null : <p className="opacity-50 ml-2">{props.category}</p>}  
            <div className="flex ml-auto gap-4 items-center transition">
            <Button intent="secondary"><Link href={props.url}><BookText /></Link></Button>
            <Button intent="secondary"><PlusCircle /></Button>
            </div>
            </div>            
        </div>
    )
}