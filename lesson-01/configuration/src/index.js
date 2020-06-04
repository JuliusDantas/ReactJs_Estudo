import react from "react"
import reactDOM from "react-dom"
import "./style.CSS"

function sum(a, b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="title">
            Julius Dantas - ReactJS
        <h5> soma: {sum(20, 30)} </h5>
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
reactDOM.render(<App />, rootElement)