import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutSection extends Component {

	
    render() {

        let publicUrl = 'https://sbsp-penyengatolak.store/';

		return    <section className="about-area text-center" style={{background: '#017042', paddingTop:'50px', paddingBottom:'30px'}}>
		<div className="container">
		  <div className="row justify-content-center">
			<div className="col-lg-5 col-sm-12">
			  <div className="single-about-wrap" style={{backgroundColor: '#06442a', paddingTop: '3px'}}>
				<h5 style={{color: 'white'}}>Profil SBSP</h5>
				<iframe width="590" height="303" src="https://www.youtube.com/embed/YUMZOL3zAcE?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			  </div>
			</div>
			<div className="col-lg-7 col-sm-12">
			  <div className="single-about-wrap" style={{backgroundColor: '#06442a', paddingTop: '3px'}}>
				<h5 style={{color: 'white'}}>Tentang SBSP</h5>
				<p style={{color: 'white', fontSize: '14px'}}>Sekolah Bank Sampah Perempuan (SBSP) adalah tempat belajar pengolahan limbah sampah menjadi barang yang memiliki  nilai ekonomis. SBSP didirikan pada tahun 2016 yang merupakan bentuk partisipasi perempuan dalam mengembangkan pengelolaan sampah di Desa penyangat Olak. SBSP memberikan edukasi mengenai pengolahan sampah yang baik dan membantu mengembangkan kemampuan masyarakat dalam kreatifitas mengolah sampah.</p>
				<div style={{alignItems: 'left'}}>
				<img src={publicUrl+"assets/img/ketua-sbsp.jpeg"} style={{borderRadius: '50%'}}  width="128" height="128" alt="image" />
				<p style={{color: 'white', fontSize: '14px'}}>Suwaiybatul</p>
				<p style={{color: 'white', fontSize: '14px', marginTop:'-12px'}}>Kepala Sekolah SBSP</p>
				</div>
			  </div>
			</div>
		  </div>
		</div>      
	  </section>


        }
}

export default AboutSection