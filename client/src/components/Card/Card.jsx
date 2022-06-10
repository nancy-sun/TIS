import "./Card.scss";

export default function Card({ description, destination, image, price, url }) {
    return (
        <div className="card">
            <div className="card__img" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card__info">
                <h3 className="card__title">{destination}</h3>
                <p className="card__price">{price}</p>
                <p className="card__description">{description}</p>
            </div>
            <a className="card__link" target="_blank" href={url}>get package</a>
        </div>
    )
}
