import React, { useState, useEffect } from "react";
import { fetchData } from "./api";

import styles from "./App.module.css"

const App = () => {
    const [title, setTitle] = useState(undefined);
    const [url, setUrl] = useState(undefined);
    const [explanation, setExplanation] = useState(undefined);

    useEffect(() => {
        fetchData()
            .then(
                (result) => {
                    setTitle(result?.data?.title);
                    setUrl(result?.data?.url);
                    setExplanation(result?.data?.explanation);
                })
            .catch(
                (error) => {
                    setTitle("Internal Server Error");
                    setUrl("");
                    setExplanation("The web application is facing some issues, currently! Please return at another time!");
                    console.log(error);
                });
    });

    return (
        <div className={styles.containerOuter}>
            <div className={styles.containerInner}>
                <div className={styles.header}>
                    <h1>NASA Astronomy Picture of the Day</h1>
                </div>
            </div>
            <div className={styles.containerInner}>
                {/* <img className={styles.image} src={url} alt={title} /> */}
                <video className={styles.image} src={url} alt={title} controls></video>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <p>{explanation}</p>
                </div>
            </div>
        </div>
    );
}

export default App;