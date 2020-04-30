import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "./Card";

export default class CardList extends Component {
state = {
    cityName: [
        { city_id: 2643744 },
        { city_id: 2988507 },
        { city_id: 5128581 },
        { city_id: 2147714 },
        { city_id: 2950159 },
        { city_id: 3117735 }
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