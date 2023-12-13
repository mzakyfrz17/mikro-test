import { Image } from 'react-bootstrap';
import rekom from '../assets/images/rekomendasi-lapak.png';
const Rekomendasi = () => {
    return (
        <div className="container rekomendasi mb-4 mt-4">
            <div className="judul-rekomen text-center">
            <p className="fw-bold fs-4 mt-3 mb-4">Rekomendasi Lapak</p>
            </div>
            <div className="konten-utama-rekomen">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div className="image-wrapper">
                        <Image src={rekom} alt="img-rekom"/>
                        <div className="button-container">
                        <button className="btn button">Dekat Universitas</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className="image-wrapper">
                <Image src={rekom} alt="img-rekom"/>
                    <div className="button-container">
                    <button className="btn button">Dekat Universitas</button>
                    </div>
                </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className="image-wrapper">
                <Image src={rekom} alt="img-rekom"/>
                    <div className="button-container">
                    <button className="btn button">Dekat Universitas</button>
                    </div>
                </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <div className="image-wrapper">
                <Image src={rekom} alt="img-rekom"/>
                    <div className="button-container">
                    <button className="btn button">Dekat Universitas</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Rekomendasi;