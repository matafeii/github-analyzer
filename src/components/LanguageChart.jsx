import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart = ({ languages }) => {
  const data = {
    labels: Object.keys(languages).slice(0, 6), // Top 6 langs
    datasets: [{
      label: '# Repos',
      data: Object.values(languages).slice(0, 6),
      backgroundColor: [
        '#d4af37',
        '#f0e68c',
        '#c19a6b',
        '#a8a8a8',
        '#8b8b8b',
        '#707070'
      ],
      borderColor: '#0a0a0a',
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#d0d0d0',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Top Languages',
        color: '#d4af37',
        font: {
          size: 14,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 20, 0.8)',
        titleColor: '#d4af37',
        bodyColor: '#d0d0d0',
        borderColor: '#d4af37',
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default LanguageChart;

