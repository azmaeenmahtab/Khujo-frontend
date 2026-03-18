"use client";

import Image from "next/image";
import Link from "next/dist/client/link";
import logo from "@/public/logo.png";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
	const { isSignedIn } = useUser();

	return (
		<nav className="relative flex items-center px-10 text-[#096455] text-[15px] font-semibold pt-5">
			<Image src={logo} alt="Logo" width={100} height={40} />

			<div className="absolute left-1/2 -translate-x-1/2 flex gap-10">
				<a href="">About</a>
				<a href="">Our Story</a>
				<a href="">Contact</a>
				<a href="">Support</a>
			</div>

			<div className="flex items-center gap-4 ml-auto">
				{!isSignedIn && (
					<>
					<Link href="/sign-in">
						<button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
							Login
						</button>
					</Link>
					<Link href="/sign-up">
					<button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
						Report Lost Device
					</button>
				</Link>
					</>
				)}
				{isSignedIn && (
					<>
					<Link href="/sign-up">
					<button className="bg-white  text-[#096455] rounded-xl h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#096455] hover:text-white ease-in-out duration-300  ">
						Report Lost Device
					</button>
				</Link>
				<Link href="/dashboard/profile">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
						<Image src="/user.png" alt="User Avatar" width={30} height={30} className="rounded-full" />
					</div>
				</Link>
					</>
				)}
				
				
			</div>
		</nav>
	);
}
