import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className=" text-green-500 font-medium">Hello NextJs</h1>
      <p className="text-white">logged in with {user?.email}</p>
      <button
        className="bg-white w-full p-2 text-center rounded-md mt-10"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
}
