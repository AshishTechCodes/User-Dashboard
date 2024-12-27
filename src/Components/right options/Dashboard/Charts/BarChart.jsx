import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.defaults.color = 'rgba(255, 255, 255, 1)';

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 85, 56],
        backgroundColor: 'rgba(255, 255,255)',
        borderColor: 'rgba(0, 51, 0, 1)',
        borderWidth: 1,
        borderRadius: 20,
        barThickness: 10,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;