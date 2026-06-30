import { useState } from "react";
import { MakePostForm } from "./MakePostForm";
import { Posts } from "./Posts";
import { Profile } from "./profile";

export function PostActionContainer() {
  const [formOpen,setFormOpen] = useState(false);

	return <div className="px-5 py-2 rounded-lg flex-3 flex flex-col">
		<div className="bg-whtite px-5 py-2 rounded-lg  shadow-lg flex-2 flex">
			<img src="https://imgs.search.brave.com/Dfo-x98Rsn3OZP9nRbazE5JZfF_EpEpbMKXra3gtT9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGZwcy5nZy9wZnBz/LzM4NDMwLTM5Njc4/OC1qYXguanBlZw" className={`size-14 rounded-full`} />
			<button onClick={()=>setFormOpen(true)} className="px-5 py-3 w-full mx-3 text-left border-2 cursor-pointer border-slate-300 font-bold rounded-4xl">start a post</button>
			<div className="flex gap-2">
			</div>
		</div>

	  <section>
	    <Posts/>
	  </section>
	  {formOpen && <MakePostForm control={setFormOpen}/>}
	</div>

}
