'use client';
import React from 'react';

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
}

export default function PostItem({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md my-6 max-w-xl w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src={post.avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <img src="/assets/icons/more.svg" className="w-4 h-4 cursor-pointer" alt="Options" />
      </div>

      {/* Post Image */}
      <img src={post.imageUrl} alt="Post" className="w-full object-cover max-h-[500px]" />

      {/* Actions */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/assets/icons/heart.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
          <img src="/assets/icons/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
          <img src="/assets/icons/share.svg" alt="Share" className="w-6 h-6 cursor-pointer" />
        </div>
        <img src="/assets/icons/bookmark.svg" alt="Bookmark" className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Likes */}
      <div className="px-4 text-sm font-semibold">{post.numberOfLikes} curtidas</div>

      {/* Description */}
      <div className="px-4 py-2 text-sm">
        <span className="font-semibold mr-1">{post.username}</span>
        <span>{post.description}</span>
      </div>
    </div>
  );
}
