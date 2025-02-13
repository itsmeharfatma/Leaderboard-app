import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-8 px-10">
      <div className="flex items-center space-x-2.5 mb-6">
        <i className="fa-solid fa-book-open-reader fa-2xl text-gray-900"></i>
        <h1 className="text-4xl font-bold text-gray-900">Leaderboard</h1>
      </div>
      <Link href="/leaderboard" className="text-blue-500 underline">
        Go to Leaderboard Page
      </Link>
    </div>
  );
}
