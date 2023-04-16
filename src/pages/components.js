import { useState } from "react";

const options = [
  { value: "option1", label: "0 Hours" },
  { value: "option2", label: "1 Hours" },
  { value: "option3", label: "2 Hours" },
];

export function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected);
  };

  return (
    <div>
      <h2> Lights </h2>
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
    </div>
  );
}

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
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

export function ColorButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonColor = isClicked
    ? "bg-green-500 hover:bg-green-700"
    : "bg-red-500 hover:bg-red-700";

  return (
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      className={`text-white font-bold py-2 px-4 rounded ${buttonColor}`}
      onClick={handleClick}
    >
      {isClicked ? "On" : "Off"}
    </button>
  );
}

export function ListFeed() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">List Feed</h1>
      <ul className="bg-gray-100 p-2 rounded">
        {items.map((item, index) => (
          <li key={index} className="p-2">
            {item}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleAddItem}
      >
        Add Item
      </button>
    </div>
  );
}

// export default Dropdown;
