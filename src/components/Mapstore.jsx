import { useEffect, useState } from 'react';
import { getCMDBuildClassesDb } from '../services/cmdbuildServices';
import Cookies from 'js-cookie';

const Mapstore = () => {
    const [dashboardData, setDashboardData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            const sessionId = Cookies.get('CMDBuild-Authorization');
            setIsLoggedIn(!!sessionId);
        };

        checkLoginStatus();

        const interval = setInterval(checkLoginStatus, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            const fetchData = async () => {
                try {
                    const response = await getCMDBuildClassesDb();
                    const data = response.data || [];
                    setDashboardData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [isLoggedIn]);

    const extractUrl = (htmlString) => {
        const regex = /href=['"]([^'"]*)['"]/;
        const match = regex.exec(htmlString);
        return match ? match[1] : '';
    };

    if (!isLoggedIn) {
        return <p className="text-white">Silahkan login untuk melihat konten.</p>;
    }

    return (
        <div>
            <section className="mapstore mt-10 bg-neutral">
                <div className="container mx-auto my-5 px-5 py-10 rounded-xl">
                    <div className="judul-tentang grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 py-5 mt-1 mb-1">
                        <div className="judul py-4">
                            <span className="text-white">Aplikasi Portal</span>
                            <h1 className="text-4xl text-white font-bold py-5">Dashboard Dan Geostories</h1>
                        </div>
                        <div className="isi flex">
                            <p className="text-white text-lg content-center">
                                Antarmuka pengguna yang menyajikan data secara visual dalam bentuk grafik, peta, tabel, story, dan widget lainnya.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div role="tablist" className="tabs tabs-box bg-neutral">
                            <input type="radio" name="my_tabs_5" role="tab" className="tab tab-custom" aria-label="Dashboard" defaultChecked />
                            <div className="tab-content bg-neutral py-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {dashboardData.map((item, index) => (
                                        <div key={index} className="card card-border border-2 border-neutral-500 w-auto shadow-sm rounded-xl">
                                            <figure>
                                                <img className="p-2 rounded-xl" src="https://placehold.co/300x200" alt={item.nama || 'Image'} />
                                            </figure>
                                            <div className="card-body p-2 mt-3">
                                                <h3 className="card-title text-white">{item.nama}</h3>
                                                <div className="card-actions justify-end mt-5">
                                                    <a href={extractUrl(item.url)} target="_blank" rel="noopener noreferrer" className="btn btn-base">
                                                        Lihat
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <input type="radio" name="my_tabs_5" role="tab" className="tab tab-custom" aria-label="Geostories" />
                            <div className="tab-content bg-neutral p-6 border">Tab content 2</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mapstore;
