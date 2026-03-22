import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const languageColors = {
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'Python': '#3572A5',
  'Java': '#b07219',
  'Go': '#00ADD8',
  'Rust': '#ce422b',
  'C++': '#f34b7d',
  'C': '#555555',
  'C#': '#239120',
  'PHP': '#777bb4',
  'Ruby': '#cc342d',
  'Swift': '#fa7343',
  'Kotlin': '#7f52ff',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Vue': '#2c3e50',
  'React': '#61dafb',
};

const LanguageChart = ({ languages, stats }) => {
  const langs = Object.keys(languages).slice(0, 8);
  const values = Object.values(languages).slice(0, 8);
  const total = values.reduce((a, b) => a + b, 0);
  const percentages = values.map(v => ((v / total) * 100).toFixed(1));

  const backgroundColor = langs.map(lang => languageColors[lang] || '#d4af37');

  const data = {
    labels: langs.map((lang, idx) => `${lang} (${percentages[idx]}%)`),
    datasets: [{
      label: 'Repositories',
      data: values,
      backgroundColor,
      borderColor: '#0a0a0a',
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#d0d0d0',
          font: {
            size: 11,
            weight: '500',
          },
          padding: 12,
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: label,
              fillStyle: backgroundColor[i],
              strokeStyle: '#0a0a0a',
              lineWidth: 2,
              hidden: false,
              index: i,
            }));
          },
        },
      },
      title: {
        display: true,
        text: '📊 Language Distribution',
        color: '#d4af37',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        titleColor: '#d4af37',
        bodyColor: '#d0d0d0',
        borderColor: '#d4af37',
        borderWidth: 1,
        padding: 12,
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 11 },
        callbacks: {
          label: (context) => {
            return `Repos: ${context.parsed} • ${percentages[context.dataIndex]}%`;
          },
        },
      },
    },
  };

  return (
    <Doughnut data={data} options={options} />
  );
};

export default LanguageChart;

