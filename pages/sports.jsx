import React from 'react';

import F1Schedule from '@/components/F1Schedule';
import LineChart from '@/components/LineChart';
import ConstructorBarChart from '@/components/BarChart';

const Sports = () => {
  return (
    <div className="bg-zinc-900">
      <LineChart />
      <ConstructorBarChart />
      <F1Schedule />
    </div>
  );
};

export default Sports;