import React from "react";
import Header from "../../component/Header/Header";
import Home from "../../component/Home/Home";
import Consultation from "../../component/Consultation/Consulatation";
import OurWork from "../../component/OurWork/OurWork";
import Surface from "../../component/Surface/Surface";
import Commercial from "../../component/Commercial/Commercial";
import Faq from "../../component/FAQ/Faq";
import Query from "../../component/Query/Query";
const LandingPage = () => {
    return (
        <div>
          <Header />
          <Home />
          <Consultation />
        <OurWork />
        <Surface />
        <Commercial />
        <Faq />
        <Query />
        </div>
    );
}

export default LandingPage;