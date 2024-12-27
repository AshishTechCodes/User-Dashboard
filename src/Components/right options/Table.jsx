import React from 'react'
import Authorstable from './Tables/Authorstable'
import Projectstable from './Tables/Projectstable'
const Table = () => {
  return (
    <div className='w-full h-fit'>
      <Authorstable/>
      <Projectstable/>
    </div>
  )
}

export default Table