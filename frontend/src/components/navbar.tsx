import { BellIcon, BriefcaseBusinessIcon, HouseIcon, MessageCircleMoreIcon, SearchIcon, SpeechIcon, UsersIcon } from "lucide-react";
import { Profile } from "./profile";
import { Link } from "react-router";

export function NavBar() {
	return <nav className=" w-full shadow-sm p-3">

		<section className="max-w-svh  items-center justify-between flex gap-3 mx-auto">
			<div className="flex">
				<div className="font-bold mx-3">
					<SpeechIcon className="size-10 text-blue-500" />
				</div>
				<div className="border-2 border-gray-300 flex items-center rounded-3xl px-2 focus-within:border-black py-0.5 focus-within:w-100 transition-all focus-within:border-2">
				   <SearchIcon className="text-gray-400 size-5 m-2"/>
					<input placeholder="search" className="placeholder-gray-400 outline-0" />
				</div>
			</div>
		  
			<div className="flex gap-3 ">
				<Link to="/">
					<div className="flex  flex-col justify-center gap-1 items-center">
						<HouseIcon className="size-7 text-gray-400" />
						<span className="text-center text-xs">Home</span>
					</div>
				</Link>

				<Link to="/mynetwork">
					<div className="flex flex-col justify-center gap-1 items-center">
						<UsersIcon className="size-7 text-gray-400" />
						<span className="text-center text-xs">My network</span>
					</div>
				</Link>


				<a href="#">
					<div className="flex flex-col justify-center gap-1 items-center">
						<BriefcaseBusinessIcon className="size-7 text-gray-400" />
						<span className="text-center text-xs">Jobs</span>
					</div>
				</a>

				<a href="#">
					<div className="flex flex-col justify-center gap-1 items-center">
						<MessageCircleMoreIcon className="size-7 text-gray-400" />
						<span className="text-center text-xs">Messaging</span>
					</div>
				</a>


				<a href="#">
					<div className="flex flex-col  justify-center gap-1 items-center">
						<div className="flex relative">
							<BellIcon className="size-7 text-gray-400" />
							<span className="rounded-2xl p-1 px-2 text-2xs absolute left-7 text-red-900 text-sm bg-red-300">10</span>
						</div>
						<span className="text-center text-xs">Notification</span>
					</div>
				</a>

				<Profile size={"8"}/>
			</div>
		</section>
	</nav>

}
