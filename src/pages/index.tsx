import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavBar from "@/components/NavBar";
import BillBoard from "@/components/BillBoard";
import MoviesList from "@/components/MoviesList";
import useMoviesList from "@/hooks/useMoviesList";
import useFavourites from "@/hooks/useFavourites";

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
  const { data: movies } = useMoviesList();
  const { data: favourites } = useFavourites();

  console.log("user running again", user);
  console.log("favourites running again...", favourites);

  return (
    <>
      <div className="w-full ">
        <NavBar />
        <BillBoard />
        <MoviesList title="Trending Now" movies={movies} />
        <MoviesList title="My List" movies={favourites} />
      </div>
    </>
  );
}
