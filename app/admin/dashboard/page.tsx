import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Link
        className="rounded-full bg-cdd-yellow px-4 py-2"
        href="/admin/dashboard/images"
      >
        Images management
      </Link>
      <Link
        className="rounded-full bg-cdd-yellow px-4 py-2"
        href="/admin/dashboard/offers"
      >
        Offers management
      </Link>
    </div>
  );
};

export default page;
