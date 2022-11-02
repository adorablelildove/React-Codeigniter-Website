import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area-2 pd-top-100">
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget widget_contact">
				          <h4 className="widget-title">Hubungi Kami</h4>
				          <div className="media">
				            <div className="thumb">
				              <img src={publicUrl+"assets/img/footer/1m.png" }alt="img" />
				            </div>
				            <div className="media-body">
							<p>Jalan Lintas Timur RT 15  Desa Penyengat Olak</p>
				              <p>Kec. Jambi Luar Kota, Kab. Muaro Jambi, Jambi</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/2m.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p className="m-0">sbsp.penyengatolak@gmail.com</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/3m.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p className="m-0">(+62) 82379773954</p>
				            </div>
				          </div>
				            <ul className="social-area">
							<li><a href="https://shopee.co.id/sbsppenyengatolak" target="_blank"><i className="fas fa-shopping-bag" /></a></li>
				            <li><a href="https://web.facebook.com/jambi.sbsp/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
				            <li><a href="https://www.instagram.com/sbsp_jambi/" target="_blank"><i className="fab fa-instagram" /></a></li>
				          </ul>
				        </div>
				      </div>
				    </div>                
				  </div>
				</footer>

        )
    }
}


export default Footer_v2