"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const AdminIndicator = ({ admin }: { admin: string }) => {
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!admin && pathName !== "/admin") {
      router.push("/admin");
    } else if (admin && pathName === "/admin") {
      router.push("/admin/dashboard");
    }
  }, [admin]);
  if (!admin) return null;
  return (
    <div className="flex items-center gap-2 px-4 text-2xl">
      <span className="text-cdd-red underline">Logged in:</span>
      {admin}
    </div>
  );
};

export default AdminIndicator;
