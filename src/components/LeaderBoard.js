import React from 'react'

const LeaderBoard = () => {
  return (
    <div className='flex my-8 flex-col md:flex-row items-center'>
        <div className='w-[30%] flex items-center'>
            <div className="w-1/2 text-center">
                <h2 className='text-3xl text-[#3dc6c1] text-center'>0.1 %</h2>
                <span className='text-gray-500'>5 Mins</span>
            </div>
            <div className="w-1/2 text-center">
            <h2 className='text-3xl text-[#3dc6c1] text-center'>0.96 %</h2>
                <span className='text-gray-500'>1 Hour</span>
            </div>
        </div>
        <div className='w-[40%] text-center'>
            <span className='text-gray-500 text-xl'>Best Price to Trade</span>
            <h1 className='text-[2.5rem]'>₹ 26,76,890</h1>
            <span className='text-sm text-gray-500'>Average BTC/INR net price including commission</span>
        </div>
        <div className='w-[30%] flex items-center'>
            <div className="w-1/2 text-center">
                <h2 className='text-3xl text-[#3dc6c1] text-center'>2.73 %</h2>
                <span className='text-gray-500'>1 Day</span>
            </div>
            <div className="w-1/2 text-center">
            <h2 className='text-3xl text-[#3dc6c1] text-center'>7.51 %</h2>
                <span className='text-gray-500'>7 Days</span>
            </div>
        </div>
    </div>
  )
}

export default LeaderBoard;