'use client'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'


const initialState = {
  title: "",
  content: "",
  category: "",
  author: "",
  photo: ""

}

const createPost = () => {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
  console.log("BASE URL : ", baseURL);


  const [formfields, setFormfields] = React.useState(initialState);
  const { title, content, category, author, photo } = formfields

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...formfields, [name]: value })
    console.log(value)
  }

  const imageUpload = (e) => {
    setFormfields({ ...formfields, photo: e.target.files[0] })
  }

  const submitBlogPost = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('myFile', photo)
    formdata.append('title', title)
    formdata.append('content', content)
    formdata.append('category', category)
    formdata.append('author', author)

    console.log(formfields);


    try {
      let reponse = await axios.post(`${baseURL}/addblogpost`, formdata)
      console.log(reponse)

      if (reponse.status === 201) {
        alert("Data successfully uploaded");
      }
      else {
        alert("Error Please Try again")

      }

    } catch (e) {
      console.log("NETWORK ERROR", e)
    }


  }
  return (
    <div className='h-screen flex  justify-evenly items-center'>

 

      <form 
      method='POST' 
      encType='multipart/form-data'
      className='flex flex-col justify-center space-y-5  '
      >

<label htmlFor="file" className="form-label">Upload Cover Picture </label>
          <input
            className="file-input w-full max-w-xs"
            name="myFile"
            type="file"
            onChange={imageUpload}
            id='customFile'
          />
        <label className="my-3 form-label">Title</label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleOnChange}
        />

        <label className="my-3 form-label" htmlFor="email">Content</label>
        <textarea
          className="textarea textarea-bordered"
          rows="4"
          type="text"
          id="content"
          name="content"
          placeholder="Whats on your mind ?"
          value={content}
          onChange={handleOnChange}
        />


        <label className="my-3 form-label" htmlFor="contact">Category</label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          id="category"
          name="category"
          placeholder="category "
          value={category}
          onChange={handleOnChange}
        />

        <label className="my-3 form-label" htmlFor="contact">Author</label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          id="author"
          name="author"
          placeholder="author ?"
          value={author}
          onChange={handleOnChange}
        />

      



        <button className='my-3 btn btn-success' type='submit' onClick={submitBlogPost} > Create </button>
              {/* if we have id its mean user is performing update operation then return save */}

      </form>





    </div>

  )
}

export default createPost