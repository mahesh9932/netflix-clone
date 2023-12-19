import ServerAuth from "@/libs/ServerAuth";
import { NextApiRequest, NextApiResponse } from "next";
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
    const { id } = req.query;
    if (!id) {
      throw new Error("Invalid Id");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!movie) {
      throw new Error("Invalid Id");
    }

    return res.json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
