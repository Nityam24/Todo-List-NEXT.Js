import connectMonogoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const { id } = params;
  const { newtitle: title, newDescription: description } = request.json();
  await connectMonogoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}
