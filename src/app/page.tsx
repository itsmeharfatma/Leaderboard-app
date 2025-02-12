import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Leaderboard App
      </h1>
      <Link href="/leaderboard" className="text-blue-500 underline">
        Go to Leaderboard
      </Link>
    </div>
  );
}
