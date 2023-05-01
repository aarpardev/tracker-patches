import React from "react";
import "./DefleMode.css";

export const DefleMode = () => {
    const setDefleMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'defle')
        localStorage.setItem("selectedTheme", "defle")
    }

    const setFurnaceMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'furnace')
        localStorage.setItem("selectedTheme", "furnace")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "defle") {
        setDefleMode()
    } else {

    }

    const toggleTheme = e => {
        if (e.target.checked) setFurnaceMode()
        else setDefleMode()

    }

    return (
        <div className='defle_mode'>
            <input
                className='defle_mode_input'
                type='checkbox'
                id='deflemode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "defle"}
            />
            <label className='defle_mode_label' for='deflemode-toggle'>
            </label>
        </div>
    );
};