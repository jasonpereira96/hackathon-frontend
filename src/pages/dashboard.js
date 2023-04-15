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
        <p class="text-gray-500 text-sm">Data 1</p>
        <LineChart />
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-medium mb-4">Box 2</h3>
        <p class="text-gray-500 text-sm">Data 2</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-medium mb-4">Box 3</h3>
        <p class="text-gray-500 text-sm">Data 3</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-medium mb-4">Box 4</h3>
        <p class="text-gray-500 text-sm">Data 4</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 col-span-2 md:col-span-1">
        <h3 class="text-lg font-medium mb-4">Box 5</h3>
        <p class="text-gray-500 text-sm">Data 5</p>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-6 col-span-2 md:col-span-1">
        <h3 class="text-lg font-medium mb-4">Box 6</h3>
        <p class="text-gray-500 text-sm">Data 6</p>
      </div>
    </div>
    // // <div class="grid grid-rows-3 grid-flow-col gap-4">
    // //   <div class="bg-blue-800 row-span-3 ...">01</div>
    // //   <div class="bg-blue-800 col-span-2 ...">02</div>
    // //   <div class="bg-blue-800 row-span-2 col-span-2 ...">03</div>
    // // </div>
    // <div className="flex max-w-md h-full">
    //   <div className="w-1/4 bg-blue-800 flex flex-wrap justify-center">
    //     <div className="bg-white m-1 p-1 w-full h-1/2"></div>
    //     <div className="bg-white m-1 p-1 w-full h-64">
    //       {" "}
    //       <LineChart />
    //     </div>
    //   </div>

    //   <div className="w-1/4 bg-gray-200 flex flex-wrap justify-center">
    //     {/* <div className="flex flex-wrap justify-center"> */}
    //     <div className="bg-white m-4 p-4 w-64 h-64"></div>
    //     <div className="bg-white m-4 p-4 w-full h-64">
    //       {" "}
    //       <LineChart />
    //     </div>
    //     {/* </div> */}
    //   </div>
    //   <div className="w-1/4 bg-red-800"></div>
    //   <div className="w-1/4 bg-green-800"></div>
    // </div>
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
/* <article class="bg-blue-500 m-20 min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div></div>

          <h2 class="product-title"> DashBoard </h2>
          <div class="product-element">
            <div class="product-info">
              <p>
                <strong>$65.00</strong>
              </p>
              <p class="shipping">Free Shipping</p>
              <p>
                Ready to dress up or down, these classic Chcuks are an everday
                wardrobe staple.
              </p>
              <nav>
                <a class="more-info" href="#">
                  More information &rarr;
                </a>
              </nav>
              <div class="shoe-color">
                <div class="color-black"></div>
                <div class="color-blue"></div>
                <div class="color-red"></div>
                <div class="color-yellow"></div>
                <div class="color-green"></div>
                <div class="color-brown"></div>
              </div>
            </div>
            <div class="product-details">
              <h3 class="details-title">
                <strong>Product Details</strong>
              </h3>
              <ul class="details-list">
                <li>Lightweight durable canvas sneaker</li>
                <li>Lightly padded footbed for added comfort</li>
                <li>Iconvic Chuck Taylor ankle patch.</li>
              </ul>
            </div>
          </div>
          <button>Add to cart!</button>
        </div>
      </article> */

export default App;
