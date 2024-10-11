import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Pastikan untuk mengimpor gaya Swiper
import ProfilePage from "./ProfilePage";
import NotificationPage from "./NotificationPage";

const BookmarkPage = () => {
    return (
        <div className="flex h-screen bg-blue-200">
            {/* Sidebar */}
            <div className="w-1/4 bg-purple-400 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-full mb-4">
                        <Link to="/profile">
                            <button className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
                                <i className="fas fa-user mr-2"></i>
                                <span>Account</span>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white bg-purple-500 rounded">
                            <i className="fas fa-bookmark mr-2"></i>
                            <span>Bookmark</span>
                        </button>
                    </div>
                    <div className="w-full mb-4">
                        <Link to="/notif">
                            <button className="w-full flex items-center p-2 text-white rounded bg-purple-500">
                                <i className="fas fa-bell mr-2"></i>
                                <span>Notification</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-8">
                {/* Fixed Header */}
                <div className="flex justify-end mb-4 bg-purple-400 p-4 rounded-tl-lg fixed top-0 right-0 w-3/4 z-50">
                    <Link to="/" className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        <span>HOME PAGE</span>
                        <i className="fas fa-home ml-2"></i>
                    </Link>
                </div>

                {/* Bookmark Section */}
                <div className="flex flex-col items-center mt-16">
                    <h1 className="text-2xl font-bold mb-4">Bookmark</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {Array(10).fill().map((_, i) => (
                            <SwiperSlide key={i} className="bg-white p-6 rounded-lg shadow">
                                <div className="flex items-center mb-4">
                                    <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full" />
                                    <div className="ml-4">
                                        <p className="font-bold">Irma Amelia N</p>
                                        <p className="text-gray-500">11 Sep 2024</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur.</p>
                                <Link to="/answer">
                                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Lihat Jawaban</button>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BookmarkPage;
