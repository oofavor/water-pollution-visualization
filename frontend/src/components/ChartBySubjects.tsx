import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Загрязнение вод по областям (только новые и наиболее загрязненные)',
    },
  },
};


const dataColors = ['#D81159','#EC674E' ,'#FFBC42', '#90A959']
export function ChartBySubjects() {
  const [data, setData] = useState<{subject: string,hazard_class:string}[]>()
  useEffect(() => {
    fetch('http://localhost:5000/api/pollution/pollutionPerSubject').then(val => val.json()).then(data => setData(data))
  },[])

  if(!data) return <div></div>

  const dataPlot = {
    labels: data.map(val => val.subject),
    datasets: ['1','2','3','4'].map((i,idx) => {
      return {
        label: i,
        data: data.map(val => val.hazard_class === i ? +val.hazard_class: 0),
        backgroundColor: dataColors[idx],
      }
    })
  };
  console.log(dataPlot)

  return <Bar options={options} data={dataPlot} />;
}