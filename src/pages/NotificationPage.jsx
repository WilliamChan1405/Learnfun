import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import BookmarkPage from "./BookmarkPage";

const NotificationPage = () => {
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
                        <Link to="/book">
                            <button className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
                                <i className="fas fa-bookmark mr-2"></i>
                                <span>Bookmark</span>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white rounded bg-purple-500">
                            <i className="fas fa-bell mr-2"></i>
                            <span>Notification</span>
                        </button>
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

                {/* Notification Section */}
                <div className="flex flex-col items-center mt-16">
                    <h1 className="text-2xl font-bold mb-4">Notifikasi</h1>
                    <div className="flex items-center bg-white rounded p-4 shadow-lg">
                        <div className="w-16 h-16">
                            <img
                                src="https://placehold.co/100x100"
                                alt="Profile avatar"
                                className="rounded-full"
                            />
                        </div>
                        <span className="ml-4">Seseorang Menjawab Pertanyaan Anda!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
