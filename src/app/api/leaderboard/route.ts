import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const minAttempts = searchParams.get("minAttempts");
  const maxAttempts = searchParams.get("maxAttempts");

  console.log("API Request:", { search, minAttempts, maxAttempts });

  try {
    let query = supabase
      .from("Attempts")
      .select("*, User!inner(*)") // Join with User table
      .order("score", { ascending: false });

    if (search) {
      query = query.ilike("User.name", `%${search}%`);
    }

    if (minAttempts) {
      query = query.gte("score", minAttempts);
    }

    if (maxAttempts) {
      query = query.lte("score", maxAttempts);
    }

    const { data, error } = await query;

    console.log("Supabase Response:", { data, error });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
