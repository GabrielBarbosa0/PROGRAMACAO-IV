import Image from "next/image";

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
  timestamp?: string;
}

export default function PostItem({ post }: { post: Post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md mb-6 max-w-xl w-full mx-auto">
      {/* Header */}
      <div className="flex items-center p-4">
        <Image src={post.avatarUrl} alt={post.username} width={40} height={40} className="rounded-full" />
        <div className="ml-3 font-semibold">{post.username}</div>
      </div>

      {/* Post Image */}
      <div className="relative w-full h-[400px]">
        <Image src={post.imageUrl} alt="Post image" layout="fill" objectFit="cover" />
      </div>

      {/* Footer */}
      <div className="p-4">
        <div className="font-bold">{post.numberOfLikes} likes</div>
        <div><span className="font-semibold">{post.username}</span> {post.description}</div>
        {post.timestamp && <div className="text-gray-400 text-sm mt-1">{post.timestamp}</div>}
      </div>
    </div>
  );
}
