import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    return (
        <div className="bg-gray-100">
            <Header />
            <MainContent />
        </div>
    );
};

const Header = () => {
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-4xl">🔖</span>
                <h1 className="text-3xl text-white font-bold ml-2">Bookmark Manager</h1>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center">
                <i className="fas fa-home mr-2"></i> HOME PAGE
            </button>
        </header>
    );
};

const MainContent = () => {
    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-4">Pertanyaan Favorite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BookmarkCard 
                    name="Hagai Kopusi" 
                    date="14 Sep 2024" 
                    content="Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem."
                />
                <BookmarkCard 
                    name="Irma Amelia N" 
                    date="11 Sep 2024" 
                    content="Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem."
                />
                <BookmarkCard 
                    name="Irma Amelia N" 
                    date="11 Sep 2024" 
                    content="Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem."
                />
            </div>
        </main>
    );
};

const BookmarkCard = ({ name, date, content }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-pink-200">
            <div className="flex items-center mb-4">
                <img src="https://placehold.co/50x50" alt={`Avatar of ${name}`} className="w-12 h-12 rounded-full mr-4"/>
                <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-gray-500">{date}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{content}</p>
            <button className="bg-pink-400 text-white w-full py-2 rounded-lg">Lihat Jawaban</button>
        </div>
    );
};

// Render aplikasi
ReactDOM.render(<App />, document.getElementById('root'));
