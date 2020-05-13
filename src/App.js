import React from "react";
import { fetchData } from "./api";

import styles from "./App.module.css"

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        if (fetchedData.data !== undefined) {
            this.setState({ data: fetchedData.data });
        } else {
            return false;
        }
    }

    render() {
        const { data: { date, explanation, title, url } } = this.state;
        return (
            <div className={styles.containerOuter}>
                <div className={styles.containerInner}>
                    <div className={styles.header}>
                        <h1>NASA Astronomy Picture of the Day for {new Date(date).toDateString()}</h1>
                    </div>
                </div>
                <div className={styles.containerInner}>
                    <img className={styles.image} src={url} alt={title} />
                    <div className={styles.text}>
                        <h1>{title}</h1>
                        <p>{explanation}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;