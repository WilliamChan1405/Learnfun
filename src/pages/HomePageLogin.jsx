import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="bg-black rounded-full p-2">
                        <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <span className="font-bold text-lg">LearnFun</span>
                </div>
                <div>
                    <i className="fas fa-user-circle text-2xl"></i>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold">Temukan Jawaban<br />Kembangkan Pengetahuan</h1>
                <p className="mt-4">LearnFun adalah solusi yang tepat untuk kamu yang ingin memperluas pengetahuan dan mendapatkan jawaban atas semua pertanyaanmu</p>
                <button className="mt-6 bg-pink-400 text-white py-2 px-4 rounded-lg shadow-lg">Ajukan Pertanyaan</button>
            </div>
        </header>
    );
};

const TestimonialCard = () => {
    return (
        <div className="ml-10 bg-pink-100 p-10 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full" />
                <div>
                    <h3 className="font-bold">Irma Amelia N</h3>
                    <p>11 Sep 2024</p>
                </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem.</p>
            <div className="mt-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
            </div>
            <div className="mt-4 flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
        </div>
    );
};

const RecentQuestionCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full" />
                <div>
                    <h3 className="font-bold">Irma Amelia N</h3>
                    <p>11 Sep 2024</p>
                </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem.</p>
            <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded-lg shadow-lg w-full">Lihat Jawaban</button>
        </div>
    );
};

const MainContent = () => {
    return (
        <main className="mt-10">
            <section className="flex justify-center items-center">
                <div className="bg-purple-300 p-10 rounded-lg shadow-lg text-center">
                    <div className="bg-black rounded-full p-4 inline-block">
                        <i className="fas fa-graduation-cap text-white text-2xl"></i>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-white">LearnFun</h2>
                </div>
                <TestimonialCard />
            </section>

            <section className="mt-10 px-10">
                <h2 className="text-2xl font-bold">Pertanyaan Terbaru</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <RecentQuestionCard />
                    <RecentQuestionCard />
                    <RecentQuestionCard />
                </div>
                <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
            </section>
        </main>
    );
};

const Footer = () => {
    return (
        <footer className="bg-purple-300 mt-10 p-6 text-white text-center">
            <p>&copy; 2024 Web LearnFun</p>
            <p>Temukan Jawaban, Kembangkan Pengetahuan</p>
            <div className="mt-4 flex justify-center space-x-4">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;
