"use client"
import React, {  useEffect, useState,  } from "react"
import Link from "next/link"
import PostCards from "../components/postcard/postcard"


export default function Blog() {
   const [postData,setPostData]  = useState([])

    useEffect(() => {
        getAllApi()
    },[])



    const getAllApi= async () =>{
        const responce = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const data =await responce.json() 
        setPostData(data)
        console.log(data)
    }
    console.log(setPostData)
    //  [{},{}{}]
    return (
        <div className="flex flex-wrap justify-center">
            {postData.map((eachPost:any) => {
                return (
                    <Link href={`/Blog/${eachPost.id}`}><PostCards postData={eachPost}/> </Link>
                ) 
            })}

            
        </div>
    )
}


