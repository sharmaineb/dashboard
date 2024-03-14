import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
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
        text: '2024 Formula 1 Season Results',
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
        const response = await fetch('https://ergast.com/api/f1/2024/last/results.json');
        const data = await response.json();

        const raceResults = data.MRData.RaceTable.Races[0].Results;
        const labels = raceResults.map(
          (result) => result.Driver.givenName + ' ' + result.Driver.familyName
        );
        const pointsData = raceResults.map((result) => parseInt(result.points));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Points',
              data: pointsData,
              borderColor: 'pink', 
              backgroundColor: 'rgba(0, 0, 0, 0)', 
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
    <div className='pb-1'>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-zinc-900'>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineChart;