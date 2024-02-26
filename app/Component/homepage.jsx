import React from 'react'

const Homepage = () => {
  return (
    <div className='h-[100vh] flex w-[100vw]'>
        <div className="left gap-5 w-[50%] flex flex-col justify-center p-20 pt-0"><h1 className='text-[5vw] font-semibold leading-none'>Develop your skills in a new and unique way</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore eveniet hic officiis! In commodi similique explicabo nostrum, nobis mollitia, id quo sint sequi quisquam, enim esse placeat fugiat! Quisquam?</p></div>
        <div className="right w-[50%] flex flex-col justify-center p-20  h-full">
            <img className='h-[80%] object-cover' src="https://images.pexels.com/photos/9158362/pexels-photo-9158362.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default Homepage