import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function ServerAuth(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    throw new Error("user not logged in");
  }

  const loggedInUser = await prismadb.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (!loggedInUser) {
    throw new Error("user not logged in");
  }

  return loggedInUser;
}
