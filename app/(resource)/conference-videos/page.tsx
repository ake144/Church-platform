'use client'

import YouTube from 'react-youtube';

const videos = ()=>{
    return (
        <div  className='bg-gray-600  w-full'>
        
        
        <div className=" flex flex-col items-center justify-center bg-gray-600 ">
            <h1 className='mt-[150px]  text-4xl font-semibold  text-white my-5'>Conference Videos</h1>

            <div className='my-6 '>
            <YouTube videoId="LabvHZ0zql8"  />
            </div>
        </div>
     </div>
    
    )
}

export default videos;