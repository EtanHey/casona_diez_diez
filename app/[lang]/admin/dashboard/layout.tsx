import React from "react";
import { requireAdminPage } from "@/lib/admin-auth";
import AdminIndicator from "@/app/[lang]/components/adminComponents/AdminIndicator";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) => {
  const admin = await requireAdminPage((await params).lang);

  return (
    <div className="flex h-full w-full flex-col gap-10">
      <AdminIndicator admin={admin} />
      {children}
    </div>
  );
};

export default layout;
