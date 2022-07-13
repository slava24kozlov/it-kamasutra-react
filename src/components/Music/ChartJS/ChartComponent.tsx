import {BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
    };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => Math.ceil(Math.random() * 10000)),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                data: labels.map(() => Math.ceil(Math.random() * 10000)),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
    );
};

export default ChartComponent;
