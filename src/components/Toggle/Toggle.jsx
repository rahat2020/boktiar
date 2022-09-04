import React, { useContext } from 'react'
import './Toggle.css';
import moon from '../../img/moon.png';
import sun from '../../img/sun.png';
import { ThemeContext } from '../../Context/Context';

export default function Toggle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    }
    return (
        <div className="t">
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div
                className="t-button"
                onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}
            ></div>
        </div>
    )
}
