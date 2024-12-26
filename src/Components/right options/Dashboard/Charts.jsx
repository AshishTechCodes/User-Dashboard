import React from 'react'
import BarChart from './Charts/BarChart'
import Line_Chart from './Charts/Line_Chart'
import Pie_Chart from './Charts/Pie_Chart'
const Charts = () => {
  return (
    <div className='w-full h-fit flex justify-center gap-x-5'>
        {/* npm install react-chartjs-2 */}
        {/* npm install chart.js */}
        {/* npm install recharts */}
        <BarChart/>
        <Line_Chart/>
        <Pie_Chart/>
    </div>
  )
}

export default Charts