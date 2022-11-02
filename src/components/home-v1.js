import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Featured from './section-components/featured';
import ProductV1 from './section-components/product-v1';
import About from './section-components/about';
import FunFact from './section-components/funfact';
import Testimonial from './section-components/testimonial';
import LatestPost from './blog-components/latest-news';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <About />
        <Featured />
        <ProductV1 />
        <FunFact />
        {/* <Testimonial /> */}
        <LatestPost />
        <Footer />
    </div>
}

export default Home_V1

