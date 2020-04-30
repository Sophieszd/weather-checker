import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import NavItem from "../NavBar/NavItem/NavItem";

export default class NavBar extends Component {
    render() {
        return (
            <section className={styles.NavBar}>
                <h1>Weather Checker</h1>
                <ul>
                    <li className={styles.pageNav}>Weather</li>
                    <li className={styles.pageNav}>Quiz</li>
                    <NavItem route="/weather" name="Weather" />
                </ul>
            </section>
        )
    }
}