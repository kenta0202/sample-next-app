const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "sample-next-app-38ame0dhc-kenta0202.vercel.app";
