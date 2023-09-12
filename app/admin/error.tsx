"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error() {
  const router = useRouter();

  return (
    <div>
      <h2>Something went wrong!</h2>

      <button
        onClick={() => {
          router.push("/admin");
        }}
      >
        Log in
      </button>
    </div>
  );
}