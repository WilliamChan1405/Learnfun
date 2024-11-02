import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import imglogo from '../assets/LF.png';
import img from '../assets/a1.png';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Debugging: log data sebelum validasi
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);


        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // Menampilkan pesan berhasil
                navigate('/login');// Redirect atau logika lain setelah signup berhasil
            } else {
                alert(data.message); // Menampilkan pesan error
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Terjadi kesalahan saat membuat akun.");
        }
    };

    return (
        <div className="w-full flex flex-col md:flex-row min-h-screen font-inter">
            {/* Bagian Kiri */}
            <div className="flex w-full md:w-6/12 justify-center items-center">
                <div className="bg-white rounded-lg w-full px-[80px] md:flex md:flex-col md:items-center justify-center">
                    <div className="flex items-center mb-6 w-full gap-3">
                        <div className="bg-black p-2 rounded-full">
                            <img src={imglogo} alt="Logo LF" className="h-8 w-8" />
                        </div>
                        <h1 className="text-2xl font-extrabold text-[#F492A1]">LearnFun</h1>
                    </div>

                    <h2 className="text-2xl font-extrabold font-inter mb-2">DAFTAR</h2>
                    <p className="text-[#818181] mb-6 font-inter text-sm">
                        Mulai buat akun untuk dapat menjawab pertanyaanmu lebih cepat dan berinteraksi dengan pengguna lainnya
                    </p>

                    <form className="w-full" onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold font-inter mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Username"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold font-inter mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-inter font-bold mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 font-inter text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            BUAT AKUN
                        </button>
                    </form>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className="hidden lg:flex w-full md:w-6/12 items-center justify-center bg-white ">
                <div>
                    <img
                        src={`${img}`}
                        alt="Ilustrasi pencarian"
                        className="mx-auto max-w-full h-[400px] "
                    />
                    <div className='flex flex-col font-inter justify-center items-center text-[#8F94CD] text-[36px] font-extrabold '>
                    <h2 className="mt-6">Temukan Jawaban</h2>
                    <p className="">Kembangkan Pengetahuan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
