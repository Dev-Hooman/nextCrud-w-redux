'use client'
import Link from 'next/link';
// import { use } from 'react';
import moment from 'moment';
import DeleteButton from '../../../components/DeleteButton'


//redux imports
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBlogData } from '../../GlobalRedux/Features/posts/postSlice';
import React from 'react';


// const baseURL = process.env.NEXT_SERVER_URL

// const fetchBlogData = async () => {
//   const res = await fetch(`${baseURL}/getdata`, { next: { revalidate: 60 } });
//   const blogData = await res.json();
//   return blogData;
// }

function BlogPostTable() {
  const blogPost = useSelector((state) => state.blogPostSlice);
  const dispatch = useDispatch()

  console.log("blogPost =>>>>>>>", blogPost.blogPosts);




  // const blogData = await fetchBlogData();

  // const blogData = use(dispatch(fetchAllBlogData())) //it was running infinite

  React.useEffect(() => {
    dispatch(fetchAllBlogData());
  }, []);

  return (
    <>
      <table className="table w-full">

        <thead>
          <tr>
            <th> </th>
            <th>Title </th>
            <th>Content</th>
            <th>Category</th>
            <th>Author</th>
            <th>Date </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            blogPost.blogPosts?.map(({ _id, title, content, category, author, date }, index) => {
              const limit = 25
              return (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td className='font-bold'>{title}</td>
                  <td>{(content.length > limit) ? content.substr(0, limit - 1) + '...' : blogPost.blogPosts?.content} </td>
                  <td>{category}</td>
                  <td>{author}</td>
                  <td> {moment(date).format("MMM Do YY")} </td>

                  <td className='flex justify-evenly gap-2'>
                    <Link 
                    href={`/editpost/${_id}`}
                    className="btn btn-outline btn-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>

                    </Link>

                    <DeleteButton blogPostId={_id} >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </DeleteButton>

                    <Link href={`/studio/${_id}`} className="btn btn-outline btn-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>

                    </Link>
                  </td>
                </tr>
              )
            })
          }



        </tbody>
      </table>
    </>
  )
}




export default BlogPostTable