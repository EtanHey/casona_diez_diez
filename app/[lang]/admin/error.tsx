"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div>
      <h2>Something went wrong!</h2>

      <button
        onClick={() => {
          router.refresh();
        }}
      >
        retry
      </button>
    </div>
  );
}
