import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/libs/prisma";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentails, req) {
        // need to check whether given email and password checks out
        try {
          if (!credentails?.email || !credentails?.password) {
            throw new Error("please give email and password");
          }

          const user = await prismadb.user.findUnique({
            where: {
              email: credentails?.email,
            },
          });

          if (!user || !user.hashedPassword) {
            throw new Error("Email is invalid");
          }
          const isCorrectPassword = await bcrypt.compare(
            credentails.password,
            user.hashedPassword
          );
          if (!isCorrectPassword) {
            throw new Error("Password is Incorrect");
          }
          return user;
        } catch (e) {
          throw new Error(JSON.stringify(e));
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
