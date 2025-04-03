import React, { useRef, useEffect } from 'react';
import './ChartComponent.css';

import { Line } from 'react-chartjs-2';  // Importing the Line chart component from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = () => {
  // Creating a ref for the canvas element
  const chartRef = useRef(null);

  // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April'],  // Labels for the x-axis
    datasets: [
      {
        label: 'Performance',  // Label for the dataset
        data: [65, 59, 80, 81],  // Data points
        borderColor: 'rgba(75,192,192,1)',  // Line color
        backgroundColor: 'rgba(75,192,192,0.2)',  // Background color for points
        tension: 0.1,  // Line tension (for curves)
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Performance Trend Over Time',  // Title of the chart
      },
    },
  };

  // Use effect hook to initialize the chart once the component is mounted
  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new ChartJS(chartRef.current, {
        type: 'line',  // Chart type
        data: data,  // Chart data
        options: options,  // Chart options
      });

      // Cleanup the chart instance on unmount
      return () => {
        chartInstance.destroy();  // Destroy the chart when component unmounts
      };
    }
  }, []);  // Empty dependency array means this effect runs only once after initial render

  return (
    <div>
      <h3>Performance Trend</h3>
      <canvas ref={chartRef} />  {/* Use the ref on the canvas */}
    </div>
  );
};

export default ChartComponent;
