import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../data/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (!Array.isArray(sampleUserData)) {
    throw new Error("Cannot find user data");
  }

  res.status(200).json(sampleUserData);
};

export default handler;
