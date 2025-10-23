import React from "react";

export default function Error500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center p-4">
      <img src="/logo.png" alt="Skills Favour Logo" className="w-32 mb-6" />
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-4">
        We’re currently fixing some technical issues. Please check back soon.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
