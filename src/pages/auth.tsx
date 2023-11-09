import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState("login");

  const changeStatus = () => {
    setStatus((prevVal) => (prevVal == "login" ? "register" : "login"));
  };

  return (
    <div className="bg-[url('/images/hero.jpg')] w-full h-full bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        <div className="p-4">
          <img src="/images/logo.png" className="h-10 max-sm:h-6" />
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
                  value={email}
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
                className="text-white
             py-2 px-10 bg-red-600 hover:bg-red-500
             rounded-md mt-8 w-full"
              >
                {status == "login" ? "Login" : "Register"}
              </button>
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
