"use client";

import { usePathname, useRouter } from "next/navigation";

import { i18n } from "@/i18n.config";


export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1];
  const router = useRouter();
  const redirectPath = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    const newLink = segments.join("/");
    return router.push(newLink);
  };

  return (
    <select
      onChange={(e) => redirectPath(e.target.value)}
      defaultValue={currentLocale}
      className="flex gap-x-3 uppercase bg-cdd-black text-center align-middle text-white"
    >
      {i18n.locales.map((locale: string) => {
        return (
          <option value={locale} key={locale}>
            {locale}
          </option>
        );
      })}
    </select>
  );
}
