"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const AdminIndicator = ({ admin }: { admin: string }) => { 
  const pathName = usePathname();
  if (!admin && pathName !== "/admin") {
    const router = useRouter();
    router.push("/admin");
  } else if (admin && pathName === "/admin") {
    const router = useRouter();
    router.push("/admin/dashboard");
  }
  return (
    <div className="px-4">
      <span className="text-2xl text-red-500 underline">Logged in:</span>{" "}
      {admin}
    </div>
  );
};

export default AdminIndicator;
