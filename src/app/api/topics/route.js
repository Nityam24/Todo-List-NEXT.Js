import connectMonogoDB from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMonogoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMonogoDB();
  const topics = await topic.find();
  return NextResponse.json({ topics });
}
