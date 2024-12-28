//Sign in
import React, { useState } from 'react';
import axios from 'axios';
import { Lock, MailIcon, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Signin = ({onNavigate, onAuthSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form Data Updated:', { ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://server-urf2.onrender.com/signin', formData);
    const { user } = response.data;
    alert(response.data.message);
    onAuthSuccess({ ...user, password: formData.password });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error: Could not sign in. Please try again.';
    alert(errorMessage);
  }
};

  return (
    <div className="flex items-center justify-center h-fit p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
  {/* Email Field */}
  <div className="relative">
    <label className="block text-gray-600 mb-1">Email</label>
    <div className="relative">
      <input
        type="email"
        name="email" // Add name attribute
        value={formData.email} // Bind the value to state
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
      />
      <MailIcon className="absolute left-3 top-3 text-gray-500" />
    </div>
  </div>

  {/* Password Field */}
  <div className="relative">
    <label className="block text-gray-600 mb-1">Password</label>
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password" // Add name attribute
        value={formData.password} // Bind the value to state
        onChange={handleChange}
        placeholder="Enter your password"
        className="w-full px-4 py-2 pl-10 pr-10 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
      />
      <Lock className="absolute left-3 top-3 text-gray-500" />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
  >
    Log In
  </button>
</form>

        {/* Toggle Forms */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account yet?{' '}
            <button
              type="button"
              onClick={onNavigate}
              className="text-blue-500 font-semibold hover:underline flex justify-center items-center gap-1">
              Sign Up
              <ArrowRight size={18} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
