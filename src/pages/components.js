import { useState, useRef } from "react";
import { useEffect } from "react";
import { getData, getPumpData } from "@/api/api";

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
      <h2 class="ftext-lg font-large mb-4 text-slate-800"> Lights on before sunset </h2>
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

      <hr class="mb-12"/>

      <h2 class="ftext-lg font-large mb-4 text-slate-800"> Lights off after sunset </h2>
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
import moment from "moment";

export function LineChart() {
  const [chartData, setChartData] = useState({});
  const [data2, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch data here
      let d = await getData();
      let phData = d.data;
      let info = phData.readings;
      console.log(info.createdAt);
      setData(phData.readings);
      // transform data into Chart.js format
      const chartData = {
        labels: phData.readings.map((item) =>
          moment(item.createdAt).format("MM/DD")
        ),
        datasets: [
          {
            label: "PH Levels in soil",
            data: phData.readings.map((item) => item.ph),
            fill: true,
            borderColor: "green",
            tension: 0.1,
          },
        ],
      };
      setChartData(chartData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // create and update chart
    const chart = new Chart("myChart", {
      type: "line",
      data: chartData,
    });

    // clean up chart on unmount
    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return (
    <div class="object-fill">
      <canvas id="myChart" class="object-fill"></canvas>
    </div>
  );
}

export function LineChart2() {
  const [chartData, setChartData] = useState({});
  const [data2, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch data here
      let d = await getData();
      let phData = d.data;
      let info = phData.readings;
      console.log(info.createdAt);
      setData(phData.readings);
      // transform data into Chart.js format
      const chartData = {
        labels: phData.readings.map((item) =>
          moment(item.createdAt).format("MM/DD")
        ),
        datasets: [
          {
            label: "Water Flow Rate",
            data: phData.readings.map((item) => item.humidity),
            fill: true,
            borderColor: "red",
            tension: 0.1,
          },
        ],
      };
      setChartData(chartData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // create and update chart
    const chart = new Chart("myChart2", {
      type: "line",
      data: chartData,
    });

    // clean up chart on unmount
    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return (
    <div class="object-fill items-center">
      <canvas id="myChart2" class="object-fill"></canvas>
    </div>
  );
}

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetch1() {
      try {
        let d = await getPumpData();
        console.log(d);
        setItems(d);
      } catch (e) {
        console.log(e);
      }
    }
    fetch1();
  }, []);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div className="max-w-md mx-auto">
      <ul className="bg-gray-100 p-2 rounded">
        {items.map((item, index) => (
          <div class="mt-2 mb-2 text-center sm:ml-4 sm:text-left" key={item.time}>
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Pump was turned <span className={item.action==="on" ? 'text-red-600' : 'text-green-700'}>{item.action === "on" ? "ON" : "OFF"}</span></h3>
              <div class="mt-1">
                <p class="text-sm text-gray-500">{item.time}</p>
              </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

// export default Dropdown;
