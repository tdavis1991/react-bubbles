import React, { useState } from 'react';
import api from '../utils/api';
import '../styles.scss';

export default function AddBubbles() {
    const [bubbles, setBubbles] = useState({
        color: "",
        code: {
            hex: ""
        }
    })

    const handleSubmit = event => {
        event.preventDefault()

        api()
            .post("/api/colors", bubbles)
                .then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
    }

    const handleChange = event => {
        setBubbles({
            ...bubbles, 
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className="add-bubbles">
            <input
                className="input-styles"
                type="text"
                name="color"
                placeholder="  Color Name"
                value={bubbles.color}
                onChange={handleChange}
            />
            <input
                className="input-styles"
                type="text"
                name="hex"
                placeholder="  Color Code"
                value={bubbles.code.hex}
                onChange={e => {
                    setBubbles({
                        ...bubbles,
                        code: {hex: e.target.value}
                    })
                }}
            />
            <button className="button-styles" type="submit">Add Bubble</button>
        </form>
    )
}