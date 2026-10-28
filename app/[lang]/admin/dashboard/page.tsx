import Link from "next/link";
import React from "react";
import { requireAdminPage } from "@/lib/admin-auth";

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  await requireAdminPage((await params).lang);
  return (
    <div className="flex flex-col items-center gap-8">
      <Link
        className="rounded-full bg-cdd-yellow px-4 py-2"
        href="/admin/dashboard/images"
      >
        Images management
      </Link>
    </div>
  );
};

export default page;
