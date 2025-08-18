import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IoIosStar } from "react-icons/io";

const testimonials = [
  {
    img: "/src/assets/User_1.jpeg",
    name: "John Doe",
    role: "Software Engineer",
    review: "We recently bought our dream home through this platform, and the experience was fantastic! The property listings were clear with high-quality photos and detailed descriptions, which made shortlisting so much easier."
  },
  {
    img: "/src/assets/User_2.jpeg",
    name: "Bella Swan",
    role: "Software Engineer",
    review: "Found my dream home easily! The site is user-friendly and agents were very supportive. The virtual tour feature saved us a lot of time, and the agent assigned was very professional, patient, and transparent throughout the process."
  },
  {
    img: "/src/assets/User_3.png",
    name: "Alex Johnson",
    role: "Software Engineer",
    review: "Buying our first home felt effortless with this platform. The listings were genuine, the agents were transparent, and the entire process from site visits to paperwork was well organized. Truly a reliable place to find your dream home."
  }
];

function Testimonial() {
  return (
    <section id="test" className="container my-24 mx-auto px-6">
      <div className="text-center mb-2">
        <h2 className="text-4xl">
          <span className="font-bold">Customer </span>
          <span className="underline">Testimonials</span>
        </h2>
        <p className="my-2 font-light text-lg">
          Real Stories from those who found home with Us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:mx-12 md:mx-20 lg:mx-32 m-8 my-10">
        {testimonials.map((t, index) => (
          <Box key={index} component="section" sx={{ textAlign: "center" }}>
            <Paper elevation={3} className="p-6 rounded-2xl shadow-lg max-w-md mx-auto">
              <img
                src={t.img}
                alt={`${t.name} testimonial`}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h1 className="text-lg font-semibold">{t.name}</h1>
              <h6 className="text-gray-500 text-sm">{t.role}</h6>
              <div className="flex m-3 gap-2 justify-center">
                {Array(5).fill().map((_, i) => (
                  <IoIosStar key={i} color="maroon" />
                ))}
              </div>
              <p className="text-gray-600 mt-3 text-sm italic">
                "{t.review}"
              </p>
            </Paper>
          </Box>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
