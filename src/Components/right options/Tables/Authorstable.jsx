import React from "react";
import { Edit2 } from "lucide-react";

const authors = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager",
    department: "Organization",
    status: "ONLINE",
    employed: "23/04/18",
    avatar: "https://via.placeholder.com/50",
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "OFFLINE",
    employed: "11/01/19",
    avatar: "https://via.placeholder.com/50",
  },
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: "Executive",
    department: "Projects",
    status: "ONLINE",
    employed: "19/09/17",
    avatar: "https://via.placeholder.com/50",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "ONLINE",
    employed: "24/12/08",
    avatar: "https://via.placeholder.com/50",
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: "Manager",
    department: "Executive",
    status: "OFFLINE",
    employed: "04/10/21",
    avatar: "https://via.placeholder.com/50",
  },
  {
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "OFFLINE",
    employed: "14/09/20",
    avatar: "https://via.placeholder.com/50",
  },
];

const Authorstable = () => {
  return (
    <div className="bg-white m-5 shadow-lg rounded-xl overflow-hidden">
      {/* Table Header */}
      <div className="bg-pink-500 text-white text-lg font-bold px-8 py-4 rounded-t-lg">
        Authors Table
      </div>
      
      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="text-gray-600 text-left uppercase text-sm bg-gray-100">
            <th className="px-8 py-4">Author</th>
            <th className="px-8 py-4">Function</th>
            <th className="px-8 py-4">Status</th>
            <th className="px-8 py-4">Employed</th>
            <th className="px-8 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 border-t transition duration-300"
            >
              {/* Author Info */}
              <td className="px-8 py-4 flex items-center gap-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {author.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{author.email}</p>
                </div>
              </td>

              {/* Function */}
              <td className="px-8 py-4">
                <span className="text-gray-800 font-medium">
                  {author.function}
                </span>
                <p className="text-gray-500 text-sm">{author.department}</p>
              </td>

              {/* Status */}
              <td className="px-8 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    author.status === "ONLINE" ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  {author.status}
                </span>
              </td>

              {/* Employed */}
              <td className="px-8 py-4 text-gray-600">{author.employed}</td>

              {/* Actions */}
              <td className="px-8 py-4 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <Edit2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authorstable;