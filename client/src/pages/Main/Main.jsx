import React from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import "./Main.scss";


export default class Main {
    state = {
        destinations: []
    }

    //get destinations by category and set to state
    getDestinations = (category) => {
        axios.get(`http://localhost:8080/${category}`)
            .then(response => {
                this.setState({ destinations: response.data })
            }).catch(e => console.log(e))
    }

    render() {
        return (
            <main className="main">
                <Cards destinations={this.state.destinations} />
            </main>
        )
    }

}