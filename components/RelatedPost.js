// import React from 'react'
// import Image from 'next/image';

// const baseURL = process.env.NEXT_SERVER_URL

// const fetchRelatedBlogPost = async (postId) => {
//     console.log("RELATED post id: ", postId);
//     const id = postId.toString(); // convert to string
//     const res = await fetch(`${baseURL}/related-posts/${postId}`,
//         { next: { revalidate: 60 } });
//     const listRealtedPost = await res.json();

//     return listRealtedPost;

// }


// async function RelatedPost({ postId }) {

//     const listRealtedPost = await fetchRelatedBlogPost(postId)

//     return (
//         <ul className="list-none">
//             {
//                 listRealtedPost.relatedPosts?.map(({ _id, title, content, category, author, photo, date }) => {
//                     return (
//                         <li className='mb-4'>
//                             <div className="card w-96 bg-base-100 shadow-xl">
//                                 <figure>
//                                     <Image
//                                         src={`${process.env.NEXT_IMAGES_BUCKET}/${photo}`}
//                                         width={100}
//                                         height={100}
//                                     />
//                                     </figure>
//                                 <div className="card-body">
//                                     <h2 className="card-title">
//                                         {title}
//                                         <div className="badge badge-secondary">New!</div>
//                                     </h2>
//                                     <p>If a dog chews shoes whose shoes does he choose?</p>
//                                     <div className="card-actions justify-end">
//                                         <div className="badge badge-outline">{category}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     )
//                 })
//             }

//         </ul>
//     )
// }

// export default RelatedPost