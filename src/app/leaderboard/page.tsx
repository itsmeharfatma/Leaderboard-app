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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Min attempts"
          value={minAttempts}
          onChange={(e) => setMinAttempts(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <input
          type="number"
          placeholder="Max attempts"
          value={maxAttempts}
          onChange={(e) => setMaxAttempts(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <button
        onClick={fetchData}
        className="p-2 bg-blue-500 text-white rounded mb-4 cursor-pointer"
      >
        Refresh
      </button>
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
