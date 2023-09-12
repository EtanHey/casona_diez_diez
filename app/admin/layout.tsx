import React from "react";
import jwt from "jwt-simple";
import { cookies } from "next/headers";
import AdminIndicator from "../components/AdminIndicator";
const secret = process.env.JWT_SECRET;
const checkAdminCookie = () => {
  const cookie = cookies().get("admin");
  if (!cookie || !secret) return false;
  const admin = jwt.decode(cookie.value, secret);
  return admin;
};
const layout = ({ children }: { children: React.ReactNode }) => {
  const admin = checkAdminCookie();
  return (
    <div className="flex flex-col px-8 gap-2">
      <AdminIndicator admin={admin} />
      {children}
    </div>
  );
};

export default layout;
