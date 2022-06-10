import React from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import Hero from "../../components/Hero/Hero"
import "./Main.scss";


export default class Main extends React.Component {
    state = {
        destinations: []
    }

    //get destinations by category and set to state
    getDestinations = (category) => {
        axios.get(`http://localhost:8080/destinations/${category}`)
            .then(response => {
                this.setState({ destinations: response.data })
            }).catch(e => console.log(e))
    }

    componentDidMount() {
        this.getDestinations("EmotionalQueen");
    }

    handleSelector = (event) => {
        event.preventDefault();
        this.getDestinations(event.target.options.value)
}

    render() {
        return (
            <main className="main">
                <Hero handleSelector={this.handleSelector}/>
                <Cards destinations={this.state.destinations} /> 
            </main>
        )
    }

}