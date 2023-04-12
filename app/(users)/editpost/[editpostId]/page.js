import React from 'react'
import { notFound } from 'next/navigation'
import UpdateForm from './UpdateForm'


const baseURL = process.env.NEXT_PUBLIC_SERVER_URL


const fetchBlogPost = async (blogPageId) => {
  const id = blogPageId?.toString(); // convert to string
  const res = await fetch(`${baseURL}/getdata/${id}`,
    { next: { revalidate: 60 } });
  const post = await res.json();

  return post;

}

async function EditPost({ params }) {

  const post = await fetchBlogPost(params.editpostId);

  console.log("edit post :", post);

  if (!post._id) return notFound();


  return (
    <div className='h-screen flex justify-center items-center'>

      <UpdateForm post={post} postId={params.editpostId} />



    </div>
  )
}



export default EditPost