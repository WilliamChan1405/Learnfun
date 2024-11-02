import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookmarkPage = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}/bookmarks`);
                const data = await response.json();
                if (response.ok) {
                    setBookmarks(data);
                } else {
                    console.error('Failed to fetch bookmarks:', data.message);
                }
            } catch (error) {
                console.error('Error fetching bookmarks:', error);
            }
        };

        fetchBookmarks();
    }, [userId]);

    return (
        <div className="flex h-screen bg-blue-200">
            <div className="w-1/4 bg-purple-400 p-4">
                <div className="flex flex-col items-center">
                    <Link to="/profile">
                        <button className="w-full flex items-center p-2 text-white hover:bg-purple-500 rounded mb-2">
                            <i className="fas fa-user mr-2"></i>
                            <span>Account</span>
                        </button>
                    </Link>
                    <button className="w-full flex items-center p-2 text-white bg-purple-500 rounded">
                        <i className="fas fa-bookmark mr-2"></i>
                        <span>Bookmark</span>
                    </button>
                </div>
            </div>

            <div className="w-3/4 p-8">
                <div className="flex justify-end mb-4 bg-purple-400 p-4 rounded-tl-lg fixed top-0 right-0 w-3/4 z-50">
                    <Link to="/" className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        <span>HOME PAGE</span>
                        <i className="fas fa-home ml-2"></i>
                    </Link>
                </div>

                <div className="flex flex-col items-center mt-16">
                    <h1 className="text-2xl font-bold mb-6">Bookmark</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {bookmarks.map((bookmark) => (
                            <div key={bookmark.answerId} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
                                <div className="flex items-center mb-4 w-full">
                                    <img src={bookmark.userAvatar || 'https://placehold.co/50x50'} alt="User avatar" className="rounded-full w-12 h-12" />
                                    <div className="ml-4">
                                        <p className="font-bold">{bookmark.userName}</p>
                                        <p className="text-gray-500 text-sm">{new Date(bookmark.created_at).toLocaleString()}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 line-clamp-3">{bookmark.answer}</p>
                                <Link to={`/answer/${bookmark.QuestionID}`}>
                                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Lihat Pertanyaan</button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookmarkPage;
