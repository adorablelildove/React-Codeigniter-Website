import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class BlogList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			data: [],
			perPage: 3,
			currentPage: 0
		};
	}

	receivedData(){
		function truncate(str, no_words) {
			return str.split(" ").splice(0,no_words).join(" ");
		}

		let publicUrl = "http://adminsbsp.sbsp-penyengatolak.store/";
		axios
			.get('https://adminsbsp.sbsp-penyengatolak.store/index.php/ReactApi/blogs')
			.then(res => {
				const data = res.data;
				const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
				const postData = slice.map(pd =>
				<React.Fragment>
				<div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/"+pd.foto} alt="image" />
		            <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		          </div>

		          <div className="single-blog-details">
		            <div className="meta">
					  <span className="author">
		                <i className="far fa-user" />
		                Sekolah Bank Sampah Perempuan
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                {pd.tgl}
		              </span>
		            </div>
		            <h3><Link to={"/blogDetails/"+pd.id_blog}>{pd.judul_blog}</Link></h3>
		            <p>{truncate(pd.tulisan, 40)+'....'}</p>
		            <a className="btn btn-base" href="#">Baca Lebih Lanjut</a>
		          </div>
		        </div>
					</React.Fragment>)

					this.setState({
						pageCount: Math.ceil(data.length / this.state.perPage),
						postData
					})
			});
	}

	componentDidMount() {
        this.receivedData()
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

  render() {
    let publicUrl = "http://localhost/sbsp/";
    return (
      <section className="blog-page-area pd-top-100 pd-bottom-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8 go-top">    
		        <div className="single-blog-inner single-blog-inner-3">
					{this.state.postData}
		        </div>
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
		      <Sidebar />
		    </div>
		  </div>
		</section>


    )}
  }

export default BlogList;
