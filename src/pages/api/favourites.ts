import ServerAuth from "@/libs/ServerAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const currentUser = await ServerAuth(req, res);
    const favouriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favouriteIds,
        },
      },
    });
    return res.json(favouriteMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
