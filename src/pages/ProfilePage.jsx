import React from 'react';

const ProfilePage = () => {
    return (
        <div className="flex h-screen bg-blue-200">
            <div className="w-1/4 bg-purple-400 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 bg-purple-500 text-white rounded">
                            <i className="fas fa-user mr-2"></i>
                            <span>Account</span>
                        </button>
                    </div>
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white">
                            <i className="fas fa-bookmark mr-2"></i>
                            <span>Bookmark</span>
                        </button>
                    </div>
                    <div className="w-full mb-4">
                        <button className="w-full flex items-center p-2 text-white">
                            <i className="fas fa-bell mr-2"></i>
                            <span>Notification</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-3/4 p-8">
                <div className="flex justify-end mb-4 bg-purple-400 p-4 rounded-tl-lg">
                    <button className="flex items-center bg-gray-500 text-white px-4 py-2 rounded">
                        <span>HOME PAGE</span>
                        <i className="fas fa-home ml-2"></i>
                    </button>
                </div>
                <div className="flex flex-col items-center">
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
                            <button className="bg-pink-300 text-white px-4 py-2 rounded">
                                Ganti Password
                            </button>
                            <button className="bg-pink-300 text-white px-4 py-2 rounded">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
