"use client";
import React from "react";
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
  return <div>{admin}</div>;
};

export default AdminIndicator;
