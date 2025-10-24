"use client";

import { motion } from "framer-motion";
import { MapPin, BarChart3, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-50 to-green-50 text-gray-900">
      {/* Navbar */}
      <nav className="w-full flex justify-center items-center px-4 py-4 bg-white shadow-sm fixed top-0 left-0 z-10 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl font-bold text-orange-600">NREGA Track</h1>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center px-4 w-full max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 leading-snug"
        >
          See How Your District is Doing in MGNREGA
        </motion.h2>
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Quick updates on jobs, wages, and employment in your area. Simple and easy to understand.
        </p>

        {/* District Search / Dropdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-md rounded-xl p-3 flex flex-col sm:flex-row items-center gap-2 border border-gray-200"
        >
          <div className="flex items-center gap-2 w-full">
            <MapPin className="w-6 h-6 text-green-600" />
            <input
              type="text"
              placeholder="Type your district"
              className="flex-1 outline-none text-gray-700 text-base sm:text-lg px-2 py-2 rounded border border-gray-200"
            />
          </div>
          <select
            className="w-full sm:w-32 text-gray-700 text-base sm:text-lg border border-gray-200 rounded px-2 py-2"
          >
            <option>Select</option>
            <option>Nagpur</option>
            <option>Pune</option>
            <option>Solapur</option>
          </select>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mt-12 px-4 w-full max-w-md grid grid-cols-1 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-xl shadow text-center"
        >
          <MapPin className="w-8 h-8 mx-auto text-orange-600 mb-2" />
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Local Performance</h3>
          <p className="text-gray-600 text-sm">
            See jobs, wages, and total workers in your district at a glance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-xl shadow text-center"
        >
          <BarChart3 className="w-8 h-8 mx-auto text-green-600 mb-2" />
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Compare Progress</h3>
          <p className="text-gray-600 text-sm">
            Check how your district is doing compared to others.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-xl shadow text-center"
        >
          <Users className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
          <h3 className="font-semibold text-lg text-gray-800 mb-1">For Everyone</h3>
          <p className="text-gray-600 text-sm">
            Large text, clear visuals, and easy to read for all users.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
