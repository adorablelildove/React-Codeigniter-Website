import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

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
				<footer className="footer-area pd-top-100">
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget widget_contact">
				          <h4 className="widget-title">Hubungi Kami</h4>
				          <div className="media">
				            <div className="thumb">
				              <img src={publicUrl+"assets/img/footer/1.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p>Jalan Lintas Timur RT 15  Desa Penyengat Olak</p>
				              <p>Kec. Jambi Luar Kota, Kab. Muaro Jambi, Jambi</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/2.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p className="m-0">sbsp.penyengatolak@gmail.com</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/3.png"} alt="img" />
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
					  <div className="col-lg-8 col-md-14">
					  <div className="footer-widget widget widget_contact">
					  <h4 className="widget-title">Alamat SBSP</h4>
					  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.331480052603!2d103.55711131475424!3d-1.564251998859271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMcKwMzMnNTEuMyJTIDEwM8KwMzMnMzMuNSJF!5e0!3m2!1sen!2sid!4v1637807879186!5m2!1sen!2sid" width="1200" height="300" allowfullscreen="" loading="lazy"></iframe>
				        </div>
						</div>
				    </div>
				  </div>
				  {/*Footer bottom*/}
				  <div className="container">
				    <div className="copyright-area">
				      <div className="row">
				        <div className="col-lg-6 align-self-center">
				          <p>©2021 | Himpunan Mahasiswa Sistem Informasi Universitas Jambi</p>
				        </div>
				        <div className="col-lg-6 text-lg-right">
				          <ul>
				            <li>
				              <a href="https://sbsp-penyengatolak.store/">Home</a>
				            </li>
				            <li>
				              <a href="https://sbsp-penyengatolak.store/#/produk">Produk</a>
				            </li>
				            <li>
				              <a href="https://sbsp-penyengatolak.store/#/blog">Blog</a>
				            </li>
				            <li>
				              <a href="https://sbsp-penyengatolak.store/#/kontak">Kontak</a>
				            </li>
				          </ul>
				        </div>
				      </div>
				    </div>                
				  </div>
				</footer>


        )
    }
}


export default Footer_v1