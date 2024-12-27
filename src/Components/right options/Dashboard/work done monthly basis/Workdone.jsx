import React from "react";
import {
  Bell,
  ShoppingCart,
  CreditCard,
  Server,
  Unlock,
  Package,
  Figma,
  BarChart,
  Slack,
  Smartphone,
  DollarSign,
  ShoppingBag,
  User,
} from "lucide-react";

const Workdone = () => {
  const projects = [
    {
      name: "Material XD Version",
      budget: "$14,000",
      progress: 60,
      icon: Figma,
      color: "bg-pink-500",
      members: 3,
    },
    {
      name: "Add Progress Track",
      budget: "$3,000",
      progress: 10,
      icon: BarChart,
      color: "bg-blue-500",
      members: 1,
    },
    {
      name: "Fix Platform Errors",
      budget: "Not set",
      progress: 100,
      icon: Slack,
      color: "bg-orange-500",
      members: 2,
    },
    {
      name: "Launch our Mobile App",
      budget: "$20,500",
      progress: 100,
      icon: Smartphone,
      color: "bg-green-500",
      members: 3,
    },
    {
      name: "Add the New Pricing Page",
      budget: "$500",
      progress: 25,
      icon: DollarSign,
      color: "bg-blue-500",
      members: 2,
    },
    {
      name: "Redesign New Online Shop",
      budget: "$2,000",
      progress: 40,
      icon: ShoppingBag,
      color: "bg-pink-500",
      members: 1,
    },
  ];

  const orders = [
    {
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      icon: Bell,
      color: "bg-green-500",
    },
    {
      title: "New order #1832412",
      date: "21 DEC 11 PM",
      icon: ShoppingCart,
      color: "bg-red-500",
    },
    {
      title: "Server payments for April",
      date: "21 DEC 9:34 PM",
      icon: Server,
      color: "bg-blue-500",
    },
    {
      title: "New card added for order #4395133",
      date: "20 DEC 2:20 AM",
      icon: CreditCard,
      color: "bg-orange-500",
    },
    {
      title: "Unlock packages for development",
      date: "18 DEC 4:54 AM",
      icon: Unlock,
      color: "bg-pink-500",
    },
    {
      title: "New order #9583120",
      date: "17 DEC",
      icon: Package,
      color: "bg-gray-500",
    },
  ];

  return (
    <div className="flex justify-center h-fit px-5 w-screen">
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Projects Section */}
        <div className="col-span-2 h-fit bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <p className="text-sm text-gray-500 mb-4">
            <span className="text-green-500 font-semibold">30 done</span> this month
          </p>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center justify-between">
                {/* Left: Icon & Project Details */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${project.color}`}
                  >
                    <project.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.budget}</p>
                  </div>
                </div>

                {/* Right: Progress & Members */}
                <div className="flex items-center gap-3">
                  {/* Members */}
                  <div className="flex -space-x-2">
                    {Array.from({ length: project.members }).map((_, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center border border-white"
                      >
                        <User size={16} className="text-gray-600" />
                      </div>
                    ))}
                  </div>
                  {/* Progress */}
                  <div className="w-36">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${project.progress === 100 ? "bg-green-500" : "bg-blue-500"}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {project.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Overview */}
        <div className="bg-white h-full p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Orders overview</h2>
          <p className="text-sm text-gray-500 mb-4">
            <span className="text-green-500 font-semibold">24%</span> this month
          </p>
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${order.color}`}
                >
                  <order.icon size={20} />
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium">{order.title}</h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workdone;