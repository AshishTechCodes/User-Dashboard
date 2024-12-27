import React from "react";
import {
  BellRing,
  BookUser,
  ClipboardSignatureIcon,
  FileInput,
  FileScanIcon,
  LayoutDashboard,
  LogIn,
  LogOut,
  Monitor,
  ReceiptText,
  Table2,
  User,
} from "lucide-react";

const Options = ({ onOptionSelect, isAuthenticated }) => {
  return (
    <div className="w-1/6 h-[95%] bg-red-500 rounded-md">
      <span className="flex items-center justify-center gap-x-2 font-bold text-white border-b-4 py-5">
        <Monitor size={25} color="white" />
        <span className="text-xl">Material Dashboard</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("Dashboard")}
      >
        <LayoutDashboard size={25} className="hover:stroke-red-500" />
        <span className="text-xl">Dashboard</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("Table")}
      >
        <Table2 size={25} className="hover:stroke-red-500" />
        <span className="text-xl">Tables</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("Billing")}
      >
        <ReceiptText size={25} className="hover:stroke-red-500" />
        <span className="text-xl">Billing</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("Virtual Reality")}
      >
        <FileScanIcon size={25} className="hover:stroke-red-500" />
        <span className="text-xl">Virtual Reality</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("RTL")}
      >
        <FileInput size={25} className="hover:stroke-red-500" />
        <span className="text-xl">RTL</span>
      </span>
      <span
        className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
        onClick={() => onOptionSelect("Notification")}
      >
        <BellRing size={25} className="hover:stroke-red-500" />
        <span className="text-xl">Notification</span>
      </span>
      <div className="flex flex-col mt-5">
        <span className="flex items-center justify-center gap-x-2 py-2 text-center text-white text-xl font-bold border-t-4 border-b-4 p-1">
          <BookUser size={25} /> Account Pages
        </span>
        {/* Hide Sign In and Sign Up if authenticated */}
        {!isAuthenticated && (
          <>
            <span
              className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
              onClick={() => onOptionSelect("Sign In")}
            >
              <LogIn size={25} className="hover:stroke-red-500" />
              <span className="text-xl">Sign In</span>
            </span>
            <span
              className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
              onClick={() => onOptionSelect("Sign Up")}
            >
              <ClipboardSignatureIcon
                size={25}
                className="hover:stroke-red-500"
              />
              <span className="text-xl">Sign Up</span>
            </span>
          </>
        )}
        {isAuthenticated && (
          <>
            <span
              className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500"
              onClick={() => onOptionSelect("Profile")}
            >
              <User size={25} className="hover:stroke-red-500" />
              <span className="text-xl">Profile</span>
            </span>
            <span
              className="flex items-center gap-x-2 p-3 text-white hover:bg-white hover:text-red-500 menu-item"
              onClick={() => onOptionSelect("Logout")}
            >
              <LogOut size={25} className="hover:stroke-red-500" />
              <span className="text-xl">Logout</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Options;