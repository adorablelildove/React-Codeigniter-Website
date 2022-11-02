import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blogDetails';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Detail Blog"  />
        <BlogDetails />
        <Footer />
    </div>
}

export default BlogPage

