import { useQuery } from "@tanstack/react-query"
import { MessageCirclePlus, MessageSquarePlus, PlaneIcon, ShareIcon, ThumbsDown, ThumbsUp } from "lucide-react";


function Post({ data }: { data: any }) {
	return <div className="my-6 p-3 bg-white shadow-sm rounded-lg  ">

	   <div className="flex align-center gap-3 mb-3">
           <div>
				  <img src={data.user.avatar} className="size-8 rounded-full"/>
			  </div>
			  <div className="flex justify-center flex-col gap-1">
				  <span className="font-semibold">{data.user.name}</span>
			  </div>
		</div>
		<span className="font-semibold">{data.title}</span>
		<p className="text-gray-500 mb-3">{data.description}</p>
		<img className="rounded-sm" src={data.image} />
		<div className="w-full flex gap-2">
			<button className="px-3 flex justify-between items-center cursor-pointer">
				<ThumbsUp className="size-6 text-slate-400" />
				<span className="text-gray-400 my-3">{data.likes}</span>
			</button>
			<button className="px-3 flex justify-center items-center cursor-pointer">
				<ThumbsDown className="size-6 text-slate-400" />
				<span className="text-gray-400 my-3">{data.dislikes}</span>
			</button>
			 <button className="px-3 flex justify-center items-center cursor-pointer">
				<MessageCirclePlus className="size-6 text-slate-400" />
				<span className="text-gray-400 my-3">{data.replies}</span>
			</button>
			 <button className="px-3 flex justify-center items-center cursor-pointer">
				<ShareIcon className="size-6 text-slate-400" />
				<span className="text-gray-400 my-3">{data.replies}</span>
			</button>
		</div>
	</div>

}




export function Posts() {
	let { data, isLoading, isError } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			let res = await fetch('http://localhost:3001/api/posts');
			return res.json();
		}
	});

	if (isLoading) return <div>loading..</div>
	if (isError) return <div> error</div>


	return <div>
		{data.data.map((post) => { return (<Post data={post} />) })}
	</div>
}
