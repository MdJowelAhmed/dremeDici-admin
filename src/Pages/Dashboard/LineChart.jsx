// LineChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Months
    datasets: [
      {
        label: "Total Revenue",
        data: [150, 120, 145, 160, 180, 387, 225, 210, 230, 126, 250, 300],
        fill: false,
        borderColor: "#DE5555", // Line color changed to #DE5555
        backgroundColor: "transparent",
        tension: 0.4,
        borderWidth: 2,
        pointBorderColor: "#DE5555", // Point border color changed to #DE5555
        pointBackgroundColor: "#DE5555", // Point background color changed to #DE5555
        pointRadius: 4,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#fff", // Text color in legend (if enabled)
        },
      },
      tooltip: {
        titleColor: "#ffffff", // Tooltip title color
        bodyColor: "#fff", // Tooltip body color
        borderColor: "#191820", // Tooltip border color
        borderWidth: 2, // Tooltip border width
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
        padding: 15, // Tooltip padding
        cornerRadius: 8, // Tooltip corner radius
        displayColors: false, // Disable color box in tooltip
        bodyFont: {
          size: 16, // Font size for tooltip body
        },
        boxPadding: 10, // Padding inside tooltip box
        callbacks: {
          label: (context) =>
            `$${context.raw.toLocaleString()}`.padEnd(15, " "), // Format tooltip label
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#191820", // Grid line color
        },
        ticks: {
          color: "#191820", // Tick label color
        },
      },
      y: {
        grid: {
          display: false, // Disable grid lines for Y axis
        },
        beginAtZero: false,
        ticks: {
          color: "#191820", // Tick label color
          padding: 32, // Padding between tick labels
          callback: function (value) {
            return `$${value.toLocaleString()}`; // Format Y axis ticks
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "250px" }} className="text-black">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
