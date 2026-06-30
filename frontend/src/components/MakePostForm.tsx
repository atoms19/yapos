import { AlbumIcon, ImageIcon } from "lucide-react";

export function MakePostForm ({control}:{control:any}){
   const handleClose = (e)=>{
	   control(false);	
	}
	 return <div className="fixed top-0 left-0 w-lvw  h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center" onClick={handleClose}>
		    <div className="p-3 bg-white rounded w-lg" onClick={(e)=>e.stopPropagation()}>
				  <h1 className="mb-3">make a post</h1>
				  <input placeholder="title" className="p-2 mb-2 rounded bg-slate-200 w-full"/>
				  <textarea placeholder="type your mind out" className="w-full border border-gray-100 p-2"rows={5}>
				  </textarea>
				<div className="w-full flex justify-between">
				  <button>
						<ImageIcon className="size-6 text-slate-400"/>
				  </button>
				  <button className="p-3 py-2 rounded bg-blue-300">
						SUBMIT
	 			  </button>
				  </div>
			 </div>
	 </div>
}
