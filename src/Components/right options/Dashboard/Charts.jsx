import React from 'react'
import BarChart from './Charts/BarChart'
import Linechart from './Charts/Linechart'
import Piechartdiagram from './Charts/Piechartdiagram'
const Charts = () => {
  return (
    <div className='w-full h-fit flex justify-center gap-x-5'>
        {/* npm install react-chartjs-2 */}
        {/* npm install chart.js */}
        {/* npm install recharts */}
        <BarChart/>
        <Linechart/>
        <Piechartdiagram/>
    </div>
  )
}

export default Charts