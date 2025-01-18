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
        <div className="drawer-content p-4 flex flex-col min-h-screen">
          <div className="flex lg:justify-end justify-between items-center">
            <label htmlFor="my-drawer" className="lg:hidden drawer-button">
              <Menu />
            </label>
            <SignedIn>
              <SignOutButton>
                <button className="btn btn-md btn-warning">logout</button>
              </SignOutButton>
            </SignedIn>
          </div>
          <div className="mt-4 flex-1">{children}</div>
        </div>
        <nav className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/category">Category</Link>
            </li>
            <li>
              <Link href="/admin/user">Users</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
