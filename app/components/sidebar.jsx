import { REACT_CARDS } from "./REACT_CARDS"
import Body from "./body"
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
