import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppRouter from "./AppRouter";
import ReactDOM from "react-dom";

if (document.getElementById('root')) {
    ReactDOM.render(<AppRouter />, document.getElementById('root'));
}
