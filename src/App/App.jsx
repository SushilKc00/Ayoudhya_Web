import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { OurService } from "../Pages/OurService/OurService";
import { Rooms } from "../Pages/Rooms/Rooms";
import { Resturant } from "../Pages/Resturant/Resturant";
import { Contact } from "../Pages/ContactUs/Contact";
import { Footer } from "../Components/Footer/Footer";
import ServiceContextProvider from "../Context/ServiceContextProvider";

function App() {
  return (
    <>
      <Router>
        <ServiceContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/our_service" element={<OurService />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/resturant" element={<Resturant />} />
            <Route path="/contact_us" element={<Contact />} />
          </Routes>
        </ServiceContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
