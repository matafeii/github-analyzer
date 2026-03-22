import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = ({ repos }) => {
  const labels = repos.slice(0, 10).map(repo => repo.name.slice(0, 15));

  const data = {
    labels,
    datasets: [
      {
        label: 'Stars',
        data: repos.slice(0, 10).map(repo => repo.stargazers_count),
        backgroundColor: 'rgba(240, 230, 140, 0.6)',
        borderColor: 'rgba(212, 175, 55, 1)',
        borderWidth: 2,
      },
      {
        label: 'Forks',
        data: repos.slice(0, 10).map(repo => repo.forks_count),
        backgroundColor: 'rgba(168, 168, 168, 0.6)',
        borderColor: 'rgba(128, 128, 128, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: '📊 Repository Activity (Top 10)',
        color: '#d4af37',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
      legend: {
        position: 'top',
        labels: {
          color: '#d0d0d0',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        titleColor: '#d4af37',
        bodyColor: '#d0d0d0',
        borderColor: '#d4af37',
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#a8a8a8',
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(212, 175, 55, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#a8a8a8',
          font: {
            size: 10,
          },
        },
        grid: {
          color: 'rgba(212, 175, 55, 0.05)',
        },
      },
    },
  };

  return (
    <Bar options={options} data={data} />
  );
};

export default ActivityChart;

