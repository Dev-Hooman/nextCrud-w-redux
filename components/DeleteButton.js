'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBlogData } from '../app/GlobalRedux/Features/posts/postSlice';

const DeleteButton = ({ blogPostId, children }) => {
  const dispatch = useDispatch()
  const router = useRouter();


  const deleteItem = async () => {
    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

    try {
      const res = await fetch(`${baseURL}/delete/${blogPostId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json();
      dispatch(fetchAllBlogData());

      console.log(data.info)

      if (res.status === 404) {
        alert("Problem in Deleting Please try again!!!")
      }

    } catch (err) {
      console.log("Connection Error")
      console.log(err);
    }

  }

  return (


    <button onClick={deleteItem} className="btn btn-outline btn-error">
      {children}
    </button>
  );
};

export default DeleteButton;
