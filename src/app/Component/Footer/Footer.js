import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[100%] h-[50vh] px-[15%] py-[3%] bg-zinc-950  flex justify-between items-start mx-auto" style={{borderTop:"1px solid rgba(255, 255, 255, 0.311)"}}>
      <div className="flex flex-col justify-between relative h-[100%] w-[50%]">
        <div className="relative">
          <p className="absolute left-0 top-[40px] text-white text-sm font-medium font-['General Sans'] leading-tight">The Most Realistic Undress AI</p>
          <h2 className="text-2xl font-semibold font-['General Sans'] text-transparent w-[30%]" style={{ background: "linear-gradient(90deg, #9A57EE, #F35CB9, #EE9A3D)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Bikinioff.ai</h2>
        </div>
        <p className="text-gray-400 text-xs font-medium font-['General Sans']">© Bikinioff AI, 2024. All rights reserved.</p>
      </div>
        <h3 className="text-white text-sm font-semibold font-['General Sans']">Links</h3>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-1">
        <h3 className="text-white text-sm font-semibold font-['General Sans']">Resources</h3>

          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">About us</a></li>
          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">Pricing</a></li>
          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">Contact us</a></li>
          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">Blogs</a></li>
          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 text-sm font-medium font-['General Sans']">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
