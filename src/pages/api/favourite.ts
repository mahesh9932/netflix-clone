import ServerAuth from "@/libs/ServerAuth";
import { without } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const movieId = req.body.movieId;
      const currentUser = await ServerAuth(req, res);
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favouriteIds: {
            push: movieId,
          },
        },
      });
      return res.json(updatedUser);
    }
    if (req.method === "DELETE") {
      const movieId = req.body.movieId;
      const currentUser = await ServerAuth(req, res);
      const updatedFavourites = without(currentUser.favouriteIds, movieId);
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favouriteIds: updatedFavourites,
        },
      });
      return res.json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
