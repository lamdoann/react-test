import React, { useState, useEffect } from 'react';

import MetricService from '../../services/MetricService';

interface IProps {
  name: string;
  timeRange: string;
  refreshIntervalSecs: number;
  seed: number;
  render?: (data: any) => React.ReactNode | React.ReactNodeArray;
}

interface IRequestStatus {
  requesting: boolean;
  requested: boolean;
  errorMessage?: string;
}

interface IState {
  data?: any;
}

type Props = IProps;

export function Metric(props: Props) {
  const [requestStatus, setRequestStatus] = useState<IRequestStatus>({
    requesting: false,
    requested: false,
  });

  const [state, setState] = useState<IState>({
    data: undefined
  });

  const fetchMetricData = async () => {
    try {
      setRequestStatus({
        requesting: true,
        requested: false,
        errorMessage: undefined
      });

      const data = await MetricService.fetchMetric(props.timeRange, props.name, props.seed);
      
      setState({ data });
    } catch (error) {
      setRequestStatus({
        requesting: false,
        requested: true,
        errorMessage: error.message
      });

    } finally {
      setRequestStatus({
        ...requestStatus,
        requesting: false,
        requested: true,
      });
    }
  }

  useEffect(() => {
    fetchMetricData();
  }, []);

  useEffect(() => {
    fetchMetricData();
  }, [props.timeRange]);

  if (requestStatus.requesting) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      {props.render && props.render(state.data)}

      {!props.render && (
        <>{state.data}</>
      )}
    </div>
  );
}

export default Metric;