'use client'

type Post = {
  username: string
  avatarUrl: string
  imageUrl: string
  numberOfLikes: number
  likedBy: string
  description: string
  timeAgo: string
}

type Props = {
  post: Post
}

export default function PostItem({ post }: Props) {
  return (
    <article className="border border-gray-300 rounded-md overflow-hidden">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={post.avatarUrl} alt="User" />
          </div>
          <span className="text-sm font-medium text-gray-900 lowercase">
            {post.username}
          </span>
        </div>
        <button>
          <span className="text-xl">•••</span>
        </button>
      </div>

      {/* Imagem do post */}
      <div>
        <img src={post.imageUrl} alt="Post" className="w-full object-cover" />
      </div>

      {/* Rodapé */}
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          ❤️ 💬 📤 <span className="ml-auto">🔖</span>
        </div>
        <div className="text-sm text-gray-800 mb-1">
          Curtido por <strong>{post.likedBy}</strong> e{' '}
          <strong>outros {post.numberOfLikes} meliantes</strong>
        </div>
        <p className="text-sm">{post.description}</p>
        <span className="text-xs text-gray-500 uppercase">{post.timeAgo}</span>
      </div>
    </article>
  )
}
