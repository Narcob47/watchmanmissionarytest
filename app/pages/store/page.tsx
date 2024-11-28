import React from "react";
import BookCard from "../../components/store/BookCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Store = () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream.",
    //   price: "K15.99",
      image: "/assets/2.png",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A tale of justice and racial inequality.",
    //   price: "K12.49",
      image: "/assets/2.png",
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about surveillance and totalitarianism.",
    //   price: "K14.99",
      image: "/assets/2.png",
    },
    // Add more books as needed
  ];

  return (
    <div>
    <Header/>
        <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Book Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {books.map((book, index) => (
                <BookCard
                key={index}
                title={book.title}
                author={book.author}
                description={book.description}
                // price={book.price}
                image={book.image}
                />
            ))}
            </div>
        </div>
        </div>
    <Footer/>
    </div>
  );
};

export default Store;
