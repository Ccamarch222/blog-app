// import React from "react";
 
// export default function comments({commentsData}:any) {
//     return (
//         <div>
//         <div className=" bg-gray-100 p-8">
//             <div className="max-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
//                 {/* Commenter Information */}
//                 <div className="flex items-center mb-4">
//                     <div className="mr-4">
//                         <img
//                             className="w-10 h-10 rounded-full"
//                             src={`https://ui-avatars.com/api/?name=${commentsData.name}$%7BcommentsData.name%7D&background=random`}
//                             alt={commentsData.name}
//                         />
//                     </div>
//                     <div>
//                         <p className="text-lg font-semibold">{commentsData.email}</p>

//                     </div>
//                 </div>

//                 {/* Comment Body */}
//                 <p className="text-gray-700 text-base">{commentsData.body}</p>
//             </div>
//         </div>
//     </div>
//     )
// }
import React from "react";

export default function Comments({ commentsData }: any) {
    // Ensure that commentsData exists and has the necessary properties
    const name = commentsData?.name || "Anonymous";
    const email = commentsData?.email || "No email provided";
    const body = commentsData?.body || "No comment body";

    return (
        <div>
            <div className="bg-gray-100 p-8">
                <div className="max-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                    {/* Commenter Information */}
                    <div className="flex items-center mb-4">
                        <div className="mr-4">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                                alt={name}
                            />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">{email}</p>
                        </div>
                    </div>

                    {/* Comment Body */}
                    <p className="text-gray-700 text-base">{body}</p>
                </div>
            </div>
        </div>
    );
}
