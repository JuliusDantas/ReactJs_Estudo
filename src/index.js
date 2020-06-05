import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from './Button'

function sum(a, b) {
    return(a + b)
}

function plus(a, b) {
    alert(a * b)
}

function primeiroJSX() {
    return (
        <div className="title">
           <h1> Julius Dantas - ReactJS</h1>
        <h5> soma: {sum(20, 30)} </h5>
        <Button onClick={() => plus(10, 50)} name="Julius Dantas" />
        </div>
    )
    
}

const App = () => {
    
    return (
        <div className="APP">
            {primeiroJSX()}
            
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)