import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
    LabelList,
  } from "recharts";
  import React from "react";
  
  function CustomBarChart({ data, idealValues }) {
    const idealLabels = ['F', 'C', '%'];
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d">
          </Bar>
          {idealValues.map((value, index) => (
            <ReferenceLine
              key={index}
              y={value}
              label={{
                value: `Ideal ${idealLabels[index]}`,
                position: 'insideTop',
                fill: 'black',
              }}
              stroke="red"
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  export default CustomBarChart;
  