export const posts = Array.from({ length: 20 }, (_, i) => ({
  username: `user${i + 1}`,
  avatarUrl: `https://i.pravatar.cc/150?img=${i + 1}`,
  imageUrl: `https://source.unsplash.com/random/600x600?sig=${i}`,
  numberOfLikes: Math.floor(Math.random() * 1000),
  description: `Essa é a descrição da postagem número ${i + 1}.`,
  timestamp: `${Math.floor(Math.random() * 10) + 1} horas atrás`,
}));
