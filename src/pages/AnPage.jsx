import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ProfilePage from "./ProfilePage";
import img from '../assets/LF.png';

// Data jawaban terbaik untuk setiap halaman
const bestAnswersData = [
  {
    name: 'Irma Amelia N',
    date: '11 Sep 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vulputate nunc...',
    rating: 4.5
  },
  {
    name: 'John Doe',
    date: '12 Sep 2024',
    content: 'Vestibulum vel velit malesuada, dignissim nulla nec, ultricies quam...',
    rating: 4
  },
  {
    name: 'Jane Smith',
    date: '13 Sep 2024',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
    rating: 5
  },
  {
    name: 'Ahmad Al Farisi',
    date: '14 Sep 2024',
    content: 'Curabitur eleifend, libero vel elementum sagittis, lorem ipsum malesuada risus...',
    rating: 3.5
  },
  {
    name: 'Linda Pranata',
    date: '15 Sep 2024',
    content: 'Integer malesuada orci non orci feugiat feugiat. Sed ac sem quis odio faucibus...',
    rating: 5
  },
];

// Komponen Header
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-black p-2 rounded-full">
            <img src={img} alt="Logo LF" className="h-8 w-8" />
            <i className="fas fa-graduation-cap text-white"></i>
          </div>
          <span className="ml-3 text-2xl font-bold">LearnFun</span>
        </div>
        <div>
          <Link to="/profile">
            <button className="bg-gray-500 text-white px-4 py-2 rounded">Profile</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

// Komponen Footer
const Footer = () => {
  return (
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
  );
};

// Modifikasi komponen Question menjadi seperti jawaban terbaik
const Question = () => {
  return (
    <section className="bg-white shadow-md rounded-lg mb-6 border border-700 w-1000 h-56">
      <h2 className="text-white bg-blue-700 rounded-t-lg p-2 border-b border-blue-700">Pertanyaan</h2>
      <div className="flex items-start mt-4 p-3">
        <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12"/>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="font-bold">Nama Pengguna</span>
            <span className="text-gray-500 ml-2">Tanggal Pertanyaan</span>
          </div>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vulputate nunc...</p>
        </div>
      </div>
      <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[290px] bg-pink-400 text-white rounded-full w-40 py-2 shadow-md">
        Tambah Jawaban
      </button>
    </section>
  );
};

// Komponen BestAnswer tetap
const BestAnswer = ({ name, date, content, rating }) => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-white bg-gradient-to-r from-purple-400 to-blue-300 rounded-t-lg p-2">Jawaban Terbaik</h2>
      <div className="flex items-start mt-4">
        <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12"/>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="font-bold">{name}</span>
            <span className="text-gray-500 ml-2">{date}</span>
          </div>
          <p className="mt-2 text-gray-700">{content}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">
                <i className={index < Math.floor(rating) ? "fas fa-star" : (rating % 1 >= 0.5 && index < Math.ceil(rating) ? "fas fa-star-half-alt" : "far fa-star")}></i>
              </span>
            ))}
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <i className="fas fa-flag text-gray-500"></i>
          <i className="fas fa-heart text-red-500 ml-4"></i>
        </div>
      </div>
    </section>
  );
};

// Komponen Pagination tetap
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <button 
        className="bg-gray-200 text-gray-500 rounded-full px-4 py-2 mr-2"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      >
        &lt;
      </button>
      <span>{currentPage}/{totalPages}</span>
      <button 
        className="bg-blue-700 text-white rounded-full px-4 py-2 ml-2"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      >
        &gt;
      </button>
    </div>
  );
};

// Komponen PertanyaanTerbaru dengan Swiper
const PertanyaanTerbaru = () => {
  return (
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
            <button className="bg-pink-400 text-white rounded-full py-2 px-4 hover:bg-blue-600">
              Lihat Jawaban
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// Komponen utama App
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = bestAnswersData.length;

  const currentAnswer = bestAnswersData[currentPage - 1];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full max-w-4xl mt-32 mx-auto flex-grow"> {/* Margin-top ditingkatkan di sini */}
        <Question />
        <BestAnswer {...currentAnswer} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        <PertanyaanTerbaru />
      </main>
      <Footer />
    </div>
  );
};

export default App;
