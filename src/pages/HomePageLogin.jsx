import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const HomePageLogin = ({ username, onLogout }) => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-black p-2 rounded-full">
              <i className="fas fa-graduation-cap text-white"></i>
            </div>
            <span className="ml-3 text-2xl font-bold">LearnFun</span>
          </div>
          <div>
            <span className="mr-4">Welcome, {username}!</span>
            <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded text-white">
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto mt-10">
        <section className="text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white">
          <h1 className="text-4xl font-bold">Selamat Datang di LearnFun, {username}!</h1>
          <p className="text-white mt-4">
            LearnFun adalah solusi yang tepat untuk kamu yang ingin memperluas pengetahuan dan
            mendapatkan jawaban atas semua pertanyaanmu
          </p>
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full">
            Ajukan Pertanyaan
          </button>
        </section>

        {/* Testimonial Section */}
        <section className="bg-pink-100 p-6 rounded-lg mb-10">
          <div className="flex items-center">
            <div className="bg-purple-400 p-10 rounded-lg">
              <i className="fas fa-graduation-cap text-white text-6xl"></i>
              <p className="text-white text-2xl mt-4">LearnFun</p>
            </div>
            <div className="ml-6">
              <div className="flex items-center mb-4">
                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full" />
                <div className="ml-4">
                  <p className="font-bold">Irma Amelia N</p>
                  <p className="text-gray-500">11 Sep 2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur.</p>
              <div className="flex items-center">
                <div className="text-yellow-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pertanyaan Terbaru (Question Carousel) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pertanyaan Terbaru</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
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
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Lihat Jawaban</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-400 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Web LearnFun</p>
          <p>Temukan Jawaban, Kembangkan Pengetahuan</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageLogin;
