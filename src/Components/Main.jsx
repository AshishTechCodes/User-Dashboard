import React, { useState } from 'react';
import Options from './left options/Options';
import Dashboard from './right options/Dashboard';
import Table from './right options/Table';
import Billing from './right options/Billing';
import Virtualreality from './right options/VirtualReality';
import RTL from './right options/RTL';
import Notifications from './right options/Notifications';
import Profile from './right options/Profile';
import Signin from './right options/Signin';
import Signup from './right options/Signup';
import Logout from './right options/Logout';
import { Bell, Settings, Star, User2 } from 'lucide-react';

const Main = () => {
  const [selectedOption, setSelectedOption] = useState('Sign In');
  const [userData, setUserData] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  //for RTL
  const isRTL = selectedOption === 'RTL';

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuthSuccess = (user) => {
    setIsAuthenticated(true);
    setUserData(user);
    setSelectedOption('Dashboard'); // Navigate to Dashboard after authentication
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setSelectedOption('Sign In');
  };
  
  const handleEditProfile = (updatedUser) => {
    setUserData(updatedUser); // Update the user data state
  };
  return (
    <div className={`bg-black h-screen w-screen flex items-center justify-center gap-5 px-5 ${isRTL ? 'flex-row-reverse':'flex-row'}`}>
      <Options onOptionSelect={handleOptionSelect} isAuthenticated={isAuthenticated}/>
      <div className='w-10/12 h-[95%] bg-red-500 rounded-md overflow-y-auto no-scrollbar'>
        <div className='flex w-full justify-between pt-5 border-b-4 sticky top-0 bg-red-500 z-50 shadow-md'>
          <div className='ml-5'>
            <span>
              <p className='text-white'>Page/{selectedOption}</p>
              <p className='text-white font-extrabold'>{selectedOption}</p>
            </span>
          </div>
          <div className='flex items-start gap-2 mr-5'>
            <input
              type='search'
              placeholder="Type here..."
              className="w-72 px-4 text-xl text-pink-500 border-2 border-pink-300 rounded-md outline-none placeholder-pink-300 transition-all focus:placeholder:translate-y-[-1rem] focus:placeholder:scale-75 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:placeholder:text-white"
            />
            <span className='flex'>
              <Star size={28} className='border-2 stroke-white' />
              <p className='border-2 text-white border-l-0 px-2'>11,017</p>
            </span>
            <Settings className='stroke-white' />
            <Bell className='stroke-white' />
            <User2 className='stroke-white' />
          </div>
        </div>

         {/* Conditional Rendering */}
         {!isAuthenticated ? (
          selectedOption === 'Sign In' ? (
            <Signin onNavigate={() => setSelectedOption('Sign Up')}  onAuthSuccess={handleAuthSuccess} />
          ) : (
            <Signup onNavigate={() => setSelectedOption('Sign In')} onAuthSuccess={handleAuthSuccess} />
          )
        ) : (
          <>
        {selectedOption === 'Dashboard' && <Dashboard />}
        {selectedOption === 'Table' && <Table />}
        {selectedOption === 'Billing' && <Billing />}
        {selectedOption === 'Virtual Reality' && <Virtualreality />}
        {selectedOption === 'RTL' && <RTL />}
        {selectedOption === 'Notification' && <Notifications />}
        {selectedOption === 'Profile' && isAuthenticated && <Profile userData={userData} onEdit={handleEditProfile}/>}
        {selectedOption === 'Logout' && <Logout onLogout={handleLogout} onOptionSelect={handleOptionSelect}/>}
        </>
        )}
      </div>
    </div>
  );
};

export default Main;