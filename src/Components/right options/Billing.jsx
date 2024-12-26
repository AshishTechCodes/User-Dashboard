import React from "react";
import { PiggyBank, Wallet, Edit3, Trash2, Calendar } from "lucide-react";

export default function Billing() {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Credit Card */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white h-5/6 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">4562 1122 4594 7852</div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              className="h-10"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <div>
              <div className="text-sm font-medium">Card Holder</div>
              <div className="font-bold">Jack Peterson</div>
            </div>
            <div>
              <div className="text-sm font-medium">Expires</div>
              <div className="font-bold">11/22</div>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-2 gap-4 h-5/6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center h-5/6 flex flex-col justify-center align-middle">
            <PiggyBank className="h-12 w-12 text-pink-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-500">Salary</div>
            <div className="text-xl font-bold text-gray-800">+$2000</div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center h-5/6 flex flex-col justify-center align-middle">
            <Wallet className="h-12 w-12 text-blue-500 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-500">PayPal</div>
            <div className="text-xl font-bold text-gray-800">$455.00</div>
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Invoices</h2>
            <button className="text-pink-500 text-sm font-medium">VIEW ALL</button>
          </div>
          <div className="mt-4 space-y-4">
            {["March, 01 2020", "February, 10 2021", "April, 05 2020"].map((date, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-3 text-sm text-gray-600"
              >
                <div>
                  <div>{date}</div>
                  <div>#MS-415646</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$180</div>
                  <button className="text-blue-500 text-xs">PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-5">
        <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["7852", "5248"].map((number, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="MasterCard"
                  className="h-8"
                />
                <div className="ml-4">
                  <div className="text-sm text-gray-500">**** **** **** {number}</div>
                </div>
              </div>
              <button>
                <Edit3 className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing Information & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Billing Information */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Billing Information</h2>
          {["Oliver Liam", "Lucas Harper", "Ethan James"].map((name, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center mb-4"
            >
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm text-gray-500">Viking Burrito</div>
                <div className="text-sm text-gray-500">oliver@burrito.com</div>
                <div className="text-sm text-gray-500">VAT: FRB1235476</div>
              </div>
              <div className="flex space-x-4">
                <button className="text-red-500">
                  <Trash2 className="h-5 w-5" />
                </button>
                <button className="text-gray-500">
                  <Edit3 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Your Transactions</h2>
            <button className="flex items-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2" />
              23 - 30 March 2020
            </button>
          </div>
          {["Netflix", "Apple", "Stripe"].map((name, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center mb-4"
            >
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm text-gray-500">27 March 2020</div>
              </div>
              <div
                className={`font-bold ${i % 2 === 0 ? "text-red-500" : "text-green-500"}`}
              >
                {i % 2 === 0 ? "-$2,500" : "+$2,000"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}