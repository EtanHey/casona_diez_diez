import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "@/lib/helpers";

const page = async () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-4">
      <LoginForm login={login} />
    </main>
  );
};

export default page;
