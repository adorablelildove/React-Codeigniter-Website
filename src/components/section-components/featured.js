import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Featured extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="featured-area bg-sky-blue pd-top-90 pd-bottom-90">
				  <div className="container">
				    <div className="row justify-content-center">
				    
				      
				      <div className="col-lg-5 text-center go-top">
				        <Link className="btn btn-base" to="/">Produk Terbaru</Link>
				        <Link className="btn btn-white" to="/produk">Semua Produk</Link>
				      </div>
				    </div>
				  </div>
				</section>


        }
}

export default Featured