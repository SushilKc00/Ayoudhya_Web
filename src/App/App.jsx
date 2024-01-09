import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { OurService } from "../Pages/OurService/OurService";
import { Rooms } from "../Pages/Rooms/Rooms";
import { Resturant } from "../Pages/Resturant/Resturant";
import { Contact } from "../Pages/ContactUs/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our_service" element={<OurService />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
