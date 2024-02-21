import { connectDB } from "@/lib/connectDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";
export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Post");
  }
};
