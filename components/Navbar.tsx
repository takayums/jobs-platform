import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="navbar max-w-[1224px] py-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-base font-medium rounded-box text-neutral-shade-40 z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="#">Jobs</Link>
              </li>
              <li>
                <Link href="#">Companies</Link>
              </li>
              <li>
                <Link href="#">Create Cv</Link>
              </li>
            </ul>
          </div>
          <Link
            className="text-[32px] font-righteous font-normal text-primary-shade-100"
            href="/"
          >
            Jobior
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium text-neutral-shade-40">
            <li>
              <Link href="#">Jobs</Link>
            </li>
            <li>
              <Link href="#">Companies</Link>
            </li>
            <li>
              <Link href="#">Create Cv</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link
            className="capitalize text-base font-medium text-neutral-shade-20"
            href="/employee"
          >
            Employers
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn font-semibold hover:btn-neutral bg-primary-shade-5 capitalize text-white rounded-full px-6">
                <LogOutIcon size={16} />
                sign up
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
