import Portal from '../components/layout/Portal';

const Services = () => {
    return (
        <>
            <Portal>
                <div className="services my-10">
                    <div className="hero  min-h-70 relative">
                        {/* Blob 1 */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-20"></div>

                        {/* Blob 2 */}
                        <div className="absolute top-50 right-0 w-32 h-32 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50"></div>
                        {/* Blob 3 */}
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="hero-content text-center w-screen">
                            <div className="max-w-screen">
                                <h1 className="text-4xl font-bold">Layanan Berbagi Data Geospasial</h1>
                                <p className="py-6">
                                    Optimalkan pengelolaan dan berbagi data geospasial dengan layanan WFS dan WMS yang handal. <br /> Dengan dukungan
                                    standar OGC, memastikan integrasi untuk kebutuhan pemetaan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="table"></div>
                </div>
            </Portal>
        </>
    );
};

export default Services;
