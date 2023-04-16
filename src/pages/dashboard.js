import { Html, Main } from "next/document";

function App() {
  return (
    <div>
      <h1 class="flex items-center text-5xl font-extrabold dark:bg-slate-800">
        Hydro
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          PONICS
        </span>
      </h1>
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <DashBoard />
      </div>
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          On/Off
        </button>
      </div>
      <div class=" bg-white rounded-lg shadow-lg row-span-2 p-6">
        <Dropdown />
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 ">
        <LineChart />
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 ">
        <LineChart />
      </div>
    </div>
  );
}

import { useState } from "react";

const options = [
  { value: "option1", label: "0 Hours" },
  { value: "option2", label: "1 Hours" },
  { value: "option3", label: "2 Hours" },
];

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected);
  };

  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        value={selectedOption.value}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9.293 13.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586 6.707 8.293a1 1 0 00-1.414 1.414l4 4z"
            clipRule="evenodd"
          />
        </svg>
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
