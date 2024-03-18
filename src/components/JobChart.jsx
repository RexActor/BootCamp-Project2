import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const minSalary = (props.bar.salary_min)-15000;
    const maxSalary = props.bar.salary_max;
    const avgSalary = ((minSalary + maxSalary) / 2)-10000;

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Min','Ave','Max'],
        datasets: [{
          label: 'Salary Comparison 2024',
          data: [minSalary,avgSalary, maxSalary],
          backgroundColor: [
            '#FFBB5E', // for minimum salary
            '#000', //  for maximum salary
            '#00A19F', // Yellow for average salary
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 0,
          borderRadius: 250 // Set bar border radius to round the top of each bar
        }]
      },
      options: {
        scales: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allow the chart to resize freely
          x: {
            stacked: false,
            grid: {
                display: false // Hide background grid lines
              },
          },
          y: {
            display: true, // Hide y-axis line
            beginAtZero: true,
            grid: {
              display: true // Hide background grid lines
            },
            ticks: {
                callback: function(value,index,values) {
                  return value / 1000 + 'k'; // Format y-axis labels in "k" (thousands)
                }
          }}
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        },
        
        
        barPercentage: 0.2 // Set the width of each bar to 50% of the available space
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.bar.salary_min, props.bar.salary_max]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
