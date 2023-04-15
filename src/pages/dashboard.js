import { Html, Main } from "next/document";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <DashBoard />
    </div>
  );
}

function DashBoard() {
  return (
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-medium mb-4">Box 1</h3>
        <p class="text-gray-500 text-sm">Datadf 1</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-medium mb-4">Box 2</h3>
        <p class="text-gray-500 text-sm">Data 2</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 row-span-2">
        <h3 class="text-lg font-medium mb-4">Box 3</h3>
        <p class="text-gray-500 text-sm">Data 3</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg row-span-2 p-6">
        <h3 class="text-lg font-medium mb-4">Box 4</h3>
        <p class="text-gray-500 text-sm">Data 4</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 ">
        <h3 class="text-lg font-medium mb-4">Box 5</h3>
        <p class="text-gray-500 text-sm">Data 5</p>
        <LineChart />
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 ">
        <h3 class="text-lg font-medium mb-4">Box 6</h3>
        <p class="text-gray-500 text-sm">Data 6</p>
        <LineChart />
      </div>
    </div>
  );
}

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default App;
