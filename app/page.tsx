import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <div>
    
    <div className="container mx-auto max-w-6xl"> {/* Added max-width */}
      <div className="flex justify-end pt-10 pr-5"> {/* Add right padding */}
        <div className="w-3/4"> {/* Width of 75% */}
          <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
          <p className="mt-4 text-lg">
            This is the home page of your blog. The content is aligned to the right but with padding from the edge.
          </p>
        </div>
      </div>
    </div>
  </div>

     

    
  )
}