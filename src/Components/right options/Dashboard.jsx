import React from 'react'
import HistoryData from './Dashboard/HistoryData'
import Charts from './Dashboard/Charts'
import WorkDoneMonthlyBasis from './Dashboard/WorkDoneMonthlyBasis'
const Dashboard = () => {
  return (
    <div className='w-full h-fit'>
      <HistoryData/>
      <Charts/>
      <WorkDoneMonthlyBasis/>
    </div>
  )
}

export default Dashboard