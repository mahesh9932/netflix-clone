import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import { IncomingMessage } from "http";

interface CustomIncomingMessage extends IncomingMessage {
  cookies: Partial<{ [key: string]: string }>;
}

export async function getServerSideProps(context: NextPageContext) {
  if (context.req && context.res) {
    const session = await getServerSession(
      context.req as CustomIncomingMessage,
      context.res,
      authOptions
    );
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();
  console.log("data", user);
  return (
    <div className="h-full flex items-center justify-center">
      <div className="">
        <h3 className="text-3xl md:text-6xl text-white">Who is Watching?</h3>
        <div className="flex gap-2 justify-center align-center mt-8">
          <div className="text-center group" onClick={() => router.push("/")}>
            <div className="group w-32 h-32 rounded-md overflow-hidden group-hover:border-white border-2 border-transparent ">
              <img src="/images/default-blue.png" alt="profile-icon" />
            </div>
            <p className="text-gray-400 group-hover:text-white mt-4">
              {user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profiles;
