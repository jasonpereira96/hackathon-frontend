import { useState } from "react";
import { useEffect } from "react";
import { getData } from "@/api/api";

const options = [
  { value: 15, },
  { value: 30, },
  { value: 45,},
  { value: 60, },
  { value: 75, },
  { value: 90, },
  { value: 105, },
  { value: 120, },
];

export function Dropdown() {
  const [selectedOption1, setSelectedOption1] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options[0]);

  const handleOptionChange1 = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === parseInt(selectedValue));
    setSelectedOption1(selected);
  };

  const handleOptionChange2 = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === parseInt(selectedValue));
    setSelectedOption2(selected);
  };


  return (
    <div>
      <h2 class="ftext-lg font-large mb-4 text-black"> Lights on before sunset </h2>
      <div className="relative inline-block w-full text-gray-700">
        <select
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          value={selectedOption1.value}
          onChange={handleOptionChange1}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value + " minutes"}
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Set
        </button>
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
      <br/>
      <br/>

      <br/>

      <h2 class="ftext-lg font-large mb-4 text-black"> Lights off after sunset </h2>
      <div className="relative inline-block w-full text-gray-700">
        <select
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          value={selectedOption2.value}
          onChange={handleOptionChange2}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value + " minutes"}
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Set
        </button>
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
  let jsonObj;
  let phData;

  useEffect(() => {
    async function fetch() {
      try {
        let d = await getData();
        phData = d.data;
        // jsonObj = JSON.parse(d);
        console.log(d.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, []);

  // let time = [];
  // time = phData;

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
    <div class="bg-white">
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
    <div>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        className={`text-white font-bold py-2 px-4 rounded ${buttonColor}`}
        onClick={handleClick}
      >
        {isClicked ? "On" : "Off"}
      </button>
    </div>
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
