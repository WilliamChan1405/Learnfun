import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import BookmarkPage from "./BookmarkPage";
import NotificationPage from "./NotificationPage";

const ChangePasswordPage = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        // Logic untuk menyimpan kata sandi baru
        if (newPassword === confirmPassword) {
            alert('Password successfully changed!');
        } else {
            alert('Passwords do not match!');
        }
    };

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
                        <Link to="/book" className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
                            <i className="fas fa-bookmark mr-2"></i>
                            <span>Bookmark</span>
                        </Link>
                    </div>
                    <div className="w-full mb-4">
                        <Link to="/notif" className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded">
                            <i className="fas fa-bell mr-2"></i>
                            <span>Notification</span>
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

                {/* Change Password Section */}
                <div className="flex flex-col items-center mt-16">
                    <h1 className="text-2xl font-bold mb-4">Ganti Password</h1>
                    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Masukkan Password Lama</label>
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Password Lama"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Masukkan Password Baru</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Password Baru"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Ulangi Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Ulangi Password"
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <Link to="/profile">
                                <button className="bg-pink-500 text-white px-4 py-2 rounded">Kembali</button>
                            </Link>
                            <button onClick={handleSave} className="bg-pink-500 text-white px-4 py-2 rounded">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
