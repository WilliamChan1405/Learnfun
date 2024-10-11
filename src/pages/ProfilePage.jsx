import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomePage from "./HomePage";
import NotificationPage from "./NotificationPage";
import BookmarkPage from "./BookmarkPage";
import ChangePasswordPage from "./ChangePasswordPage";

const ProfilePage = () => {
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const handleConfirmLogout = () => {
        // Logika untuk keluar dari akun
        alert("Anda telah keluar dari akun!");
        setShowLogoutConfirm(false); // Menutup pop-up setelah konfirmasi
    };

    const handleCancelLogout = () => {
        setShowLogoutConfirm(false); // Menutup pop-up jika membatalkan
    };

    return (
        <div className="flex h-screen bg-blue-200">
            {/* Sidebar */}
            <div className="w-1/4 bg-purple-400 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
                            <i className="fas fa-user mr-2"></i>
                            <span>Account</span>
                        </button>
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
                        <Link to="/notif">
                            <button className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
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
                        <Link to="/">
                            <button className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                                <span>HOME PAGE</span>
                                <i className="fas fa-home ml-2"></i>
                            </button>
                        </Link>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mt-16">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <div className="w-24 h-24 mb-4">
                        <img
                            src="https://placehold.co/100x100"
                            alt="Profile avatar"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-full max-w-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Nama</label>
                            <div className="flex items-center border rounded p-2 bg-white">
                                <i className="fas fa-user mr-2"></i>
                                <span>Hagai Kopusi Sinulingga</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <div className="flex items-center border rounded p-2 bg-white">
                                <i className="fas fa-envelope mr-2"></i>
                                <span>hagaisinulingga25@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <Link to="/change">
                                <button className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400">
                                    Ganti Password
                                </button>
                            </Link>
                            <button 
                                onClick={handleLogoutClick} 
                                className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up Konfirmasi Logout */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Yakin keluar akun?</h2>
                        <div className="flex justify-around">
                            <button 
                                onClick={handleConfirmLogout} 
                                className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                            >
                                Ya
                            </button>
                            <button 
                                onClick={handleCancelLogout} 
                                className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                            >
                                Tidak
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

