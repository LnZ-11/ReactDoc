'use client'
import Link from "next/link"
import { REACT_CARDS } from "./REACT_CARDS"
import { useSearchParams } from 'next/navigation'
import Cards from "./cards"
export default function Sidebar(){
    const filter= [...new Set(REACT_CARDS.map((card) => card.category))]
    return(
<div>
    <div className="mt-24 flex w-full flex-wrap gap-4 justify-center items-center">
        <Link href={"/"} className="font-bold text-1xl">
        All
        </Link>
        {filter.map((category) => (
            <Link href={`/?filter=${category}`} key={category} className="capitalize font-bold text-1xl">
        {category}
        <div></div>
        </Link>
        ))}         
    </div>
    <div className=" flex flex-row flex-wrap justify-center space-x-4 space-y-4 mt-24">
    <Item/>
    </div>
</div>
    )
}
export function Item(){
    const filterParams = useSearchParams()
    const filter = filterParams.get('filter')
    return(
    <>
        {REACT_CARDS.filter((card) => !filter || card.category === filter).map((card) => (
            <Cards name={card.name} category={card.category} url={card.url} hideCategory={filter===null ? true : false} key={card.name} />
        ))}
    </>
    )
}