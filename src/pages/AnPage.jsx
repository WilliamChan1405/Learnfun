import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ProfilePage from "./ProfilePage";
import img from '../assets/LF.png';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  const { questionId } = useParams(); // Get questionId from the URL
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(''); // State for the answer input

  useEffect(() => {
    const fetchQuestionById = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/questions/${questionId}`);
        const data = await response.json();
        if (response.ok) {
          setQuestion(data);
        } else {
          console.error('Failed to fetch question:', data.message);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    if (questionId) {
      fetchQuestionById();
    }
  }, [questionId]);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

    if (!userId) {
      alert("You need to log in to submit an answer.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question_id: questionId,
          user_id: userId,
          answer,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Answer submitted successfully!');
        setAnswer(''); // Clear the answer input field
      } else {
        alert(data.message || 'Failed to submit answer');
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
      alert('Failed to submit answer');
    }
  };

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-white shadow-md rounded-lg mb-6 border border-700 w-1000 h-auto p-4">
      <h2 className="text-white bg-blue-700 rounded-t-lg p-2 border-b border-blue-700">Question</h2>
      <div className="flex items-start mt-4 p-3">
        <img src={question.userAvatar || "https://placehold.co/50x50"} alt="User avatar" className="rounded-full w-12 h-12" />
        <div className="ml-4">
          <div className="flex items-center">
            <span className="font-bold">{question.userName}</span>
            <span className="text-gray-500 ml-2">{new Date(question.created_at).toLocaleString()}</span>
          </div>
          <p className="mt-2 text-gray-700">{question.body}</p>
        </div>
      </div>
      
      {/* Answer Form */}
      <form onSubmit={handleAnswerSubmit} className="mt-6">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer here..."
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-3 bg-pink-400 text-white rounded-full py-2 px-4 shadow-md"
        >
          Submit Answer
        </button>
      </form>
    </section>
  );
};

// Komponen BestAnswer tetap
// const BestAnswer = ({ name, date, content, rating }) => {
//   return (
//     <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//       <h2 className="text-white bg-gradient-to-r from-purple-400 to-blue-300 rounded-t-lg p-2">Jawaban Terbaik</h2>
//       <div className="flex items-start mt-4">
//         <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12"/>
//         <div className="ml-4">
//           <div className="flex items-center">
//             <span className="font-bold">{name}</span>
//             <span className="text-gray-500 ml-2">{date}</span>
//           </div>
//           <p className="mt-2 text-gray-700">{content}</p>
//           <div className="flex items-center mt-2">
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-yellow-500">
//                 <i className={index < Math.floor(rating) ? "fas fa-star" : (rating % 1 >= 0.5 && index < Math.ceil(rating) ? "fas fa-star-half-alt" : "far fa-star")}></i>
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="ml-auto flex items-center">
//           <i className="fas fa-flag text-gray-500"></i>
//           <i className="fas fa-heart text-red-500 ml-4"></i>
//         </div>
//       </div>
//     </section>
//   );
// };

const BestAnswer = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/questions/${questionId}/answers`);
        const data = await response.json();
        if (response.ok) {
          setAnswers(data);
        } else {
          console.error('Failed to fetch answers:', data.message);
        }
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, [questionId]);

  const handleLike = async (answerId) => {
    const userId = localStorage.getItem('userId');

    try {
      const response = await fetch(`http://localhost:5000/api/answers/${answerId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        setAnswers((prevAnswers) =>
          prevAnswers.map((answer) =>
            answer.id === answerId ? { ...answer, likeCount: answer.likeCount + 1 } : answer
          )
        );
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error liking answer:', error);
    }
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-white bg-gradient-to-r from-purple-400 to-blue-300 rounded-t-lg p-2">Jawaban Terbaik</h2>
      {answers.map((answer) => (
        <div key={answer.id} className="flex items-start mt-4 mb-6">
          <img src={answer.userAvatar || 'https://placehold.co/50x50'} alt="User avatar" className="rounded-full w-12 h-12" />
          <div className="ml-4 w-full">
            <div className="flex items-center">
              <span className="font-bold">{answer.userName}</span>
              <span className="text-gray-500 ml-2">{new Date(answer.created_at).toLocaleString()}</span>
            </div>
            <p className="mt-2 text-gray-700">{answer.answer}</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-pink-500 text-white rounded-full px-3 py-1 mr-4"
                onClick={() => handleLike(answer.id)}
              >
                Like
              </button>
              <span>{answer.likeCount} Likes</span>
            </div>
          </div>
        </div>
      ))}
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
  const [questions, setQuestions] = useState([]); // State untuk menyimpan pertanyaan terbaru

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
  }, []);

  return (
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