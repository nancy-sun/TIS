import "./Card.scss";

export default function Card() {
    return (
        <div className="card">
            <img className="card__img" src="" alt="destination image" />
            <div className="card__info">
                <h3 className="card__title">place</h3>
                <p className="card__price">$ 1234</p>
                <p className="card__description">description</p>
                <a className="card__link" href="">get package</a>
            </div>
        </div>
    )
}
