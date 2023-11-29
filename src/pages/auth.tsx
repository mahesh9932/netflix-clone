import Input from "@/components/Input";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { signIn } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState("login");

  const changeStatus = () => {
    setStatus((prevVal) => (prevVal == "login" ? "register" : "login"));
  };

  const login = async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("response", res);
      Router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async () => {
    try {
      await axios.post("/api/register", {
        name: username,
        email,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[url('/images/hero.jpg')] w-full h-full bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        <div className="p-4">
          <img
            src="/images/logo.png"
            className="h-10 max-sm:h-6"
            alt="logo image"
          />
        </div>
        <div className="flex justify-center">
          <div className="bg-black my-8 px-8 py-8 max-md:px-0 max-md:py-0 w-2/3 max-w-md rounded-md">
            <h4 className=" font-medium text-4xl mb-8 text-white">
              {status == "login" ? "Sign In" : "Register"}
            </h4>
            <div className="flex flex-col w-full gap-4">
              {status == "register" && (
                <Input
                  id="username"
                  label="Username"
                  onChange={(event: any) => setUsername(event.target.value)}
                  value={username}
                />
              )}

              <Input
                id="email"
                label="Email"
                onChange={(event: any) => setEmail(event.target.value)}
                value={email}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                onChange={(event: any) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div>
              <button
                onClick={status == "login" ? login : register}
                className="text-white
             py-2 px-10 bg-red-600 hover:bg-red-500
             rounded-md mt-8 w-full"
              >
                {status == "login" ? "Login" : "Register"}
              </button>
            </div>

            <div className="flex justify-center items-center gap-6 mt-10 ">
              <div
                onClick={async () => {
                  const res = await signIn("google", {
                    callbackUrl: "/profiles",
                    redirect: false,
                  });
                  console.log("res", res);
                }}
                className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:bg-opacity-80 transition hover:cursor-pointer"
              >
                <FaGoogle size={30} />
              </div>

              <div
                onClick={async () => {
                  await signIn("github", {
                    callbackUrl: "/profiles",
                  });
                }}
                className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:bg-opacity-80 transition hover:cursor-pointer"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-zinc-500 mt-6">
              {status == "login"
                ? "Are you a new user?"
                : "Already have an account?"}
              <span
                className="text-white text-md hover:underline hover:cursor-pointer ml-2"
                onClick={changeStatus}
              >
                {status == "login" ? "Create Account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
