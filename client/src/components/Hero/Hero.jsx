import "./Hero.scss";

function Hero ({handleSelector}) {
    return (
    <section>
        <h1>How do you feel today?</h1>
        <form onSubmit={handleSelector} className="" id="inputForm">
        <select name="options" id="options">
            {/* <option value="mood">Let's find the best place that match your mood!</option> */}
            <option value="EmotionalQueen">Emotional Queen</option>
            <option value="BadBoy">Bad Boy</option>
            <option value="RunAway">Run Away</option>
        </select>
        <button>find my place</button>
      </form>
    </section>
    )
};

export default Hero;