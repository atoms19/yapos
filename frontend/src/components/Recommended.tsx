import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function Recommended() {

  const {data, isLoading,isError} = useQuery({
		queryKey:["users"],
      queryFn:  async ()=>{
			 const res = await fetch('http://localhost:3001/api/users')
			 return res.json();
		}
  })
   if(isLoading) return <div>loading....</div>
	 if(isError) return <div> failed to fetch </div>

	return <div className="bg-whtite px-5 py-2 rounded-lg shadow-lg flex-1 flex"> 
		{data.data.map(user => (<div>{user.name}</div>))}
	</div>

}
