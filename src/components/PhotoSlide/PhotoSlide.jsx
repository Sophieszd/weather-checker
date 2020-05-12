import React, { Component } from "react";
import styles from "./PhotoSlide.module.scss";
import SimpleImageSlider from "react-simple-image-slider";


export default class PhotoSlide extends Component {
    render() {
        const images = [
            { url: "../../static/images/london.png" },
            { url: "../../static/images/paris.png" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];
        return (
            <section>
                {/* <div className={styles.photoBox}> */}
                    {/* <div>
                        <img className={styles.photo} src={require("../../static/images/london.png")}/>
                    </div>
                    <div>
                        <img className={styles.photo} src={require("../../static/images/paris.png")}/>
                    </div> */}
                {/* </div> */}
                <SimpleImageSlider className={styles.photoBox}
                    width={300}
                    height={300}
                    images={images}
                />

             
            </section>
        )
    }
}