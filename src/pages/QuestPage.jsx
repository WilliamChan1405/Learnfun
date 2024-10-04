import React, { useState } from 'react';

const QuestPage = () => {
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan atau menyembunyikan form
  const [question, setQuestion] = useState(''); // State untuk menyimpan pertanyaan yang diajukan

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk mengirim pertanyaan ke server atau state global
    console.log("Pertanyaan diajukan: ", question);
    setQuestion(''); // Reset pertanyaan setelah dikirim
    setShowForm(false); // Sembunyikan form setelah mengajukan pertanyaan
  };

  return (
    <div className="flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-purple-400 to-blue-300 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-black rounded-full p-2">
            <i className="fas fa-graduation-cap text-white"></i>
          </div>
          <span className="text-white text-xl font-bold ml-2">LearnFun</span>
        </div>
      </header>
      <main className="w-full max-w-3xl mt-8">
        {/* Tombol Ajukan Pertanyaan */}
        <button onClick={() => setShowForm(true)} className="bg-pink-400 text-white rounded-lg px-4 py-2 mt-4">
          Ajukan Pertanyaan
        </button>

        {/* Form Ajukan Pertanyaan */}
        {showForm && (
          <section className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h2 className="text-gray-800 font-bold">Ajukan Pertanyaan</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full border rounded-lg p-4 mt-2"
                rows="4"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Tuliskan pertanyaanmu disini..."
                required
              />
              <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">Kirim Pertanyaan</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 ml-2">Batal</button>
            </form>
          </section>
        )}

        {/* Jawaban Terbaik */}
        <section className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-white bg-gradient-to-r from-purple-400 to-pink-300 rounded-t-lg p-2">Jawaban Terbaik</h2>
          <div className="flex items-start mt-4">
            <img src="https://placehold.co/50x50" alt="Profile picture" className="rounded-full w-12 h-12 mr-4" />
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Irma Amelia N</h3>
                  <p className="text-gray-500 text-sm">11 Sep 2024</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-flag text-gray-500 mr-2"></i>
                  <i className="fas fa-heart text-red-500"></i>
                </div>
              </div>
              <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuestPage;
