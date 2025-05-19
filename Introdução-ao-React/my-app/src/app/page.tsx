import PostItem from "@/components/PostItem";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </main>
  );
}
