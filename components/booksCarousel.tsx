"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { books } from '@/src/data/booksData';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function BooksCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {books.map((book, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-gray-900/80 backdrop-blur-lg p-4 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 h-full flex flex-col">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-60 object-cover rounded-lg mb-4 border border-yellow-500/30 shadow-inner"
            />
            <h3 className="text-xl font-semibold text-yellow-300">{book.title}</h3>
            <p className="text-sm text-yellow-100 italic mb-2">by {book.author}</p>
            <p className="text-gray-300 text-sm flex-grow">{book.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}