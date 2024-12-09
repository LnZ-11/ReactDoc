import { REACT_CARDS } from "./REACT_CARDS"
import Cards from "./cards"
export default function Sidebar(){
    const filter= [...new Set(REACT_CARDS.map((card) => card.category))]
    return(
            <div className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
                {filter.map((c) => (
                    <div key={c} className="">
                        <button key={c}>{c}</button>
                    </div>
            ))}
            </div>
    )
}
export function Body(props){
    return(
        <div className="flex flex-row flex-wrap justify-items-center space-x-4 space-y-4 mt-48">
            {REACT_CARDS.filter((card) => card.category === props.category).map((card) => (
                <Cards name={card.name} category={card.category} url={card.url} key={card.name} />
            ))}
        </div>
    )
}
