"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, BarChart3, Users } from "lucide-react";

interface DistrictRecord {
  fin_year: string;
  month: string;
  state_name: string;
  district_name: string;
  Approved_Labour_Budget: string;
  Average_Wage_rate_per_day_per_person: string;
  Average_days_of_employment_provided_per_Household: string;
  Differently_abled_persons_worked: string;
  Material_and_skilled_Wages: string;
  Number_of_Completed_Works: string;
  Number_of_GPs_with_NIL_exp: string;
  Number_of_Ongoing_Works: string;
  Persondays_of_Central_Liability_so_far: string;
  SC_persondays: string;
  SC_workers_against_active_workers: string;
  ST_persondays: string;
  ST_workers_against_active_workers: string;
  Total_Adm_Expenditure: string;
  Total_Exp: string;
  Total_Households_Worked: string;
  Total_Individuals_Worked: string;
  Total_No_of_Active_Job_Cards: string;
  Total_No_of_Active_Workers: string;
  Total_No_of_HHs_completed_100_Days_of_Wage_Employment: string;
  Total_No_of_JobCards_issued: string;
  Total_No_of_Workers: string;
  Total_No_of_Works_Takenup: string;
  Wages: string;
  Women_Persondays: string;
  percent_of_Category_B_Works: string;
  percent_of_Expenditure_on_Agriculture_Allied_Works: string;
  percent_of_NRM_Expenditure: string;
  percentage_payments_gererated_within_15_days: string;
  Remarks: string;
}

export default function DistrictPage() {
  const router = useRouter();
  const { district } = useParams();

  const [data, setData] = useState<DistrictRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!district) return;

    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters[state_name]=TELANGANA`
      );
      const json = await res.json();
      const districtData = json.records.filter(
        (record: DistrictRecord) =>
          record.district_name.toLowerCase() === (district as string).toLowerCase()
      );
      setData(districtData);
      setLoading(false);
    }

    fetchData();
  }, [district]);

  if (loading)
    return (
      <p className="p-4 text-center text-gray-600">Loading district stats...</p>
    );
  if (data.length === 0)
    return (
      <p className="p-4 text-center text-gray-600">No data found for {district}</p>
    );

  const record = data[0];

  const stats = [
    { label: "Approved Labour Budget", value: record.Approved_Labour_Budget, icon: MapPin, color: "text-orange-500" },
    { label: "Average Wage Rate", value: record.Average_Wage_rate_per_day_per_person, icon: BarChart3, color: "text-green-500" },
    { label: "Total Households Worked", value: record.Total_Households_Worked, icon: Users, color: "text-yellow-500" },
    { label: "Total Individuals Worked", value: record.Total_Individuals_Worked, icon: Users, color: "text-blue-500" },
    { label: "Total Active Workers", value: record.Total_No_of_Active_Workers, icon: Users, color: "text-purple-500" },
    { label: "Wages", value: record.Wages, icon: BarChart3, color: "text-green-600" },
    { label: "Women Persondays", value: record.Women_Persondays, icon: Users, color: "text-pink-500" },
    { label: "SC Persondays", value: record.SC_persondays, icon: Users, color: "text-indigo-500" },
    { label: "ST Persondays", value: record.ST_persondays, icon: Users, color: "text-teal-500" },
    { label: "Remarks", value: record.Remarks, icon: MapPin, color: "text-gray-700" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 p-4">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-8"
      >
        {record.district_name} - {record.fin_year}
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center"
            >
              <Icon className={`w-8 h-8 mb-2 ${stat.color}`} />
              <h3 className="font-semibold text-gray-800 mb-1">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.value || "-"}</p>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
