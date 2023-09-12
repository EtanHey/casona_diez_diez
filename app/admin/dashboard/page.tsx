import React from "react";
import jwt from "jwt-simple";
import { cookies } from "next/headers";
const secret = process.env.JWT_SECRET;
const checkAdminCookie = () => {
  const cookie = cookies().get("admin");
  if (!cookie || !secret) return false;
  const admin = jwt.decode(cookie.value, secret);
  return admin;
};
const page = () => {
  const adminLoggedIn = checkAdminCookie();
  if (!adminLoggedIn) throw new Error("User not found");
  return <div>admin dashboard page</div>;
};

export default page;
