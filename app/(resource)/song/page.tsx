'use client'


import YouTube from "react-youtube"

const Songs=()=>{
    return(

        <div className=" flex flex-col items-center justify-center bg-gray-600 ">
            <h1 className='mt-[150px]  text-4xl font-semibold  text-white my-5'>Songs</h1>

            <div className='my-6 '>
            <YouTube videoId="YBljJ4Hcpzs"  />
            </div>
         

        </div>
    )
}


export default Songs;