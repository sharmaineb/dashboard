import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ConstructorBarChart = () => {
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
        text: '2024 Formula 1 Season Constructor Points',
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
        const response = await fetch('http://ergast.com/api/f1/2024/constructorStandings.json');
        const data = await response.json();

        const constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const labels = constructorStandings.map((standing) => standing.Constructor.name);
        const pointsData = constructorStandings.map((standing) => parseInt(standing.points));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Points',
              data: pointsData,
              backgroundColor: 'pink', 
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

export default ConstructorBarChart;

