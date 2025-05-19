"use client";
import PostItem from "@/components/PostItem";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Instagram Clone</h1>
      <div className="flex flex-col items-center">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
