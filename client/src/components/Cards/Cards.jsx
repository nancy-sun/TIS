import Card from "../Card/Card"
import "./Cards.scss";

export default function Cards({ destinations }) {
    return (
        <ul className="cards">
            {destinations.map((destination) => {
                return <Card {...destination} />
            })}
        </ul>
    )
}