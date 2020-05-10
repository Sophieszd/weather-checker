import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "./Card";

export default class CardList extends Component {
state = {
    cityName: [
        { city_id: 2643744, image: require("../../static/images/london.png") },
        { city_id: 2988507, image: require("../../static/images/london.png") },
        { city_id: 5128581, image: require("../../static/images/london.png") },
        { city_id: 2147714, image: require("../../static/images/london.png") },
        { city_id: 2950159, image: require("../../static/images/london.png") },
        { city_id: 3117735, image: require("../../static/images/london.png") }
    ],
    filteredCities: []
}

componentDidMount() {
    let string = "";
    this.state.cityName.forEach(city => string += `${city.city_id},`)
    fetch(`https://api.openweathermap.org/data/2.5/group?id=${string}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
        .then(response => response.json())
        .then(cities => {
            this.setState({ filteredCities: cities['list'] });
        })
}

    render() {
        return (
            <section className={styles.CardList}>
                {this.state.filteredCities.map((city, index) => (
                    <Card city={city} key={index}/>  
                ))}
            
            </section>
        )
    }
}