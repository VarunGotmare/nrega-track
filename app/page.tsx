"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // App Router version
import { motion } from "framer-motion";
import { MapPin, BarChart3, Users } from "lucide-react";

interface DistrictRecord {
  district_name: string;
}

export default function Home() {
  const router = useRouter();
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");

  useEffect(() => {
    async function fetchDistricts() {
      const res = await fetch(
        "https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters[state_name]=TELANGANA"
      );
      const json = await res.json();
      const districtNames = json.records.map(
        (record: DistrictRecord) => record.district_name
      );
      setDistricts(Array.from(new Set(districtNames)));
    }
    fetchDistricts();
  }, []);

  const goToDistrict = () => {
    const district = inputDistrict || selectedDistrict;
    if (!district) return;
    router.push(`/${encodeURIComponent(district)}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-50 to-green-50 text-gray-900">
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
              value={inputDistrict}
              onChange={(e) => setInputDistrict(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && goToDistrict()}
            />
          </div>
          <select
            className="w-full sm:w-40 text-gray-700 text-base sm:text-lg border border-gray-200 rounded px-2 py-2"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <button
            onClick={goToDistrict}
            className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Go
          </button>
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
