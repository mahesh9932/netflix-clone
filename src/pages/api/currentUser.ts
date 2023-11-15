import { NextApiResponse, NextApiRequest } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ServerAuth from "@/libs/ServerAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const user = await ServerAuth(req, res);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({
      error: JSON.stringify(e),
    });
  }
}
