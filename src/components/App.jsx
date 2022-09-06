import React from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./homepage/HomePage";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import AllServicesPage from "./allServices/AllServicesPage";
import Service from "./service/Service";
import Footer from "./Footer";

function App(){
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/services" element={<AllServicesPage />} />
                <Route path="/services/:service" element={<Service />} />
            </Routes>
            <Footer />
        </Router>)
        
}

export default App;