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
		const apiUrl = 'https://admin.sbsp-penyengatolak.store/index.php/ReactApi/products';

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

    	let publicUrl = "https://admin.sbsp-penyengatolak.store/";
        
        const { error, products} = this.state;

        if(error) {
        	return (
        		<div>Error: {error.message}</div>
        		)
        } else {
    return( 
		<section className="all-item-area pd-top-100 pd-bottom-100">
		<div className="container">
		  <div className="row">
			<div className="col-lg-12 order-lg-last go-top">
			  <div className="all-item-section all-item-area-2">        
				<div className="row">
				  {/* gallery item start here */}
				  {products.map(product => (
				  <div key={product.id_produk} className="all-isotope-item col-lg-4 col-sm-6">
					<div className="thumb">
					  <a className="gallery-fancybox">
						<img src={publicUrl+"assets/img/"+product.foto} alt="produk" />
					  </a>
					  <a className="btn btn-white" href="https://shopee.co.id/sbsppenyengatolak" target="_blank">Kunjungi Toko</a>
					</div>
					<div className="item-details">
					<span className="price">Rp {product.harga}</span>
					  <h4 className="mt-2">{product.nama_produk}</h4>
					  <p>{product.deskripsi}</p>
					</div>
				  </div>
				  ))}
				</div>
			  </div>
			  </div>
			  </div>
			    <div className="row">
			      <div className="col-lg-12 text-center">
				  <a className="btn btn-base" href="https://sbsp-penyengatolak.store/#/produk">Produk Lainnya</a>
			      </div>
			    </div> 
			  </div>      
			</section>
			)
		}
	}
}

export default ProductV1