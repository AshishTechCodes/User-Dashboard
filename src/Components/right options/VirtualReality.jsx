import React from "react";

const VirtualReality = () => {
  return (
    <div className="relative h-fit text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
        // Replace with actual background image URL
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full p-10">

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          {/* Weather Widget */}
          <div className="col-span-1 bg-white text-gray-600 bg-opacity-10 p-6 rounded-lg hover:bg-black hover:text-white">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold">28°C</h1>
                <p className="text-gray-300">CLOUDY</p>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/50" // Replace with weather icon
                  alt="Weather"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* To-Do Widget */}
          <div className="col-span-1 bg-white text-gray-600 bg-opacity-10 p-6 rounded-lg  hover:bg-black hover:text-white">
            <h2 className="text-lg font-bold mb-2">To Do</h2>
            <p>7 items</p>
            <ul className="mt-2 text-gray-300">
              <li>Shopping</li>
              <li>Meeting</li>
            </ul>
          </div>

          {/* Music Player */}
          <div className="col-span-1 bg-white text-gray-600 bg-opacity-10 p-6 rounded-lg  hover:bg-black hover:text-white">
            <h2 className="text-lg font-bold mb-2">Night Jazz</h2>
            <p className="text-gray-300">Gary Cakeman</p>
            <div className="flex items-center gap-2 mt-4">
              <button className="p-2 bg-gray-300 rounded-full">
                <i className="fas fa-backward"></i>
              </button>
              <button className="p-2 bg-gray-300 rounded-full">
                <i className="fas fa-play"></i>
              </button>
              <button className="p-2 bg-gray-300 rounded-full">
                <i className="fas fa-forward"></i>
              </button>
            </div>
          </div>

          {/* Emails Widget */}
          <div className="col-span-1 bg-white bg-opacity-10 text-gray-600 p-6 rounded-lg hover:bg-black hover:text-white">
            <h2 className="text-lg font-bold mb-2">Emails (21)</h2>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Check</button>
          </div>

          {/* Messages Widget */}
          <div className="col-span-1 bg-white text-gray-600 bg-opacity-10 p-6 rounded-lg  hover:bg-black hover:text-white">
            <h2 className="text-lg font-bold mb-2">Messages</h2>
            <div className="flex gap-2 mt-2">
              <img
                src="https://via.placeholder.com/30" // Replace with user avatars
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualReality;