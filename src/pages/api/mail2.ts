/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { sampleUserData } from "data/sample-data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  res.status(200).json({ test: "aa" });
};

export default handler;
