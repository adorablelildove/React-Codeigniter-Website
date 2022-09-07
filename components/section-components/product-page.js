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
		let publicUrl = "http://adminsbsp.sbsp-penyengatolak.store/";
		axios
			.get('https://adminsbsp.sbsp-penyengatolak.store/index.php/ReactApi/allproducts')
			.then(res => {
				const data = res.data;
				const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
				const postData = slice.map(pd => <React.Fragment>
					<div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
					<div className="thumb">
					  <a className="gallery-fancybox" href="#">
						<img src={publicUrl+"assets/img/"+pd.foto} alt="image" />
					  </a>
					  <a className="btn btn-white" href="https://shopee.co.id/sbsppenyengatolak">Lihat Detail</a>
					</div>
					<div className="item-details">
					  <span className="price">Rp {pd.harga}</span><br/>
					  <h4>{pd.nama_produk}</h4>
					  <p>{pd.deskripsi}</p>
					</div>
				  </div>
				</React.Fragment>)

				this.setState({
					pageCount: Math.ceil(data.length / this.state.perPage),
					postData
				})
			});
	}

	handlePageClick = (e) => {
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
    }

    render() {
		let publicUrl = "http://localhost/sbsp/";

    return( 
		  <section className="all-item-area pd-top-90 pd-bottom-100">
				  <div className="container">
				    <div className="header-shadow-inner">
				      <div className="row">
				        <div className="col-lg-9 align-self-center">
				        </div>
				      </div>
				    </div>
				    <div className="all-item-section go-top">        
				      <div className="item-isotope row">
				        <div className="item-sizer col-1" />
				        {/* gallery item start here */}
						{this.state.postData}
				      </div>
				    </div>
				    <div className="row">
				      <div className="col-lg-12 text-center">
					  <ul className="pagination pagination-2">
					  <ReactPaginate
						previousLabel={<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>}
						nextLabel={<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>}
						breakLabel={"..."}
						breakClassName={"break-me"}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={6}
						onPageChange={this.handlePageClick}
						containerClassName={"pagination"}
						activeClassName={"page-item active"}
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