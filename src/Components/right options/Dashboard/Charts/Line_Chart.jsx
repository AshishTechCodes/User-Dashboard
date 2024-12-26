import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const Line_Chart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'My First Dataset',
        data: [3, 7, 2, 5, 8, 4],
        borderColor: 'rgba(255,255,255)',
        backgroundColor: 'rgba(255,255,255)',
        fill: true,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.5)', 
          lineWidth: 1, 
          borderDash: [5, 5],
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.5)',
          lineWidth: 1,
          borderDash: [5, 5],
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  };

  return (
    <div className='size'>
    <Line data={data} width={100} height={50}  options={options}/>
    </div>
  );
};

export default Line_Chart;