"use client";

import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const [minAttempts, setMinAttempts] = useState("");
  const [maxAttempts, setMaxAttempts] = useState("");
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const queryParams = new URLSearchParams({
      search,
      minAttempts,
      maxAttempts,
    }).toString();

    const response = await fetch(`/api/leaderboard?${queryParams}`);
    const result = await response.json();
    console.log("API Response:", result); // Log the response
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [search, minAttempts, maxAttempts]);

  return (
    <div className="pt-8 px-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2.5">
          <i className="fa-solid fa-book-open-reader fa-2xl text-gray-900"></i>
          <h1 className="text-4xl font-bold text-gray-900">Leaderboard</h1>
        </div>
        <button
          onClick={fetchData}
          className="py-2 px-3 bg-gray-100 text-gray-900 border rounded-md border-gray-500 cursor-pointer hover:bg-gray-200"
          title="Refresh"
        >
          <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
      </div>
      <div className="flex flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1.5 border rounded-md border-gray-600"
        />
        <input
          type="number"
          placeholder="Min attempts"
          value={minAttempts}
          onChange={(e) => setMinAttempts(e.target.value)}
          className="px-2 py-1.5 border rounded-md border-gray-600"
        />
        <input
          type="number"
          placeholder="Max attempts"
          value={maxAttempts}
          onChange={(e) => setMaxAttempts(e.target.value)}
          className="px-2 py-1.5 border rounded-md border-gray-600"
        />
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Attempts</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border">
                <td className="p-2 border">{item.User?.name}</td>
                <td className="p-2 border">{item.User?.email}</td>
                <td className="p-2 border">{item.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-2 border text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
