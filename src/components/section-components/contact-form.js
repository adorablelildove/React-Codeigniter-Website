import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import emailjs from "emailjs-com";

function sendEmail(e) {
	alert("Pesan telah dikirim!");

	e.preventDefault();

	emailjs.sendForm('service_3w0cngg', 'template_bulnrcl', e.target, 'user_aBvjUL4QHYelycGpew7TI')
	.then((result) => {
		console.log(result.text);
	}, (error) => {
		console.log(error.text);
	});
	e.target.reset()

	window.location.href = "https://sbsp-penyengatolak.store/#/kontak/";
}

class ContactForm extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-form-area bg-sky-blue pd-top-100 pd-bottom-100">
		  <div className="container">
		  <form onSubmit={sendEmail}>
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="comment-form">
		          <div className="section-title text-center">
		            <h6>Kritik dan Saran</h6>
		            <h3>Hubungi Kami</h3>
		          </div>
		          <form className="contact-form-wrap">
		            <div className="row">
		              <div className="col-lg-6 col-md-6 col-12">
		                <div className="single-input-wrap input-group">
		                  <input name="name" type="text" className="form-control" placeholder="Nama Anda" />
		                  <div className="input-group-prepend">
		                    <div className="input-group-text"><i className="far fa-user" /></div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-6 col-md-6 col-12">
		                <div className="single-input-wrap input-group">
		                  <input type="email" name="email" className="form-control" placeholder="Email Anda" />
		                  <div className="input-group-prepend">
		                    <div className="input-group-text"><i className="far fa-envelope" /></div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-12">
		                <div className="single-input-wrap input-group">
		                  <textarea className="form-control" name="message" rows={4} name="message" placeholder="Tuliskan kritik dan saran..." defaultValue={""} />
		                  <div className="input-group-prepend">
		                    <div className="input-group-text"><img src={publicUrl+"assets/img/icon/comment.png"} alt="img" /></div>
		                  </div>
		                </div>
		                <div className="submit-area text-center">
						<button type="submit" className="btn btn-base">KIRIM PESAN</button>
		                </div>
		              </div>
		            </div>
		          </form>
		        </div>
		      </div>
		    </div>
			</form>
		  </div>
		</section>


        }
}

export default ContactForm