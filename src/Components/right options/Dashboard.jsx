import React from 'react'
import HistoryData from './Dashboard/HistoryData'
import Charts from './Dashboard/Charts'
import WorkDone_MonthlyBasis from './Dashboard/WorkDone_MonthlyBasis'
const Dashboard = () => {
  return (
    <div className='w-full h-fit'>
      <HistoryData/>
      <Charts/>
      <WorkDone_MonthlyBasis/>
    </div>
  )
}

export default Dashboard