import "./Hero.scss";
import heroImg from "../../assets/image/hero.png";

function Hero({ handleSelector }) {
    return (
        <div className="hero-wrap">
            <img className="hero__img" src={heroImg} alt="hero image" />
            <section className="hero">
                <h1 className="hero__title">How do you feel today?</h1>
                <form onSubmit={handleSelector} className="hero__form" id="inputForm">
                    <select name="options" id="options" className="hero__selector">
                        {/* <option value="mood">Let's find the best place that match your mood!</option> */}
                        <option value="EmotionalQueen">Emotional Queen</option>
                        <option value="BadBoy">Bad Boy</option>
                        <option value="RunAway">Run Away</option>
                    </select>
                    <button className="hero__submit">find my place</button>
                </form>
            </section>
        </div>
    )
};

export default Hero;