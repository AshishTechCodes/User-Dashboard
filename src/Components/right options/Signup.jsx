import React, { useState } from 'react';
import axios from 'axios';
import { User, Lock, MailIcon, Eye, EyeOff, ArrowRight, Image, XCircle, Pen } from 'lucide-react';

const Signup = ({ onNavigate,onAuthSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const [formData, setFormData] = useState({
    username: '', // Fix typo from 'usename' to 'username'
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add image data to formData
    const dataToSend = { ...formData, image: imagePreview };
    try {
      const response = await axios.post('http://localhost:5000/signup', dataToSend); // Send image data
      const { user } = response.data;
      alert(response.data.message);
      onAuthSuccess({ ...user, password: formData.password });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error: Could not sign up. Please try again.';
      alert(errorMessage);
    }
  };
  

  return (
    <div className="h-fit flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Optional Image Upload */}
          <div className="relative flex items-center justify-center">
            {!imagePreview ? (
              <label
                htmlFor="imageUpload"
                className="flex flex-col items-center justify-center w-32 h-32 border border-black border-dashed rounded-full cursor-pointer hover:bg-gray-50 group"
              >
                <Pen
                  size={25}
                  className="hidden text-gray-500 mb-2 group-hover:block"
                />
                <label className='hidden group-hover:block text-gray-500 font-medium'>EDIT</label>
                <Image
                  size={30}
                  className="text-gray-500 mb-2 group-hover:hidden"
                />
                <p className="text-sm text-gray-500 group-hover:hidden">
                  Click to upload
                </p>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            ) : (
              <div className="relative group">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-500 opacity-0 group-hover:opacity-100 rounded-full transition duration-300"
                >
                  <XCircle size={32} />
                </button>
              </div>
            )}
          </div>

          {/* Username */}
<div className="relative">
  <label className="block text-gray-600 mb-1">Username</label>
  <div className="relative">
    <input
      type="text"
      name="username" // Add 'name' attribute to match the state key
      value={formData.username} // Bind to formData state
      onChange={handleChange} // Update state on change
      placeholder="Enter your username"
      className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
    />
    <User className="absolute left-3 top-3 text-gray-500" />
  </div>
</div>

{/* Email */}
<div className="relative">
  <label className="block text-gray-600 mb-1">Email</label>
  <div className="relative">
    <input
      type="email"
      name="email" // Add 'name' attribute
      value={formData.email} // Bind to formData state
      onChange={handleChange} // Update state on change
      placeholder="Enter your email"
      className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
    />
    <MailIcon className="absolute left-3 top-3 text-gray-500" />
  </div>
</div>

{/* Password */}
<div className="relative">
  <label className="block text-gray-600 mb-1">Password</label>
  <div className="relative">
    <input
      type={showPassword ? 'text' : 'password'}
      name="password" // Add 'name' attribute
      value={formData.password} // Bind to formData state
      onChange={handleChange} // Update state on change
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
            Sign Up
          </button>
        </form>

        {/* Toggle Forms */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onNavigate} // Trigger navigation to Sign In
              className="text-blue-500 font-semibold hover:underline flex justify-center items-center gap-1"
            >
              Log In
              <ArrowRight size={18} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
