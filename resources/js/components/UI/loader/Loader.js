import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
            <div className={classes.lds_ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
