import connectMonogoDB from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const { id } = params;
  const { newtitle: title, newDescription: description } = await request.json();
  await connectMonogoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMonogoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ Topic }, { status: 200 });
}
