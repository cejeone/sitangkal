import Portal from '../components/layout/Portal';
import Imgbg from '../assets/img/bg-dataset.jpg';
import ImgLeaf from '../assets/img/leaf.jpg';

const Data = () => {
    return (
        <>
            <Portal>
                <div className="data my-10">
                    <div className="hero  min-h-70 relative">
                        {/* Blob 1 */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-20"></div>

                        {/* Blob 2 */}
                        <div className="absolute top-50 right-0 w-32 h-32 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50"></div>
                        {/* Blob 3 */}
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-[#0F4229]  rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="hero-content text-center w-screen">
                            <div className="max-w-screen">
                                <h1 className="text-4xl font-bold">Jelajahi Dataset dan Metadata Geospasial</h1>
                                <p className="py-6">
                                    Temukan dan unduh berbagai dataset geospasial serta dapatkan informasi lengkap mengenai sumber, kualitas, dan
                                    karakteristik data geospasial melalui metadata yang terperinci.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dataset-metadata container mx-auto">
                        <div className="card card-border  border-neutral-200  w-auto rounded-xl">
                            <div className="card-body p-2">
                                <img className="w-full h-60 object-cover rounded-xl" src={Imgbg} alt="Placeholder" />

                                <div className="search-box mt-5 mx-11">
                                    <label className="input w-full rounded-md">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <path d="m21 21-4.3-4.3"></path>
                                            </g>
                                        </svg>
                                        <input type="search" required placeholder="Cari Dataset atau Metadata" className="w-full rounded-md" />
                                    </label>
                                    <div className="filter mt-4">
                                        <div className="categories">
                                            <select defaultValue="Pick a color" className="select w-64 rounded-md">
                                                <option disabled={true}>Pilih Kategori</option>
                                                <option>Dataset</option>
                                                <option>Metadata</option>
                                            </select>
                                        </div>
                                        <div className="topic px-4">
                                            <select defaultValue="Pick a color" className="select w-64 rounded-md">
                                                <option disabled={true}>Pilih Topik</option>
                                                <option>Pohon</option>
                                                <option>Tanaman</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="result mt-5 mb-5">
                                        <span>2 Dataset ditemukan</span>

                                        <div className="divider"></div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-1">
                                            <div className="card card-border  border-neutral-200  w-auto rounded-md">
                                                <div className="card-body p-2 flex flex-row">
                                                    <img className="h-25 w-25 rounded-md object-cover aspect-square" src={ImgLeaf} alt="" />
                                                    <div className="title-desc">
                                                        <h6 className="font-bold mb-1">Inventarisasi Pohon Perkotaan</h6>
                                                        <p className="font-light text-sm">
                                                            Informasi tentang spesies pohon, lokasi, ukuran, dan kondisi kesehatan pohon-pohon yang
                                                            ada di area perkotaan.
                                                        </p>
                                                        <div className="label mt-3">
                                                            <div className="badge badge-ghost">Dataset</div>
                                                            <div className="badge badge-ghost">Pohon</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-border  border-neutral-200  w-auto rounded-md">
                                                <div className="card-body p-2 flex flex-row">
                                                    <img className="h-25 w-25 rounded-md object-cover aspect-square" src={ImgLeaf} alt="" />
                                                    <div className="title-desc">
                                                        <h6 className="font-bold mb-1">Pengamatan Pertumbuhan Pohon</h6>
                                                        <p className="font-light text-sm">
                                                            Data tentang pertumbuhan pohon dari waktu ke waktu, termasuk diameter batang, tinggi, dan
                                                            volume.
                                                        </p>
                                                        <div className="label mt-3">
                                                            <div className="badge badge-ghost">Dataset</div>
                                                            <div className="badge badge-ghost">Pohon</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    );
};

export default Data;
