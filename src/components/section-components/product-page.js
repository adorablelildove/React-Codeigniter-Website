import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


class ProductPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			data: [],
			perPage: 6,
			currentPage: 0
		};
	}

	receivedData() {
		let publicUrl = "https://admin.sbsp-penyengatolak.store/";
		axios
			.get('https://admin.sbsp-penyengatolak.store/index.php/ReactApi/allproducts')
			.then(res => {
				const data = res.data;
				const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
				const postData = slice.map(pd => 
					<React.Fragment>
					<div key={pd.id_produk} className="all-isotope-item col-lg-4 col-sm-6">
					<div className="thumb">
					  <a className="gallery-fancybox">
						<img src={publicUrl+"assets/img/"+pd.foto} alt="produk" />
					  </a>
					  <a className="btn btn-white" href="https://shopee.co.id/sbsppenyengatolak" target="_blank">Kunjungi Toko</a>
					</div>
					<div className="item-details">
					  <span className="price">Rp {pd.harga}</span>
					  <h4 className="mt-2">{pd.nama_produk}</h4>
					  <p>{pd.deskripsi}</p>
					</div>
				  </div>
					</React.Fragment>
				  )
				this.setState({
					pageCount: Math.ceil(data.length / this.state.perPage),
					postData
				})
			});
	}

	handlePageClick = (e) => {
		window.scrollTo(0, 0);
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
		window.scrollTo(0, 0);
    }

    render() {
		let publicUrl = "https://admin.sbsp-penyengatolak.store/";

    return( 
		<section className="blog-page-area pd-top-100 pd-bottom-100">
		<div className="container">
		  <div className="row">
			<div className="col-lg-12 order-lg-last go-top">
			  <div className="all-item-section all-item-area-2">        
				<div className="row">
				        {/* gallery item start here */}
						{this.state.postData}
				      </div>
					  </div>
					  </div>
				    </div>
				    <div className="row">
				      <div className="col-lg-12 text-center">
					  <ul className="pagination pagination-2">
					  <ReactPaginate
					  	previousClassName={"previous"}
						previousLabel={<li className="page-item" id="prev"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>}
						nextLabel={<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>}
						breakLabel={"..."}
						breakClassName={"break-me"}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={6}
						onPageChange={this.handlePageClick}
						containerClassName={"pagination"}
						activeClassName={"active"}
						pageClassName={"page-item"}
						pageLinkClassName={"page-link"}
						/>
				        </ul>
				      </div>
				    </div>
				  </div>        
				</section>

	)}}


export default ProductPage