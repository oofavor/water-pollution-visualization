import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Загрязнение воды по годам',
    },
  },
};


const labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const dataLabels = ['1', '2', '3', '4', '4э', 'нет загрязнения'];
const dataColors = ['#D81159','#EC674E' ,'#FFBC42', '#90A959', '#AFD858', '#C3E282'];

export function ChartByYears() {
  const [data, setData] = useState<{cnt: number,hazard_class:string,year: number}[]>()
  useEffect(() => {
    fetch('http://localhost:5000/api/pollution/pollutionByYear').then(val => val.json()).then(data => setData(data))
  },[])

  if(!data) return <div></div>

  const dataPlot = {
    labels,
    datasets: dataLabels.map((i,idx) => {
      return {
        label: i,
        data: data.filter(val => val.hazard_class === '' && i === 'нет загрязнения' || val.hazard_class === i).map(val => val.cnt),
        borderColor: dataColors[idx],
      }
    })
  };
  console.log(dataPlot)

  return <Line options={options} data={dataPlot} />;
}
