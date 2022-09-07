import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductV1 extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			products: [],
		}
	}

	componentDidMount() {
		const apiUrl = 'https://adminsbsp.sbsp-penyengatolak.store/index.php/ReactApi/products';

		fetch(apiUrl, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		})
		.then(res => res.json())
		.then(
		(result) => {
			this.setState({
				products: result
				});
			},
			(error) => {
				this.setState({ error });
			}
		)
	}

    render() {

    	let publicUrl = "http://adminsbsp.sbsp-penyengatolak.store/";
        
        const { error, products} = this.state;

        if(error) {
        	return (
        		<div>Error: {error.message}</div>
        		)
        } else {
			const x=1; const y=2;
    return( 
    		<section className="all-item-area pd-top-90 pd-bottom-100">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="section-title">
			          <h2>Produk Terbaru</h2>
			        </div>
			      </div>
			    </div>
			    <div className="all-item-section go-top">    
			      <div className="item-isotope row">
			        <div className="item-sizer col-1" />
					{products.map(product => (
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-{x} cat-{y}">
					
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/"+product.foto} alt="image" />
			            </a>
			            <a className="btn btn-white" href="https://shopee.co.id/sbsppenyengatolak">Lihat Detail</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Rp {product.harga}</span>
			            <h4>{product.nama_produk}</h4>
			            <p>{product.deskripsi}</p>
			          </div>
			        </div>
					))}
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12 text-center">
			        <Link className="btn btn-base" to="/product">Produk Lainnya</Link>
			      </div>
			    </div>
			  </div>       
			</section>
			)
		}
	}
}

export default ProductV1