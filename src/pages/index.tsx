import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavBar from "@/components/NavBar";
import BillBoard from "@/components/BillBoard";
import MoviesList from "@/components/MoviesList";

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
      <div className="w-full ">
        <NavBar />
        <BillBoard />
        <MoviesList title="Trending Now" />
      </div>
    </>
  );
}
