import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { NavbarMobile } from "./components/navbar-mobile";
import { Navbar } from "./components/navbar"
import { Auth } from "./pages/auth"
import { Home } from "./pages/home"
import { CreatePatch } from "./pages/create-patch"
import { UpdatePatch} from "./pages/update-patch"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /><NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-patch" element={<CreatePatch />} />
          <Route path="/update-patch" element={<UpdatePatch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;