export type Blog = {
  id: string;
  title: string;
  publishedAt: Date;
  category: string;
  content: string;
  image: { url: string };
};
