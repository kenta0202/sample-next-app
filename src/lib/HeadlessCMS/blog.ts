import { createClient } from "microcms-js-sdk";

export const blog = createClient({
  serviceDomain: "blog-app",
  apiKey: process.env.BLOGAPP_KEY,
});
