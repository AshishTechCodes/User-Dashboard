import { UserCircle2, Wallet } from 'lucide-react'
import React from 'react'

const HistoryData = () => {
  return (
    <div className='w-full h-fit flex justify-center'>
    <div className='w-full m-5 mt-10 flex justify-between'>
      <div className='w-[23.5%] bg-white rounded-lg'>
        <div className='flex'>
          <Wallet size={65} className='border-black bg-black stroke-white rounded-lg p-2 m-5 -mt-3' />
          <div className='ml-auto m-5 text-right'>
            <p className='font-bold'>Today's Money</p>
            <p className='text-green-500'>₹53</p>
          </div>
        </div>
        <div className='flex justify-center border-t-4 py-3'>
          <p className='font-bold text-green-500 mr-1'>+55%</p>than last week
        </div>
      </div>
      <div className='w-[23.5%] bg-white rounded-lg'>
        <div className='flex'>
          <UserCircle2 size={65} className='border-black bg-black stroke-white rounded-lg p-2 m-5 -mt-3' />
          <div className='ml-auto m-5 text-right'>
            <p className='font-bold'>Today's Users</p>
            <p className='text-green-500'>2300</p>
          </div>
        </div>
        <div className='flex justify-center border-t-4 py-3'>
          <p className='font-bold text-green-500 mr-1'>+3%</p>than last month
        </div>
      </div>
      <div className='w-[23.5%] bg-white rounded-lg'>
        <div className='flex'>
          <UserCircle2 size={65} className='border-black bg-black stroke-white rounded-lg p-2 m-5 -mt-3' />
          <div className='ml-auto m-5 text-right'>
            <p className='font-bold'>New Clients</p>
            <p className='text-green-500'>3462</p>
          </div>
        </div>
        <div className='flex justify-center border-t-4 py-3'>
          <p className='font-bold text-red-500 mr-1'>-2%</p>than Yesterday
        </div>
      </div>
      <div className='w-[23.5%] bg-white rounded-lg'>
        <div className='flex'>
          <Wallet size={65} className='border-black bg-black stroke-white rounded-lg p-2 m-5 -mt-3' />
          <div className='ml-auto m-5 text-right'>
            <p className='font-bold'>Sales</p>
            <p className='text-green-500'>₹103430</p>
          </div>
        </div>
        <div className='flex justify-center border-t-4 py-3'>
          <p className='font-bold text-green-500 mr-1'>+5%</p>than Yesterday
        </div>
      </div>
    </div>
  </div>
  )
}

export default HistoryData