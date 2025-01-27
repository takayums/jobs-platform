import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-screen">
          <div className="flex lg:justify-end justify-between items-center p-3">
            <label htmlFor="my-drawer" className="lg:hidden drawer-button">
              <Menu />
            </label>
            <SignedIn>
              <SignOutButton>
                <button className="btn btn-neutral">logout</button>
              </SignOutButton>
            </SignedIn>
          </div>

          {/* Children */}
          <div className="flex-1 border-t p-4">{children}</div>
        </div>

        {/* Sidebar */}
        <nav className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu border-r rounded-r-md bg-white text-base-content min-h-full space-y-2 w-80 p-4">
            <li>
              <Link
                href="/admin"
                className="btn btn-link no-underline hover:no-underline inline text-primary-shade-100 font-bold text-xl"
              >
                Jobain<span className="text-gray-950">Admin</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard"
                className="hover:bg-secondary-shade-100 hover:text-white active:text-white active:bg-secondary-shade-100 text-base text-neutral-shade-60 font-medium"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/job"
                className="hover:bg-secondary-shade-100 hover:text-white active:text-white active:bg-secondary-shade-100 text-base text-neutral-shade-60 font-medium"
              >
                Job
              </Link>
            </li>
            <li>
              <Link
                href="/admin/category"
                className="hover:bg-secondary-shade-100 hover:text-white active:text-white active:bg-secondary-shade-100 text-base text-neutral-shade-60 font-medium"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href="/admin/user"
                className="hover:bg-secondary-shade-100 hover:text-white active:text-white active:bg-secondary-shade-100 text-base text-neutral-shade-60 font-medium"
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
