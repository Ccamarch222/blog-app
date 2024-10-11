'use client'
import React, { useEffect, useState } from "react";
import Comments from "@/app/components/comments/comments";

interface post{
    userId: number;
    id: number;
    title: string;
    body: string;
   

}




 export default function page({params}:any) {
    const [postData,setPostData] = useState<post | null>(null)
   const [comments,setComments] = useState([])


    useEffect(() => {
        getSpecificPost()
    },[])


    const getSpecificPost  = async () => {
      const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
      if(response.ok) {
        const specificData = await response.json()
      setPostData
      (specificData)
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
      const commentsData = await commentsResponse.json()
      setComments(commentsData)
      console.log("commentsData",commentsData)

      }
       
    }
    return (
        <div>
           <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4p-6">
            { /*post title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{(postData || {}).title}</h2>
            <p className="text-gray-700 text-base mb-6">{(postData || {}).body}</p>

            {/*comments Section*/ }
            {comments && comments.map( com => {
              return(
                <Comments commnetsData={com}/>

              )
            })}
            

            




           </div>

        </div>
    )
 }