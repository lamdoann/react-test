import axios from 'axios';

import { METRIC_ENDPOINT } from '../constants/api';
class MetricService {
  private static genQuery = (timeRange: string, componentName: string, seed: number) => {
    return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${(seed%7)==0?'true':'false'}`;
  }
  public static fetchMetric = async (timeRange: string, componentName: string, seed: number) => {
    try {
      const url = process.env.REACT_APP_SVR_API + '/' + METRIC_ENDPOINT;
      const query = MetricService.genQuery(timeRange, componentName, seed);
      const response = await axios.post(url, { query });
      const data = response.data;

      return data;
    } catch (error) {
      throw error;
    }

  }
}

export default MetricService;
