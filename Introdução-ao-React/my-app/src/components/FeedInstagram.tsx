'use client'

import PostItem from './PostItem'

const posts = [
  {
    username: 'GabrielBarbosa0',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley-davidson-v-rod-1250-muscle-vrscf.png',
    numberOfLikes: 73,
    likedBy: 'LeozinDelas',
    description: 'Harley Davidson V-Rod 1250 Muscle VRSCF',
    timeAgo: '5 horas atrás',
  },
  {
    username: 'GabrielBarbosa0',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/kawasaki-h2r.png',
    numberOfLikes: 169,
    likedBy: 'André Leguminoso',
    description: 'Kawasaki H2R',
    timeAgo: '8 horas atrás',
  },
  {
    username: 'LenoDoBrega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/dodge-challenger.jpg',
    numberOfLikes: 69,
    likedBy: 'JoãoCavaloDeTroia',
    description: 'Dodge Challenger',
    timeAgo: '2 horas atrás',

  },

  {
    username: 'Pitubu66',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/Ferrari-SF90-XX-Stradale-Super.jpg',
    numberOfLikes: 54,
    likedBy: 'ManéDaVazante',
    description: 'Ferrari SF90 XX Stradale Super',
    timeAgo: '1 horas atrás',

  },

  {
    username: 'TioChico',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/fusca-azul.png',
    numberOfLikes: 54,
    likedBy: 'NildoDoPitu',
    description: 'Fusca Azul.png',
    timeAgo: '1 dia atrás',

  },

  {
    username: 'TitoDoBrega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley-davidson-softail-fat-bob.jpg',
    numberOfLikes: 54,
    likedBy: 'ToimDeMartinha',
    description: 'Harley Davidson Softail Fat Bob',
    timeAgo: '3 dia atrás',

  },

  {
    username: 'BiuDaBudega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/opala-preto.png',
    numberOfLikes: 54,
    likedBy: 'ToimDeMartinha',
    description: 'Opala',
    timeAgo: '7 horas atrás',

  },

  {
    username: 'ZefinhaDaMata',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley.jpeg',
    numberOfLikes: 59,
    likedBy: 'ManéRapadura',
    description: 'Opala',
    timeAgo: '4 horas atrás',

  },

  {
    username: 'JunioDoSarapatel',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/carro-antigo.jpg',
    numberOfLikes: 54,
    likedBy: 'Carlito51',
    description: 'Carro Antigo',
    timeAgo: '13 horas atrás',

  },

  {
    username: 'Chamanograu',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/ferrari.jpg',
    numberOfLikes: 12,
    likedBy: 'Paxola',
    description: 'Ferrari',
    timeAgo: '13 horas atrás',

  },

    {
    username: 'GabrielBarbosa0',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley-davidson-v-rod-1250-muscle-vrscf.png',
    numberOfLikes: 73,
    likedBy: 'LeozinDelas',
    description: 'Harley Davidson V-Rod 1250 Muscle VRSCF',
    timeAgo: '5 horas atrás',
  },
  {
    username: 'GabrielBarbosa0',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/kawasaki-h2r.png',
    numberOfLikes: 169,
    likedBy: 'André Leguminoso',
    description: 'Kawasaki H2R',
    timeAgo: '8 horas atrás',
  },
  {
    username: 'LenoDoBrega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/dodge-challenger.jpg',
    numberOfLikes: 69,
    likedBy: 'JoãoCavaloDeTroia',
    description: 'Dodge Challenger',
    timeAgo: '2 horas atrás',

  },

  {
    username: 'Pitubu66',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/Ferrari-SF90-XX-Stradale-Super.jpg',
    numberOfLikes: 54,
    likedBy: 'ManéDaVazante',
    description: 'Ferrari SF90 XX Stradale Super',
    timeAgo: '1 horas atrás',

  },

  {
    username: 'TioChico',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/fusca-azul.png',
    numberOfLikes: 54,
    likedBy: 'NildoDoPitu',
    description: 'Fusca Azul.png',
    timeAgo: '1 dia atrás',

  },

  {
    username: 'TitoDoBrega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley-davidson-softail-fat-bob.jpg',
    numberOfLikes: 54,
    likedBy: 'ToimDeMartinha',
    description: 'Harley Davidson Softail Fat Bob',
    timeAgo: '3 dia atrás',

  },

  {
    username: 'BiuDaBudega',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/opala-preto.png',
    numberOfLikes: 54,
    likedBy: 'ToimDeMartinha',
    description: 'Opala',
    timeAgo: '7 horas atrás',

  },

  {
    username: 'ZefinhaDaMata',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/harley.jpeg',
    numberOfLikes: 59,
    likedBy: 'ManéRapadura',
    description: 'Opala',
    timeAgo: '4 horas atrás',

  },

  {
    username: 'JunioDoSarapatel',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/carro-antigo.jpg',
    numberOfLikes: 54,
    likedBy: 'Carlito51',
    description: 'Carro Antigo',
    timeAgo: '13 horas atrás',

  },

  {
    username: 'Chamanograu',
    avatarUrl: '/image/default-user.png',
    imageUrl: 'image/ferrari.jpg',
    numberOfLikes: 12,
    likedBy: 'Paxola',
    description: 'Ferrari',
    timeAgo: '13 horas atrás',

  }
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
