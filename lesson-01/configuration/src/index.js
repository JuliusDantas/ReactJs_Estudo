import react from "react"
import reactDOM from "react-dom"
import "./style.CSS"

const App = () => {
    
    return (
        <div className="APP">
            Hello World
        </div>
    )
}

const rootElement = document.getElementById("root")
reactDOM.render(<App />, rootElement)