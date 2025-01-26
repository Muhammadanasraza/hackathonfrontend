import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useRef } from 'react';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

function AdminReportsPage() {
  const chartRef = useRef(null); // Reference to the canvas
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    // Chart data and configuration
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Total Users today',
          data: [95, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Admin Reports',
          },
        },
      },
    };

    // Create chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new ChartJS(ctx, config);

    // Cleanup on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>Total Beneficiary today</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export default AdminReportsPage;
