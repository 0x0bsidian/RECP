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
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'original',
      data: labels.map(() => faker.datatype.number({ min: -200, max: 200 })),
      borderColor: 'rgba(0, 0, 0, 1)',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    {
      label: 'min',
      data: labels.map(() => faker.datatype.number({ min: -600, max: 200 })),
      borderColor: 'rgba(0, 0, 0, .3)',
      backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    {
      label: 'max',
      data: labels.map(() => faker.datatype.number({ min: -200, max: 600 })),
      borderColor: 'rgba(0, 0, 0, .6)',
      backgroundColor: 'rgba(0, 0, 0, .6)',
    },
  ],
};

export function LineChart() {
  return <div style={{
    width: "100%"
  }}>
    <Line options={options} data={data} />
  </div>;
}