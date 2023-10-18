import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signin from "./pages/Signin"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Signout from "./pages/Signout"
import Header from "./components/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signout" element={<Signout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  )
}
