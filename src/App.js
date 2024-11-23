import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/nav"


export default function App(){
    return(

        <div>
            <Nav/>
            <Routes>
            <Route path="/" exact  Component = {Home}/>
           </Routes>


        </div>

    )
}
   