import React, { useState, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', 
        },
      },
      title: {
        display: true,
        text: 'Title Goes Here',
        color: 'white', 
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'white', 
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ergast.com/api/f1/2023/last/results.json');
        const data = await response.json();

        const raceResults = data.MRData.RaceTable.Races[0].Results;
        const labels = raceResults.map((result) => result.Driver.givenName + ' ' + result.Driver.familyName);
        const salesData = raceResults.map((result) => parseInt(result.points));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Points',
              data: salesData,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgb(90, 200, 250)', 
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-black'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
