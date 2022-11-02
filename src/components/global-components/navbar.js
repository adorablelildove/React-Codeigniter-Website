import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div>
        		<div className="dkt-sitebar-menu">
				  <div className="dkt-sitebar-menu">
				    <span className="dkt-sitebar-close"><i className="fa fa-times" /></span>
				    <div className="dkt-details-inner">
				      <div className="logo go-top">
				        <Link to="/"><img src={publicUrl+"assets/img/logo-3.png"} alt="img" /></Link>
				      </div>
				      <p className="details">Sekolah Bank Sampah Perempuan Desa Penyengat Olak</p>
				      <div className="address-inner">
				        <h5>Alamat</h5>
				        <p>Jalan Lintas Timur RT 15  Desa Penyengat Olak, Kec. Jambi Luar Kota, Kab. Muaro Jambi, Jambi</p>
				      </div>
				      <div className="address-inner">
				        <h5>Telepon</h5>
				        <p>(+62) 82379773954</p>
				      </div>
				      <div className="address-inner mb-0">
				        <h5>Email</h5>
				        <p>sbsp.penyengatolak@gmail.com</p>
				      </div>
				    </div>
				    <div className="dkt-market-earn">
				      <div className="address-inner">
				        <h5>Shopee</h5>
				        <p>sbsppenyengatolak</p>
				      </div>
				      <div className="row">
				        <div className="col-lg-6">
				          <div className="earn-inner">
						  <h5>Instagram</h5>
				            <p>sbsp_jambi</p>
				          </div>
				        </div>
				        <div className="col-lg-6">
				          <div className="earn-inner">
						  <h5>Facebook</h5>
				            <p>jambi.sbsp</p>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
	            <div className="navbar-area go-top">
				  <nav className="navbar navbar-expand-lg">
				    <div className="container nav-container">
					
				      <div className="responsive-mobile-menu">
				        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				      <div className="logo">
				        <Link className="main-logo-h1" to="/"><img src={publicUrl+"assets/img/logo.png" }alt="img" /></Link>
				      </div>
				      <div className="collapse navbar-collapse" id="dkt_main_menu">
				        <ul className="navbar-nav menu-open">
				          <li>
				            <a href="#">Home</a>
				          </li>
				          <li><Link to="/produk">Produk</Link></li>
				          <li className="current-menu-item">
				            <Link to="/blog">Blog</Link>
				          </li>
				          <li><Link to="/kontak">Kontak</Link></li>
				        </ul>
				      </div>
				      <div className="nav-right-part nav-right-part-desktop">
				        <ul>
				          
				          <li className="menu-bar dropdown-menu-btn"><a href="#"><i className="fa fa-bars"></i></a></li>
				        </ul>
				      </div>
				    </div>
				  </nav>
				</div>
			</div>


        )
    }
}


export default Navbar