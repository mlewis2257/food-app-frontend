import React from "react";

export default function Footer() {
  return (
    <footer className="absolute md:relative top-full right-0 md:flex flex-col md:flex-row w-full md:w-auto bg-gray-800 md:bg-transparent" >
      {/* <div className="md: flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff] py-7">
        <h1 className="lg:text-4xl text-3x1 md:mb-0 mb-6 lg:leading-normal font-semi-bold md:w-2/5></h1>
      </div>
      <div>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024 
          <a href="https://flowbite.com/" class="hover:underline">FoodSquad™</a>
          . All Rights Reserved.
        </span>
      </div> */}
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="mailto:thejoechin@gmail.com" class="hover:underline">Contact</a>
        </li>
        <li>
            <a href="#" class="hover:underline">FAQ</a>
        </li>
    </ul>
    </footer>
  );
};