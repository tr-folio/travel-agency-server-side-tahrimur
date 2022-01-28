import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Blogs from "./Blogs/Blogs";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;