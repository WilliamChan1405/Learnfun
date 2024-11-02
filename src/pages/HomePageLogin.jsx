import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Swiper, SwiperSlide } from 'swiper/react';
import QuestPage from './QuestPage';
import img from '../assets/LF.png';
import LoginPage from './LoginPage';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showQuestPage, setShowQuestPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [latestFavorite, setLatestFavorite] = useState(null);
  const [questions, setQuestions] = useState([]); // State untuk menyimpan pertanyaan
  const navigate = useNavigate();

  const location = useLocation(); // Hook untuk melacak lokasi rute

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/questions'); // Endpoint untuk mendapatkan semua pertanyaan
        const data = await response.json();
        if (response.ok) {
          setQuestions(data); // Simpan data ke state
        } else {
          console.error('Gagal mengambil pertanyaan:', data.message);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions(); // Panggil fungsi untuk mengambil pertanyaan saat komponen dimuat

    const fetchLatestFavorite = async () => {
        const userId = localStorage.getItem('userId');
        if (userId) {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}/latest-favorite`);
            const data = await response.json();
            if (response.ok) {
            setLatestFavorite(data); // Update latestFavorite with the fetched data
            } else {
            console.error('Failed to fetch latest favorite:', data.message);
            }
        } catch (error) {
            console.error('Error fetching latest favorite:', error);
        }
        }
    };

    fetchQuestions();
    fetchLatestFavorite();
    }, []);
      

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleQuestClick = () => navigate('/quest');
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div>
      {/* Header akan disembunyikan jika path adalah '/login' */}
      {location.pathname !== '/login' && (
        <header className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white fixed top-0 w-full z-50 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-black p-2 rounded-full">
                <img src={img} alt="Logo LF" className="h-8 w-8" />
              </div>
              <span className="ml-3 text-2xl font-inter font-bold">LearnFun</span>
            </div>
            <div>
              {!isLoggedIn ? (
                <>
                <div className="flex space-x-4">
                  <Link to="/profile" className="bg-blue-600 px-4 py-2 rounded font-inter text-white">Profile</Link>
                  <Link to="/" className="bg-blue-600 px-4 py-2 rounded font-inter text-white">Keluar</Link>
                  </div>
                </>
              ) : (
                <>

                </>)
              }
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="container mx-auto pt-24">
        {!showLogin && !showQuestPage ? (
          <>
 {/* Hero Section */}
 <section className="text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white rounded-bl-[100px]">
              <h1 className="text-4xl font-bold">Temukan Jawaban, Kembangkan Pengetahuan</h1>
              <p className="text-white mt-4">
                LearnFun adalah solusi yang tepat untuk kamu yang ingin memperluas pengetahuan dan
                mendapatkan jawaban atas semua pertanyaanmu
              </p>
              <button 
                className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full"
                onClick={handleQuestClick}
              >
                Ajukan Pertanyaan
              </button>
            </section>

            {/* Testimonial Section */}
            <section className="bg-pink-100 p-6 rounded-lg mb-10">
              <div className="flex items-center">
                <div className="bg-purple-400 p-10 rounded-lg">
                  <i className="fas fa-graduation-cap text-white text-6xl"></i>
                  <img src={img} alt="Logo LF" className="h-16 w-16" />
                </div>
                <div className="ml-6">
                  {latestFavorite ? (
                    <>
                      <div className="flex items-center mb-4">
                        <img src={latestFavorite.userAvatar || "https://placehold.co/50x50"} alt="User avatar" className="w-24 h-24 rounded-full object-cover" />
                        <div className="ml-4">
                          <p className="font-bold">{latestFavorite.userName}</p>
                          <p className="text-gray-500">{new Date(latestFavorite.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{latestFavorite.answer}</p>
                      <div className="flex items-center">
                        <div className="text-yellow-500">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-700 mb-4">No favorite answers yet.</p>
                  )}
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
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {questions.map((question, index) => (
                <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow relative">
                  <div className="flex items-start mb-4">
                    <img src={question.userAvatar || "https://placehold.co/50x50"} alt="User avatar" className="rounded-full w-12 h-12" />
                    <div className="ml-4">
                      <p className="font-bold">{question.userName}</p>
                      <p className="text-gray-500">{new Date(question.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{question.body}</p>
                  <Link to={`/answer/${question.id}`}>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Lihat Jawaban</button>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          </>
        ) : showLogin ? (
          <LoginPage handleCloseLogin={handleCloseLogin} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <QuestPage />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-purple-400 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Web LearnFun</p>
          <p>Temukan Jawaban, Kembangkan Pengetahuan</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
