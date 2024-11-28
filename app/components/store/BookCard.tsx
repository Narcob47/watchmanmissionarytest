import React from "react";

interface BookProps {
  title: string;
  author: string;
  description: string;
  image: string;
}

const BookCard: React.FC<BookProps> = ({ title, author, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">by {author}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Get Now
      </button>
    </div>
  );
};

export default BookCard;
