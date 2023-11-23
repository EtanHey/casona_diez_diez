import React from "react";
import LoginForm from "../components/LoginForm";

const page = async () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-4">
      <LoginForm />
    </main>
  );
};

export default page;
