<html>
<head>
    <title>LearnFun</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div id="root"></div>
    <script type="text/babel">
        const { useEffect } = React;

        const App = () => {
            useEffect(() => {
                new Swiper('.swiper-container', {
                slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
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
                    },
                });
            }, []);

            return (
                <div>
                    <header className="bg-gradient-to-r from-purple-400 to-blue-400 p-6 text-white">
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="bg-black p-2 rounded-full">
                                    <i className="fas fa-graduation-cap text-white"></i>
                                </div>
                                <span className="ml-3 text-2xl font-bold">LearnFun</span>
                            </div>
                            <div>
                                <button className="mr-4 text-white">Masuk</button>
                                <button className="bg-blue-600 px-4 py-2 rounded text-white">Daftar</button>
                            </div>
                        </div>
                    </header>
                    <main className="container mx-auto mt-10">
                        <section className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-white">Temukan Jawaban Kembangkan Pengetahuan</h1>
                            <p className="text-white mt-4">LearnFun adalah solusi yang tepat untuk kamu yang ingin memperluas pengetahuan dan mendapatkan jawaban atas semua pertanyaanmu</p>
                            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full">Ajukan Pertanyaan</button>
                        </section>
                        <section className="bg-pink-100 p-6 rounded-lg mb-10">
                            <div className="flex items-center">
                                <div className="bg-purple-400 p-10 rounded-lg">
                                    <i className="fas fa-graduation-cap text-white text-6xl"></i>
                                    <p className="text-white text-2xl mt-4">LearnFun</p>
                                </div>
                                <div className="ml-6">
                                    <div className="flex items-center mb-4">
                                        <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full"/>
                                        <div className="ml-4">
                                            <p className="font-bold">Irma Amelia N</p>
                                            <p className="text-gray-500">11 Sep 2024</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem.</p>
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
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Pertanyaan Terbaru</h2>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {Array(10).fill().map((_, i) => (
                                        <div key={i} className="swiper-slide bg-white p-6 rounded-lg shadow">
                                            <div className="flex items-center mb-4">
                                                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full"/>
                                                <div className="ml-4">
                                                    <p className="font-bold">Irma Amelia N</p>
                                                    <p className="text-gray-500">11 Sep 2024</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur. Enim nulla metus vivamus consectetur. Tempor quis maecenas ut rhoncus morbi enim eleifend. In in et euismod amet fringilla. Pellentesque quisque mi euismod cursus lacinia enim ac lorem.</p>
                                            <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Lihat Jawaban</button>
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </section>
                    </main>
                    <footer className="bg-purple-400 text-white p-6 mt-10">
                        <div className="container mx-auto text-center">
                            <p>&copy; 2024 Web LearnFun</p>
                            <p>Temukan Jawaban, Kembangkan Pengetahuan</p>
                            <div className="flex justify-center mt-4">
                                <a href="#" className="mx-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="mx-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="mx-2"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>