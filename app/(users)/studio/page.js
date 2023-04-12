import React, { Suspense } from 'react'
import BlogPostTable from './BlogPostTable';
import Link from 'next/link';

function Studio() {

  return (
    <div className='h-screen flex flex-col justify-evenly items-center bg-base-200' >
      <div className='container'>
        <div className='flex flex-row justify-between items-center w-full'>
          <h2 className='text-3xl font-bold'>
            Manage Blog Post
          </h2>

          <Link

            href="/createpost"
            className="btn gap-2">
            Create a Post
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </Link>
        </div>

        <div className="overflow-x-auto">

          {/* <Suspense fallback={<p>Loading...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>}>
            <BlogPostTable />

          </Suspense> */}

          <BlogPostTable />






        </div>

      </div>



    </div>
  )
}

export default Studio