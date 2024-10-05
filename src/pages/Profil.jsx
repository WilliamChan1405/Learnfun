import React from 'react';
import Profil from './profil'; // Import komponen Profil

const HomePageLogin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Bagian untuk Login */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Masukkan email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Masukkan password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

            {/* Bagian Profil Pengguna */}
            <div className="mt-8">
                <Profil />
            </div>
        </div>
    );
};

export default HomePageLogin;
