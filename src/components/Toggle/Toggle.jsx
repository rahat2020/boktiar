import React, { useContext, useEffect, useState } from 'react'
import './Toggle.css';
import moon from '../../img/moon.png';
import sun from '../../img/sun.png';

export default function Toggle() {
    const [theme, setTheme] = useState("light-theme")
    // console.log(theme)
    const handleClick = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme")
        } else {
            setTheme("dark-theme")
        }
    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <>
            <div className="t">
                <img src={sun} alt="" className="t-icon" />
                <img src={moon} alt="" className="t-icon" />
                {
                    theme === "dark-theme" ?
                        <div
                            className="t-button left__bg"
                            onClick={() => handleClick()}
                        // style={{ left: theme.state.darkMode ? 0 : 25 }}
                        ></div>
                        :
                        <div
                            className="t-button light__bg"
                            onClick={() => handleClick()}
                        // style={{ left: theme.state.darkMode ? 0 : 25 }}
                        ></div>
                }
                {/* <div
                    className="t-button"
                    onClick={() => handleClick()}
                // style={{ left: theme.state.darkMode ? 0 : 25 }}
                ></div> */}
            </div>
        </>
    )
}
