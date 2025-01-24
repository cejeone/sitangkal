import bgImage from '../assets/img/bg-unsplash.jpg';
const Hero = () => {
    return (
        <div
            className="hero bg-base-200 min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            {/* <div class="hero-overlay"></div> */}
            <div className="hero-content text-center w-screen">
                <div className="max-w-screen">
                    <h1 className="text-6xl font-bold text-white">SiTangkal</h1>
                    <p className="py-6 text-2xl text-white">Sistem Informasi Ruang Terbuka Hijau dan Pepohonan di Kota Cimahi</p>
                    <button className="btn btn-neutral">Telusuri</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
