import React, { useState } from "react";
import { CheckCircle, Bell, AlertTriangle, XCircle,X } from "lucide-react"; // Icons for notifications

const Notifications = () => {
  const initialAlerts = [
    { id: 1, color: "bg-pink-500", label: "primary" },
    { id: 2, color: "bg-gray-700", label: "secondary" },
    { id: 3, color: "bg-green-500", label: "success" },
    { id: 4, color: "bg-red-500", label: "danger" },
    { id: 5, color: "bg-yellow-500", label: "warning" },
    { id: 6, color: "bg-blue-500", label: "info" },
    { id: 7, color: "bg-gray-300 text-gray-700", label: "light" },
    { id: 8, color: "bg-black text-white", label: "dark" },
  ];

  const [alerts, setAlerts] = useState(initialAlerts);
  const [notifications, setNotifications] = useState([]);

  const handleCloseAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const handleShowNotification = (type) => {
    const newNotification = {
      id: Date.now(),
      type,
      message: `Hello, world! This is a ${type.label.toLowerCase()} notification message.`,
    };
    setNotifications((prev) => [...prev, newNotification]);

    // Auto-dismiss notification after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== newNotification.id)
      );
    }, 5000);
  };

  const buttonStyles = [
    { color: "bg-green-500", label: "SUCCESS", icon: <CheckCircle /> },
    { color: "bg-blue-500", label: "INFO", icon: <Bell /> },
    { color: "bg-yellow-500", label: "WARNING", icon: <AlertTriangle /> },
    { color: "bg-red-500", label: "DANGER", icon: <XCircle /> },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Alerts Section */}
      <div className="space-y-4 bg-white p-5 rounded-lg">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center justify-between p-4 rounded-md ${alert.color}`}
          >
            <p>
              A simple <span className="font-bold">{alert.label}</span> alert
              with <a href="https://getbootstrap.com/docs/5.1/components/toasts/" className="underline">an example link</a>. Give
              it a click if you like.
            </p>
            <button onClick={() => handleCloseAlert(alert.id)}>
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Notifications Section */}
      <div className="space-y-4 bg-white p-5 rounded-lg">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <p>
          Notifications on this page use Toasts from Bootstrap. Read more details{" "}
          <button
      onClick={() => alert("Read more about Toasts")}
      className="underline text-blue-500"
    >
      here
    </button>
    .
        </p>
        <div className="flex space-x-4">
          {buttonStyles.map((button, index) => (
            <button
              key={index}
              onClick={() => handleShowNotification(button)}
              className={`px-6 py-2 rounded-md text-white ${button.color} hover:opacity-90 flex items-center space-x-2`}
            >
              {button.icon}
              <span>{button.label}</span>
            </button>
          ))}
        </div>

        {/* Notifications Display */}
        <div className="fixed bottom-4 right-4 space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start p-4 space-x-4 rounded-md shadow-lg text-white ${notification.type.color}`}
            >
              {notification.type.icon}
              <div>
                <h4 className="font-bold">{notification.type.label}</h4>
                <p>{notification.message}</p>
              </div>
              <button
                onClick={() =>
                  setNotifications((prev) =>
                    prev.filter((n) => n.id !== notification.id)
                  )
                }
              >
                <XCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;