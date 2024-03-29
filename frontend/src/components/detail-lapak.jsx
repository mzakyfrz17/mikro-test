import React from "react";
import { Image } from "react-bootstrap";
import gambar3 from '../assets/images/Gambar 3.png';
import gambar2 from '../assets/images/Gambar 2.png';
import gambar1 from '../assets/images/Gambar 1.png';
import user from '../assets/images/pengguna.png';
import WhatsappButton from "./Whatsapp-button";
import '../style/style.css';

const Detail = () => {
    return(
    <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 ">
              <Image src={gambar3} className="detail-img" id="detail1" alt="Gambar Kiri"/>
          </div>
  
          <div className="col-md-4 mt-3">
              <div className="row">
                  <div className="col-md-12 mb-2">
                      <img src={gambar1} className="detail-img" alt="Gambar Kanan 1"/>
                  </div>
                  <div className="col-md-12">
                      <img src={gambar2} className="detail-img" alt="Gambar Kanan 2"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="deskripsi">
            <div className="row">
                <div className="col-lg-8 col-md-10 col-sm-12 ">
                    <h5>
                    Kost Singgahsini Jatiwaringin Tugu 27 Tipe B Pondokgede Bekasi P1CJ168E
                    </h5>
                    <p className="text-muted">Jl. Raya Kalibata No.1, RT.9/RW.4, Rawajati, Pancoran, Jakarta Selatan, DKI Jakarta, 12750 </p>
                    <h5>Deskripsi</h5>
                    <p>Disewakan lapak lokasi strategis daerah jakarta selatan pinggir jalan raya, dekat dengan sekolah, perumahan, kostan, pangkalan gojek.</p>
                    <p>Gabung tenant kuliner ya... Hanya 1 tenant saja
                        Meja kursi semua sudh siap booth juga kalo cocok boleh pinjam Di sewakan bayar harian dan bulanan</p>

                    <p>Diutamakan :
                        <ol>
                        <li>Coffee shop (bukan Warkop ya).</li>
                        <li>Burger dan sejenisnya.</li>
                        <li>Siomay dan batagor.</li>
                        <li>Dimsum dan sejenisnya.</li>
                        <li>Alpukat kocok dan sejenisnya.</li>
                        <li>Cake n pastry (only display).</li>
                        <li>Minuman kekinian (ex.mixue dan sejenisnya).</li>
                        <li>Juice.</li>
                    </ol>
                    </p>
                </div>

                <div className="col-md-4">
                    <h5>Rp 1.000.000/Bulan</h5>
                    <div className="card mb-3 shadow w-75">
                        <div className="card profile-container d-flex">
                            <Image src={user} alt="Profil 1" className="profile-img"/>
                            <div className="profile-info ms-3">
                                <p>Subkhi M</p>
                            </div>
                        </div>
                       <WhatsappButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Detail;