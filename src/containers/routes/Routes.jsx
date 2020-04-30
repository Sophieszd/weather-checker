import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import CardList from "../../components/CardList";

export default class Routes extends Component {
    render() {
        return (
            <section>
            <Router>
                <Redirect noThrow from="/" to="weather" />
                {/* <CardList path="weather" /> */}
            </Router>
            </section>
        )
    }
}