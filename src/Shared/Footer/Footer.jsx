import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] text-black dark:bg-gray-800 dark:text-white pt-2 pb-5 ">
      <div className="max-w-screen-2xl container mx-auto py-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/*-----------Logo-----------*/}
        <div>
          <h2>
            <a href="!" className="text-3xl font-bold text-black">
              Logo
            </a>
          </h2>
          <p className="text-black md:mr-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quae
            et ex.
          </p>
        </div>

        {/*-------Services----Dive-------*/}
        <div>
          <h2 className="text-xl font-semibold">Services</h2>
          <ul>
            <li>
              <Link to="/">Email Marckting</Link>
            </li>
            <li>
              <Link to="/">Social Mediea Marckting</Link>
            </li>
            <li>
              <Link to="/">Afilet Marckting</Link>
            </li>
          </ul>
        </div>

        {/*-------Services----Dive-------*/}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        {/*-------Services----Dive-------*/}
        <div>
          <h2 className="text-xl font-semibold">Support</h2>
          <ul className="mt-3">
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>

        {/*-------Services----Dive-------*/}
        <div>
          <h2 className="text-xl font-semibold">Fllow Us</h2>
          <ul className="mt-3">
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">WhatsApp</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
