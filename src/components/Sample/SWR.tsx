/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// Promiseを返す関数

export default function App() {
  const { data, error } = useSWR(
    //   dataには fetcher が resolve した値(通信結果)が返る
    "https://api.github.com/repos/vercel/swr",
    // json型
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
