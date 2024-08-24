import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import React from 'react'
import { CartProvider} from "./context/context.js";
ReactDOM.render(
  // <h1>hi</h1>,
   <CartProvider>
    <App></App>
   </CartProvider>,
    
  
  
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

