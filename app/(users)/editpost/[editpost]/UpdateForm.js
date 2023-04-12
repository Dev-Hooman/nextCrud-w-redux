'use client'
import React from 'react'

function UpdateForm({ post , postId}) {

    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

    const [blogPost, setBlogPost] = React.useState([])

    const [formfields, setFormfields] = React.useState({
        title: post.title,
        content: post.content,
        category: post.category,
        author: post.author,
        photo: post.photo
    });

    const [file, setFile] = React.useState('');
    const [filename, setFilename] = React.useState('Choose File');
    const { title, content, category, author, photo } = formfields

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormfields({ ...formfields, [name]: value })
        console.log(value)
    }

    const imageUpload = (e) => {
        setFormfields({ ...formfields, photo: e.target.files[0] })
    }

    const updateBlogPost = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('myFile', photo)
        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('category', category)
        formdata.append('author', author)

        console.log(formfields);

        try {
            let response = await fetch(`${baseURL}/updatepost/${postId}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  title, content, category, author
                })
              })
        
              const data = await response.json();
              console.log(data)
        
              if (response.status === 404 || !data) {
                alert("Error Please Try again")
              }
        
            } catch (err) {
              console.log("not working")
            }

    }


    return (
        <form method='POST' encType='multipart/form-data'
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





            <button className='my-3 btn btn-success' type='submit' onClick={updateBlogPost} > Update </button>

        </form>
    )
}

export default UpdateForm