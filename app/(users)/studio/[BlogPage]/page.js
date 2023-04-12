import React from 'react'
import moment from 'moment';
import Image from 'next/image';
import { notFound } from 'next/navigation'
import RelatedPost from '../../../../components/RelatedPost';

import DefaultAvatar from '../../../../assets/icons/Default.png'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const dynamicParams = true;

const fetchBlogPost = async (blogPageId) => {
  const id = blogPageId.toString(); // convert to string
  const res = await fetch(`${baseURL}/getdata/${id}`,
    { next: { revalidate: 60 } });
  const post = await res.json();

  return post;

}

async function BlogPage({ params }) {
  const post = await fetchBlogPost(params.BlogPage)
  console.log(post);

  if (!post._id) return notFound();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/3 px-4">
            <div className="mb-4">
              <Image
              className='select-none'
                src={`${process.env.NEXT_IMAGES_BUCKET}/${post.photo}`}
                alt={post.title}
                width={1200}
                height={630}
              />
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="mb-4 flex items-center">
              <div className="w-10 h-10 rounded-full border-2 border-gray-700 overflow-hidden mr-4">
                <Image
                  src={DefaultAvatar}
                  alt={post.author}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-700">{post.author}</p>
                <p className="text-gray-600">{moment(post.date).format("MMM Do YY")}</p>
              </div>
            </div>
            {/* <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
            <p>
              {post.content}
            </p>
          </div>
          
          <>
          <div className="w-full md:w-1/3 px-4">
            <div className="sticky top-0">
              <h2 className="text-lg font-semibold mb-2 ">Related Posts</h2>
              <p className='italic text-lg'> this component is currently not available </p>
              {/* <RelatedPost postId={post._id} /> */}

            </div>
          </div>
          </>

        </div>
      </div>
    </>

  )
}

export default BlogPage




//NEED TO BE FIXED...
//Generate all of the pages and make it static
export async function generateStaticParams() {
  const res = await fetch(`${baseURL}/getdata`)
  const blogData = await res.json();
  // [{blogID: 1}. {blogID: 2}, .... ]

  return blogData.map(blog => ({
    _id: blog._id.toString()
  }))

} 