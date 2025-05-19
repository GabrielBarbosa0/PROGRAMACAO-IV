export interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
}

export const posts: Post[] = Array.from({ length: 20 }, (_, i) => ({
  username: `usuario${i + 1}`,
  avatarUrl: `/assets/image/default-user.png`,
  imageUrl: i % 2 === 0
    ? `/assets/image/kawasaki-h2r.png`
    : `/assets/image/harley-davidson-v-rod-1250-muscle-vrscf.png`,
  numberOfLikes: Math.floor(Math.random() * 1000),
  description: `Descrição do post número ${i + 1}.`,
}));
