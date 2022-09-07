import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LatestNews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			blogs: [],
		}
	}

	componentDidMount() {
		const apiUrl = 'https://adminsbsp.sbsp-penyengatolak.store/index.php/ReactApi/blogSidebar';

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
				blogs: result
				});
			},
			(error) => {
				this.setState({ error });
			}
		)
	}

  render() {
    let publicUrl = "http://adminsbsp.sbsp-penyengatolak.store/";
        
    const { error, blogs} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
        )
    } else {
    return (
     <section className="blog-area pd-top-90 pd-bottom-70 bg-sky-blue">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-6">
		        <div className="section-title text-center">
		          <h2>Recent Articles</h2>
		          <p>Ketahui informasi mengenai Sekolah Bank Sampah Perempuan Desa Penyengat Olak</p>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center go-top">
			{blogs.map(blog => (
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/"+blog.foto} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />{blog.tgl}</span>
		              <a href="#"><i className="far fa-user" aria-hidden="true" />BY ADMIN</a>
		            </div>
		            <h5><Link to={"/blogDetails/"+blog.id_blog}>{blog.judul_blog}</Link></h5>
		          </div>
		        </div>
		      </div>
			  ))}
		    </div>
		  </div>
		</section>



    )
  }
}
}

export default LatestNews;
