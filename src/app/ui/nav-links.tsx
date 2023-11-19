"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/" },
  {
    name: "Upload Job",
    href: "/dashboard/job/create",
  },
  { name: "About", href: "/about" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-10 grow items-center text-gray-700 justify-center gap-2 rounded-md p-3 text-sm font-medium hover:underline-offset-bottom hover:underline hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "underline underline-offset-bottom text-black": pathname === link.href,
              }
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
