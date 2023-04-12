import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

const Search = async (searchKeyWord) => {
    const resp = await fetch(`${baseURL}/search?q=${searchKeyWord}`);

    const data = await resp.json();

    if(data.length == 0){
        throw new Error("Whoops Something Broke")

    }

    return data;
}

async function SearchResults({ params }) {

    const searchResults = await Search(params.searchTerm)
    console.log(searchResults);
    return (
        <>

            <div className='container py-16 space-y-12'>
                <h1 className='text-3xl italic font-bold'>
                    {
                        searchResults ? (<>
                            Search Results: found {searchResults.length}
                        </>) : null
                    }
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                    {
                        searchResults?.map(({ _id, title, content, category, author, photo, date }) => {
                            const limit = 35

                            return (
                                <div className='mb-4'>
                                    <div className="card w-full md:max-w-md bg-base-100 shadow-xl">
                                        <figure className='relative'>
                                            <Image
                                                src={`${process.env.NEXT_IMAGES_BUCKET}/${photo}`}
                                                width={500}
                                                height={500}
                                                style={{ objectFit: "contain", objectPosition: "center" }}

                                                alt={title}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-2xl font-bold mb-2">
                                                {title}
                                                <div className="badge badge-secondary inline-block ml-2">New!</div>
                                            </h2>
                                            <p className="text-gray-500 mb-4">{(content.length > limit) ? content.substr(0, limit - 1) + '' : content}</p>
                                            <div className="card-actions flex justify-between items-center">
                                                <div className="badge badge-outline">{category}</div>
                                                <Link href={`/studio/${_id}`} className="btn btn-sm btn-outline">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                        })
                    }


                </div>
            </div>



        </>
    )
}

export default SearchResults