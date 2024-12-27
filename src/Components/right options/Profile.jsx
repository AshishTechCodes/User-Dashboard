import React, { useState } from 'react';
import { User, MailIcon, Lock, Edit, Eye, EyeOff,Pen } from 'lucide-react';
import axios from 'axios';

const Profile = ({ userData = {}, onEdit }) => {
  const { username = "N/A", email = "N/A", profileImage = null, password = "********" } = userData;
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ username, password, image: profileImage,newemail: email, });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/update-profile', {
        email, // Email stays constant as the identifier
        ...formData,
      });
      alert(response.data.message);
      toggleEditMode(); // Exit edit mode
      onEdit(response.data.user); // Trigger a refresh in parent component if needed
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update profile. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="h-fit flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isEditing ? 'Edit Profile' : 'User Profile'}
        </h2>

        <div className="relative flex items-center justify-center mb-6">
  {isEditing ? (
    <label className="relative flex flex-col items-center justify-center w-32 h-32 border border-dashed rounded-full cursor-pointer group">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
      {formData.image ? (
        <img
          src={formData.image}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-full"
        />
      ) : (
        <>
          <User size={30} className="text-gray-500 mb-2" />
          <p className="text-sm text-gray-500">Upload Image</p>
        </>
      )}

      {/* Hover Effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
        <Pen size={25} className="text-white mb-1" />
        <span className="text-white text-sm font-medium">EDIT</span>
      </div>
    </label>
  ) : (
    profileImage ? (
      <img
        src={profileImage}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full"
      />
    ) : (
      <div className="flex flex-col items-center justify-center w-32 h-32 border border-dashed rounded-full border-black">
        <User size={30} className="text-gray-500 mb-2" />
        <p className="text-sm text-gray-500">No Image</p>
      </div>
    )
  )}
</div>



        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User size={20} className="text-gray-500" />
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              />
            ) : (
              <p className="text-lg font-medium text-gray-800">{username}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
  <MailIcon size={20} className="text-gray-500" />
  {isEditing ? (
    <input
      type="email"
      name="newemail"
      value={formData.newemail || email} // Initialize with current email
      onChange={handleChange}
      className="w-full border px-2 py-1 rounded"
    />
  ) : (
    <p className="text-lg font-medium text-gray-800">{email}</p>
  )}
</div>


          <div className="flex items-center gap-3">
            <Lock size={20} className="text-gray-500" />
            {isEditing ? (
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              />
            ) : (
              <p className="text-lg font-medium text-gray-800">
                {showPassword ? password : '********'}
              </p>
            )}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={toggleEditMode}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={toggleEditMode}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
            <span className='flex gap-2 p-2'> <Edit size={22} />Edit Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;