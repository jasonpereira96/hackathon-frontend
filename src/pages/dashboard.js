import { Html, Main } from "next/document";
import { ColorButton, Dropdown, ListFeed } from "./components";
import { LineChart } from "./components";

function App() {
  return (
    <div>
      <h1 class="flex items-center text-5xl font-extrabold dark:bg-slate-800">
        Hydro
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          Ponics
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
        <ColorButton />
        <ListFeed />
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

export default App;
