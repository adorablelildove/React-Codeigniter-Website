import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-page-area pd-top-100 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/map-marker.png"} alt="img" />
			          </div>
			          <h4>Alamat SBSP</h4>
			          <p>Jalan Lintas Timur RT 15  Desa Penyengat Olak</p>
			          <p>Kec. Jambi Luar Kota, Kab. Muaro Jambi, Jambi.</p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/phone-pad.png"} alt="img" />
			          </div>
			          <h4>Telepon</h4>
			          <p>(+62) 82379773954</p>
					  <div className="whatsapp">
						<a href="https://wa.me/6282379773954" target="_blank"><button>Whatsapp</button></a>
					  </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/envelope.png"} alt="img" />
			          </div>
			          <h4>Email</h4>
			          <p>sbsp.penyengatolak@gmail.com</p>
			        </div>
			      </div>   
				  <div>
					<h4 className="text-center">Alamat SBSP</h4>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.331480052603!2d103.55711131475424!3d-1.564251998859271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMcKwMzMnNTEuMyJTIDEwM8KwMzMnMzMuNSJF!5e0!3m2!1sen!2sid!4v1637807879186!5m2!1sen!2sid" width="800" height="300" allowfullscreen="" style={{border: '#017042 solid 2px', borderRadius: '20px'}} loading="lazy"></iframe>
				  </div>
			    </div>
			  </div>          
			</section>

        }
}

export default ContactInfo