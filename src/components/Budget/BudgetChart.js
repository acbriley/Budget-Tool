import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "Rent",
    "Phone",
    "Student Loans",
    "Groceries",
    "Car Payment",
    "Insurance",
  ],
  datasets: [
    {
      data: [500, 100, 260, 200, 100, 100],
      backgroundColor: [
        "rgba(50, 100, 100, .7)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(50, 100, 100, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const donutOptions = {
  cutoutPercentage: 75,
  responsive: true,
  maintainAspectRation: true,
};

const DoughnutChart = () => (
  <>
    <Doughnut
      options={donutOptions}
      data={data}
      style={{ height: "200px", width: "200px" }}
    />
  </>
);

export default DoughnutChart;
