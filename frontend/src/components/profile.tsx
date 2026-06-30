import { ArrowDownIcon } from "lucide-react";

export function Profile({size}:{size:string}) {
	return <div className="mx-5 flex justify-center flex-col gap-1">
		<img src="https://imgs.search.brave.com/Dfo-x98Rsn3OZP9nRbazE5JZfF_EpEpbMKXra3gtT9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGZwcy5nZy9wZnBz/LzM4NDMwLTM5Njc4/OC1qYXguanBlZw" className={`size-8 rounded-full`} />
		<span className="text-xs text-center">Me</span>
	</div>

}
