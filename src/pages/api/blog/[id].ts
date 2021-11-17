import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../data/sample-data";

const handler = ({ query: { id } }, res: NextApiResponse) => {
  if (!Array.isArray(sampleUserData)) {
    throw new Error("Cannot find user data");
  }
  const data = sampleUserData.find((data) => data.id == id);
  if (data) {
    res.status(200).json(data);
  } else {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    res.status(404).json({ message: `${id} is not found` });
  }
};

export default handler;
