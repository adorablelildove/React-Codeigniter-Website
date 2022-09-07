import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {

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
      const x=1; const y=2;
    return (
     <div className="col-lg-4 go-top">
          <div className="sidebar-area">
            <div className="widget widget-news widget-border">
              <h5 className="widget-title">Artikel Terbaru</h5>
              {blogs.map(blog => (
              <div className="single-news-wrap media">
                <div className="media-body">
                  <p className="date"><i className="far fa-calendar-alt" />{blog.tgl}</p>
                  <h6><Link to={"/blogDetails/"+blog.id_blog}>{blog.judul_blog}</Link></h6>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
    )
  }
}}

export default Sidebar;
