import React from 'react';

const Logout = ({ onLogout,onOptionSelect }) => {
  const handleLogout = () => {
    // Perform logout actions
    onLogout();
  };
  const handleCancel = () => {
    // Redirect to Dashboard
    onOptionSelect('Dashboard');
  };

  return (
    <div className="h-fit flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Yes, Logout
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;