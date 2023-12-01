import { NextApiRequest, NextApiResponse } from "next";
import ServerAuth from "@/libs/ServerAuth";
import prismadb from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await ServerAuth(req, res);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const movie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    return res.status(200).json(movie[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
}
