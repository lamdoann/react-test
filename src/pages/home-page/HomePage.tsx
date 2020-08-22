import React from 'react';
import Metric from '../../components/metric/Metric';

function HomePage() {
  return (
    <div>
      <div>
        <Metric 
          name="c1" 
          timeRange="timeRange" 
          seed={Math.random()} 
          refreshIntervalSecs={60} 
        />
        <Metric 
          name="c2" 
          timeRange="timeRange" 
          seed={Math.random()} 
          refreshIntervalSecs={10}
          render={(data) => (<>Hello there {data}</>)}
        />
        <Metric 
          name="c3" 
          timeRange="timeRange" 
          seed={Math.random()} 
          refreshIntervalSecs={15} 
          render={(data) => (<>Charlie {data} Tango</>)}
        />
        <Metric 
          name="c4" 
          timeRange="timeRange" 
          seed={Math.random()} 
          refreshIntervalSecs={42} 
          render={(data) => (<>A fox jumped {data}</>)}
        />
        <Metric 
          name="c5" 
          timeRange="timeRange" 
          seed={Math.random()} 
          refreshIntervalSecs={30} 
          render={(data) => (<>{data} is king</>)}
        />
      </div>
    </div>
  );
}

export default HomePage;
