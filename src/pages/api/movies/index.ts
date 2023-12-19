import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prisma";
import ServerAuth from "@/libs/ServerAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    // checking the user status
    await ServerAuth(req, res);
    const movies = await prismadb.movie.findMany();
    return res.json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
