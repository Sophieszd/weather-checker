import React, { Component } from "react";
import styles from "./Card.module.scss";

export default class Card extends Component {
    render() {
        return (
            <section className={styles.CardBox}>
                <div className={styles.Card}>
                    <h1>{this.props.city.name}</h1>
                    
                    <article className={styles.weatherData}>
                    {/* <img className={styles.photo} src="" alt="City"/> */}
                    <p>Temperature: {this.props.city.main.temp}&deg;C</p>
                    <p>{this.props.city.main.description}</p>
                    <p>Humidity: {this.props.city.main.humidity}%</p>
                    <p>Min Temp: {this.props.city.main.temp_min}&deg;C</p>
                    <p>Max Temp: {this.props.city.main.temp_max}&deg;C</p>
                    </article>
                </div>
            </section>
        )
    }
}
