import Cards from "./card"
import { REACT_CARDS } from "./REACT_CARDS"
export default function Body(props){
    return(
        <div className="flex flex-row flex-wrap justify-items-center space-x-4 space-y-4 mt-48">
            {REACT_CARDS.filter((card) => card.category === props.category).map((card) => (
                <Cards name={card.name} category={card.category} url={card.url} key={card.name} />
            ))}
        </div>
    )
}