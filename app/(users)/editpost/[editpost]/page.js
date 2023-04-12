import React from 'react'
import { notFound } from 'next/navigation'
import UpdateForm from './UpdateForm'
import { use } from 'react'



const baseURL = process.env.NEXT_SERVER_URL

export const dynamicParams = true;

const fetchBlogPost = async (blogPageId) => {
  const id = blogPageId?.toString(); // convert to string
  const res = await fetch(`${baseURL}/getdata/${id}`,
    { next: { revalidate: 60 } });
  const post = await res.json();

  return post;

}

function EditPost({ params }) {

  const post = use(fetchBlogPost(params.editpost))

  console.log("edit post :", post);

  if (!post._id) return notFound();


  return (
    <div className='h-screen flex justify-center items-center'>

      <UpdateForm post={post} postId={params.editpost} />



    </div>
  )
}



export default EditPost