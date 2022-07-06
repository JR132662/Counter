//import react into the bundle
import React from "react";
import ReactDOM, { render } from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx"

//render your react application
ReactDOM.render(<Counter/>, document.querySelector('#app'));

let Number = 0;
setInterval(()=>{
    Number++
    ReactDOM.render(<Counter number={Number}/>,document.querySelector('#app'))
}, 1000)


