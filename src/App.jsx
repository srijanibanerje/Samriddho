
import Home from "./Components/Home"
// import Banner from "./Components/Banner"
import Mainlayout from "./Components/Mainlayout"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Mainlayout><Home/></Mainlayout>}/>
      </Routes>
     </Router>
     
    </>
  )
}

export default App
