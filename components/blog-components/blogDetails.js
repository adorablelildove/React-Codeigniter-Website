import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class BlogDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			blogDetails: [],
		}
	}

	componentDidMount() {
		var pathArray = window.location.href.split('/');
		var id = pathArray[5];
		const apiUrl = 'https://adminsbsp.sbsp-penyengatolak.store/index.php/ReactApi/blogDetails/'+ id;

		fetch(apiUrl, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
		.then(
		(result) => {
			this.setState({
				blogDetails: result
				});
			},
			(error) => {
				this.setState({ error });
			}
		)
	}


  render() {

    let publicUrl = "http://adminsbsp.sbsp-penyengatolak.store/";
    let imagealt = 'image'

    const { error, blogDetails} = this.state;

    if(error) {
    	return (
    		<div>Error: {error.message}</div>
    		)
    } else {
    return (
     <section className="blog-page-area pd-top-100 pd-bottom-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-details-page-inner">
		          <div className="single-blog-inner m-0">

		          {blogDetails.map(blog => (
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/blog/"+blog.foto} alt="image" />
		            </div>
		            ))}

		            {blogDetails.map(blog => (
		            <div className="single-blog-details">
		              <div className="meta">
						<span className="author">
							<i className="far fa-user" />
							Sekolah Bank Sampah Perempuan 
						</span>
		                <span className="date">
		                  <i className="far fa-calendar-alt" />
		                  {blog.tgl}
		                </span>
		              </div>
		              <h3>{blog.judul_blog}</h3>
		              <p>{blog.tulisan}</p>
		            </div>
		            ))}

		            <div className="meta">
		              <div className="blog-share">
		                <span>Find More On:</span>
		                <ul className="social-area social-area-2">
		                	<li><a href="#"><i className="fas fa-shopping-bag" /></a></li>
		                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
		                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
		)}
  }
}

export default BlogDetails;
