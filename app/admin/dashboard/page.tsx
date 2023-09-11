import React from "react";
const checkAdminCookie = () => {
  return true;
};
const page = () => {
  const adminLoggedIn = checkAdminCookie();
  if (!adminLoggedIn) return null;
  return <div>admin dashboard page</div>;
};

export default page;
