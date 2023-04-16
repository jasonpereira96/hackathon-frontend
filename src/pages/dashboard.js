import { Html, Main } from "next/document";
import { ColorButton, Dropdown, ListFeed } from "./components";
import { LineChart, MyChart, LineChart2 } from "./components";
import ProfileDropdown from "src/components/ProfileDropdown";
import CustomBarChart from "./customBarChart";
import { useEffect, useState } from "react";
import { getData } from "@/api/api";

function Dash() {
  return (
    <div>
      <div class="flex justify-between items-center px-4 py-2 dark:bg-slate-800">
        <h1 class="flex items-center text-5xl font-extrabold dark:bg-slate-800">
          Hydro
          <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            Ponics
          </span>
        </h1>
        <div>
          <ProfileDropdown />
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <DashBoard />
      </div>
    </div>
  );
}

function changeToFahrenheit(inputCelsius) {
  const f = inputCelsius * (9/5) + 32; 
  return f;
}

function checkOverflow(inputOverflow) {
  if (inputOverflow == false){
    return "Stable";
  } else {
    return "Unstable";
  }
}
function checkTurbulence(inputTurbulence) {
  if (inputTurbulence == false){
    return "Stable";
  } else {
    return "Unstable";
  }
}

function statusColor(status) {
  return status === "Stable" ? "text-green-500" : "text-red-500";
}


function DashBoard() {
  // fetching data
  const [temp, setTemp] = useState("~");
  const [humidity, setHumidity] = useState("~");
  const [overflow, setOverflow] = useState(false);
  const [turbulence, setTurbulence] = useState(false);

  const data = [
    {
      name: 'F',
      value: changeToFahrenheit(temp),
    },
    {
      name: 'C',
      value: temp,
    },
    {
      name: '%',
      value: humidity,
    },
  ];
  
  // Set ideal values for the bar chart
  const idealValues = [changeToFahrenheit(25), 25, 50];

  useEffect(() => {
    async function fetch() {
      try {
        let d = await getData();
        // const jsonObj = JSON.parse(d);
        console.log(d);
        setTemp(d.data.readings[0].temperature);
        setHumidity(d.data.readings[0].humidity);
        setOverflow(d.data.readings[0].overflow);
        setTurbulence(d.data.readings[0].turbulence);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, []);
  return (
    <div class="grid grid-cols-4 gap-4 min-h-screen min-w-full">
      <div class="bg-blue-200 rounded-lg shadow-lg p-6">
        <h3 class="text-3xl font-medium">Temperature & Humidity</h3>
        <hr class="mb-2"/>
        <h4 class="text-4xl mb-5 mt-5 text-slate-800">
          {changeToFahrenheit(temp).toFixed(2)}
          <span class="text-2xl text-gray-400 ml-1">
            F°
          </span>
        </h4>
        <h4 class="text-4xl mb-3 mt-5 text-slate-800">
        {temp}
          <span class="text-2xl text-gray-400 ml-1">
            C°
          </span>
        </h4>
        <h4 class="text-4xl mb-3 mt-5 text-slate-800">
        {humidity}
          <span class="text-2xl text-gray-400 ml-1">
          %
          </span>
        </h4>
        <hr class="mb-6" />
        <div className="w-100% h-1/2 mr-4">
          <CustomBarChart data={data} idealValues={idealValues} />
        </div>

      </div>
      <div class="bg-blue-200 rounded-lg shadow-lg p-6">
      <h3 class="text-3xl font-medium">Water Level Status</h3>
      <hr class="mb-20"/>
      <h4 class="text-2xl font-medium">
          {" "}
          Overflow Status:
          <span class={`ml-1 ${statusColor(checkOverflow(overflow))}`}>
            {checkOverflow(overflow)}
          </span>
        </h4>
        <hr class="mb-20 mt-20"/>
        <h4 class="text-2xl font-medium">
          {" "}
          Turbulence Status:
          <span class={`ml-1 ${statusColor(checkTurbulence(turbulence))}`}>
            {checkTurbulence(turbulence)}
          </span>
        </h4>
        <hr class="mb-20 mt-20"/>
      </div>
      <div class="bg-blue-200 rounded-lg shadow-lg p-6 row-span-2">
        <h3 class="text-3xl font-medium">Pump Feed</h3>
        <hr class="mb-2"/>
        <h1 className="text-xl font-bold mb-2">Emergency On/Off</h1>
        <ColorButton />
        <hr class="mb-2 mt-2"/>
        <ListFeed />
      </div>
      <div class="bg-blue-200 rounded-lg shadow-lg row-span-2 p-6">
        <h3 class="text-3xl font-medium">Light Status</h3>
        <hr class="mb-2"/>
        <Dropdown />
      </div>
      <div class=" bg-blue-200 rounded-lg shadow-lg p-1 ">
        <LineChart />
      </div>
      <div class="bg-blue-200 rounded-lg shadow-lg p-6 ">
        <LineChart2 />
      </div>
    </div>
  );
}

export default Dash;
