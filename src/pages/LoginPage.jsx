import React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import img from '../assets/a1.png'; // Pastikan ini adalah jalur yang benar ke gambar Anda.

const LoginPage = ({ handleCloseLogin, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi: Pastikan email dan password diisi
    if (!email || !password) {
      alert('Harap masukkan email dan password yang valid.');
      return;
    }

    // Proses login (Anda bisa menambahkan logika autentikasi di sini)
    console.log('Login berhasil dengan:', { email, password });
    onLoginSuccess(); // Panggil fungsi ini setelah login berhasil
  };

  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen font-inter">
      {/* Bagian Kiri */}
      <div className="flex w-full md:w-6/12 justify-center items-center">
        <div className="bg-white rounded-lg w-full px-[80px] md:flex md:flex-col md:items-center justify-center">
          <div className="flex items-center mb-6 w-full">
          </div>
          <h1 className="text-2xl font-extrabold font-inter mb-2">MASUK</h1>
          <p className="text-gray-600 mb-6 font-inter text-sm">
            Silakan masuk untuk menjawab pertanyaan dan berinteraksi dengan pengguna lainnya.
          </p>

          {/* Form Login */}
          <form className="w-full" onSubmit={handleLogin}>
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
                required
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
                  required
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
              MASUK
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-inter">atau masuk dengan</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <img className="h-5 w-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                <span className="ml-2">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <img className="h-5 w-5" src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook logo" />
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 font-inter">
            Belum punya akun?{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Daftar
            </a>
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="hidden lg:flex w-full md:w-6/12 items-center justify-center bg-white ">
        <div>
          <img
            src={`${img}`}
            alt="Ilustrasi pencarian"
            className="mx-auto max-w-full h-[400px]"
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

export default LoginPage;
