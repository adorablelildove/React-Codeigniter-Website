import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import Product from './components/product';
import ProductDetails from './components/product-details';
import Vendor from './components/vendor';
import Category from './components/category';
import Faq from './components/faq';
import policy from './components/policy';
import Error from './components/error';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blogDetails';

class Root extends Component {

    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route  path="/home-v2" component={HomeV2} />
	                    <Route  path="/produk" component={Product} />
	                    <Route  path="/product-details" component={ProductDetails} />
	                    <Route  path="/vendor" component={Vendor} />
	                    <Route  path="/category" component={Category} />
	                    <Route  path="/faq" component={Faq} />
	                    <Route  path="/policy" component={policy} />
	                    <Route  path="/error" component={Error} />
	                    <Route  path="/sign-in" component={SignIn} />
	                    <Route  path="/sign-up" component={SignUp} />
	                    <Route  path="/kontak" component={Contact} />
	                    <Route path="/blog" component={Blog} />
	                    <Route path="/blogDetails" component={BlogDetails} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('drketa'));
