import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area" style={{background: 'url('+publicUrl+'assets/img/banner/2.png)', backgroundRepeat  : 'no-repeat', backgroundSize: 'cover', 
	backgroundPosition: 'center center'}} >
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
					  <h2><span>SEKOLAH BANK SAMPAH PEREMPUAN</span></h2>
					  <h2><span>DESA PENYENGAT OLAK</span></h2>
						{/* <h2 style={{fontSize: '24px'}}><span>DESA PENYENGAT OLAK</span></h2> */}
			            <p>Jalan Lintas Timur RT 15  Desa Penyengat Olak, Kec. Jambi Luar Kota, Kab. Muaro Jambi, Jambi</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Banner