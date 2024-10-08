import React, { useState } from 'react';

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

const QuestionForm = () => {
  return (
    <section className="bg-white shadow-md rounded-lg mb-6 border border-700 relative">
      <h2 className="text-white bg-blue-700 rounded-t-lg p-2 border-b border-blue-700">Ajukan Pertanyaan</h2>
      <div className="h-48 overflow-y-auto">
        <textarea 
          className="w-full p-4 border-t-0 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          rows="4" 
          placeholder="Tuliskan pertanyaanmu disini..."
        ></textarea>
      </div>
      <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] bg-pink-400 text-white rounded-full w-40 py-2 shadow-md">
        Kirim Pertanyaan
      </button>
    </section>
  );
};

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
      <div className="mt-4 relative">
        <input type="text" className="w-full border rounded-lg p-2" placeholder="Tambahkan komentar...."/>
        <button className="absolute right-4 top-2 text-gray-500"><i className="fas fa-paper-plane"></i></button>
      </div>
    </section>
  );
};

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

const AdditionalQuestions = () => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-xl font-semibold">Ada Pertanyaan Lain?</h3>
      <div className="mt-4">
        <button className="bg-yellow-500 text-white rounded-lg px-4 py-2 mr-2">Cari Jawaban Lain</button>
        <button className="bg-blue-700 text-white rounded-lg px-4 py-2">Tambahkan Pertanyaan</button>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = bestAnswersData.length;

  const currentAnswer = bestAnswersData[currentPage - 1];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="w-full max-w-4xl mt-8">
        <QuestionForm />
        <BestAnswer {...currentAnswer} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        <AdditionalQuestions />
      </main>
    </div>
  );
};

export default App;
