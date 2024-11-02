import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId'); // Use userId from localStorage

        if (userId) {
            fetchUserProfile(userId);
        }
    }, []);

    const fetchUserProfile = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`);
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else {
                console.error('Failed to fetch user profile:', data.message);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const handleConfirmLogout = () => {
        alert("Anda telah keluar dari akun!");
        setShowLogoutConfirm(false);
        localStorage.removeItem('userId');
        window.location.href = '/';
    };

    const handleCancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    const handleEditProfileClick = () => {
        setShowEditProfile(true);
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    const handleSaveProfile = async () => {
        if (!avatar) {
            alert('Silakan pilih file avatar.');
            return;
        }

        const formData = new FormData();
        formData.append('avatar', avatar);
        formData.append('userId', user.id);

        try {
            const response = await fetch('http://localhost:5000/api/update-avatar', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                alert('Avatar berhasil diperbarui.');
                fetchUserProfile(user.id); // Re-fetch user profile to get updated avatar
                setShowEditProfile(false);
            } else {
                alert('Gagal memperbarui avatar.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengunggah avatar.');
        }
    };

    return (
        <div className="flex h-screen bg-blue-200">
            {/* Sidebar */}
            <div className="w-1/4 bg-purple-400 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white bg-purple-500 rounded">
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
                            src={user && user.avatar ? user.avatar : "https://placehold.co/100x100"}
                            alt="Profile avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    </div>
                    <div className="w-full max-w-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Nama</label>
                            <div className="flex items-center border rounded p-2 bg-white">
                                <i className="fas fa-user mr-2"></i>
                                <span>{user ? user.name : "Loading..."}</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <div className="flex items-center border rounded p-2 bg-white">
                                <i className="fas fa-envelope mr-2"></i>
                                <span>{user ? user.email : "Loading..."}</span>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleEditProfileClick}
                                className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                            >
                                Edit Profile
                            </button>
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

                {/* Edit Profile Form */}
                {showEditProfile && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded shadow-lg w-96">
                            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Upload Avatar</label>
                                <input
                                    type="file"
                                    onChange={handleAvatarChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-around">
                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setShowEditProfile(false)}
                                    className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
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
