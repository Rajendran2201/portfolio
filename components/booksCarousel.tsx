"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { books } from '@/src/data/booksData';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

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
      className="py-4"
    >
      {books.map((book, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-gray-900/80 backdrop-blur-lg p-4 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 h-full flex flex-col">
            
            {/* Image wrapper to preserve aspect ratio */}
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 border border-yellow-500/30 shadow-inner">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-contain"
                priority={idx < 3}
              />
            </div>
            
            <h3 className="text-xl font-semibold text-yellow-300">{book.title}</h3>
            <p className="text-sm text-yellow-100 italic mb-2">by {book.author}</p>
            <p className="text-gray-300 text-sm flex-grow">{book.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
