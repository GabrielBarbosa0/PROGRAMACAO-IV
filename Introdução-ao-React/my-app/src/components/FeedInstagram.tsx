'use client'

import PostItem from './PostItem'

const posts = [
  {
    username: 'GabrielBarbosa0',
    avatarUrl: '/default-user.png',
    imageUrl: '/harley-davidson-v-rod-1250-muscle-vrscf.png',
    numberOfLikes: 73,
    likedBy: 'LeozinDelas',
    description: 'Harley Davidson V-Rod 1250 Muscle VRSCF',
    timeAgo: '5 horas atrás',
  },
  {
    username: 'GabrielBarbosa0',
    avatarUrl: '/default-user.png',
    imageUrl: '/kawasaki-h2r.png',
    numberOfLikes: 169,
    likedBy: 'André Leguminoso',
    description: 'Kawasaki H2R',
    timeAgo: '8 horas atrás',
  },
]

export default function FeedInstagram() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <section className="max-w-[935px] w-full mx-auto p-2 flex">
        <div className="w-full max-w-[614px] mx-auto flex flex-col gap-6">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
