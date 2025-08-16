import {React} from "react";

function Header() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 text-white">
        <div className="flex items-center gap-2">
          <img src="../icon.png" alt="logo" width="50" height="50" />
          <h2 className="text-2xl font-bold">Estate</h2>
        </div>
        <ul className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="cursor-pointer hover:text-yellow-500">Home</a>
          <a href="#about" className="cursor-pointer hover:text-yellow-500">About</a>
          <a href="#proj" className="cursor-pointer hover:text-yellow-500">Projects</a>
          <a href="#test" className="cursor-pointer hover:text-yellow-500">Testimonials</a>
        </ul>
        <div className="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </div>
        <button className="hidden md:block border border-white  text-white font-semibold rounded px-6 py-2 
        hover:bg-gray-100 hover:text-stone-900">
          Sign Up
        </button>
      </div>
    </div>
    
  );
}

export default Header;
