import React from "react";
import  ReactDOM  from "react-dom";
import App from "./app"
import reducer,{ initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



ReactDOM.render(
    <StateProvider  initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider >

,document.getElementById("root"))
