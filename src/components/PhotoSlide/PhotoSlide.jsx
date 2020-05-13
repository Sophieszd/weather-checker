import React, { Component } from "react";
import styles from "./PhotoSlide.module.scss";
import SimpleImageSlider from "react-simple-image-slider";


export default class PhotoSlide extends Component {
    render() {
        // const images = [
        //     { url: require("../../static/images/london.png") },
        //     { url: require("../../static/images/paris.png") },
        //     { url: require("../../static/images/newyork.png") },
        //     { url: require("../../static/images/sydney.png") },
        //     { url: require("../../static/images/berlin.png") },
        //     { url: require("../../static/images/madrid.png") },
        // ];
        return (
            <section className={styles.photoBox}>

                <img className={styles.photo} src={require("../../static/images/london.png")} />
                <img className={styles.photo} src={require("../../static/images/paris.png")} />
                <img className={styles.photo} src={require("../../static/images/newyork.png")} />
                <img className={styles.photo} src={require("../../static/images/sydney.png")} />
                <img className={styles.photo} src={require("../../static/images/berlin.png")} />
                <img className={styles.photo} src={require("../../static/images/madrid.png")} />
    
                {/* <SimpleImageSlider 
                    width={300}
                    height={300}
                    images={images}
                    
                    navStyle={2}
                    
                /> */}

             
            </section>
        )
    }
}