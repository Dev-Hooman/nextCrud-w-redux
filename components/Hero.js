import React from 'react'

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Welcome To Amazing Blog</h1>
          <p className="py-6">Discover a world of insights, inspiration, and ideas - all in one place. Welcome to our blog!</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero