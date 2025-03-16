import { BrowserRouter,Routes,Route } from "react-router-dom"
import Loginpage from "./views/Loginpage.jsx"
import Homepage from "./views/Homepage.jsx"
import Aboutpage from "./views/Aboutpage.jsx"
import Contactpage from "./views/Contactpage.jsx"
import Registerpage from "./views/Registerpage.jsx"	

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/wow/contact" element={<Contactpage />} />
        <Route path="/sau/dti/regis/register" element={<Registerpage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
