import { Chart } from 'primereact/chart';
import { Container } from './styles';
import { GenericTemplate } from '../../templates/GenericTemplate';

export const ChartPage = () => {
  const chartData = {
    labels: ['C', 'B', 'C', 'D'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#855CF8', '#E289F2', '#2196F3']
      }
    ]
  };

  return (
    <GenericTemplate>
      <Container className="card p-d-flex p-jc-center">
        <Chart type="pie" data={chartData} />
      </Container>
    </GenericTemplate>
  );
};
