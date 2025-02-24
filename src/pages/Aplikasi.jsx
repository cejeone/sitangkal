import Portal from '../components/layout/Portal';
import ImageCMDBuild from '../assets/img/cmdbuildss.jpg';
import ImageMapstore from '../assets/img/mapstoress.jpg';
import ImageGeoserver from '../assets/img/geoserverss.jpg';
import ImageMobileapp from '../assets/img/mobileappss.jpg';

const Aplikasi = () => {
    return (
        <>
            <Portal>
                <div className="aplikasi my-10">
                    <div className="hero  min-h-70 relative">
                        {/* Blob 1 */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-20"></div>

                        {/* Blob 2 */}
                        <div className="absolute top-50 right-0 w-32 h-32 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50"></div>
                        {/* Blob 3 */}
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="hero-content text-center w-screen">
                            <div className="max-w-screen">
                                <h1 className="text-4xl font-bold">
                                    Transformasi Digital <br />
                                    dengan Empat Solusi Terintegrasi
                                </h1>
                                <p className="py-6">
                                    Jelajahi dunia baru efisiensi dan inovasi dengan empat aplikasi unggulan kami yang siap diakses kapan saja.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto relative">
                        {/* Blob 1 */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-1">
                            <div className="card card-border  border-neutral-200  w-auto rounded-xl">
                                <div className="card-body p-2">
                                    <img className="w-full h-50 object-cover rounded-xl" src={ImageCMDBuild} alt="Placeholder" />

                                    <a href="http://103.233.103.22:8080/cimahi_bim" target="_blank" className="text-xl font-bold text-gray-800 mt-2">
                                        CMDBuild
                                    </a>
                                    <p>Kelola aset dengan mudah melalui sistem manajemen basis data konfigurasi.</p>
                                </div>
                            </div>
                            <div className="card card-border  border-neutral-200  w-auto rounded-xl">
                                <div className="card-body p-2">
                                    <img className="w-full h-50 object-cover rounded-xl" src={ImageMapstore} alt="Placeholder" />

                                    <a href="http://103.233.103.22:8060/mapstore" target="_blank" className="text-xl font-bold text-gray-800 mt-2">
                                        Mapstore
                                    </a>
                                    <p>
                                        Ciptakan dan visualisasikan peta interaktif untuk mengintegrasikan data geospasial dengan cara yang baru dan
                                        menarik.
                                    </p>
                                </div>
                            </div>
                            <div className="card card-border  border-neutral-200  w-auto rounded-xl">
                                <div className="card-body p-2">
                                    <img className="w-full h-50 object-cover rounded-xl" src={ImageGeoserver} alt="Placeholder" />

                                    <a href="http://103.233.103.22:8090/geoserver" target="_blank" className="text-xl font-bold text-gray-800 mt-2">
                                        Geoserver
                                    </a>
                                    <p>
                                        Publikasikan dan bagikan data geospasial dengan server open-source yang mendukung berbagai format dan standar.
                                    </p>
                                </div>
                            </div>
                            <div className="card card-border  border-neutral-200  w-auto rounded-xl">
                                <div className="card-body p-2">
                                    <img className="w-full h-50 object-cover rounded-xl" src={ImageMobileapp} alt="Placeholder" />

                                    <a href="/download" target="_blank" className="text-xl font-bold text-gray-800 mt-2">
                                        Mobile App
                                    </a>
                                    <p>Akses semua layanan kami dalam genggaman, di mana saja dan kapan saja, dengan aplikasi mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    );
};

export default Aplikasi;
