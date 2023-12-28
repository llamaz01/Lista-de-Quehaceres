

import { Component } from "react";
import styles from "./PersonCard.module.css";


class PersonCard extends Component {
    constructor(props) {
        super(props);
        const { age } = this.props;
        this.state = {
            age: age,
        };
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        const handleBirthday = () => {
            console.log(this.state);
            this.setState({ age: this.state.age + 1 });

        };

        return (
            <div className={styles.personCard}>
                <h1>{lastName},{firstName}</h1>
                <p>Edad: {this.state.age}</p>
                <p>Color Cabello: {hairColor}</p>
                <button type="button" onClick={handleBirthday} >Cumpleaños {firstName} {lastName}</button>

                {
                    
                }

            </div>
        )
    }
}

export default PersonCard;