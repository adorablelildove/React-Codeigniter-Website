import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header-v2';
import ProductPage from './section-components/product-page';
import Footer from './global-components/footer';

const Vendor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Produk" subheader="halaman"  />
        <ProductPage />
        <Footer />
    </div>
}

export default Vendor

