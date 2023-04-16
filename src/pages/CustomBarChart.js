import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";

function CustomBarChart({ data, idealValues }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {idealValues.map((value, index) => (
                <ReferenceLine key={index} y={value} label={`Ideal ${index + 1}`} stroke="red" />
            ))}
            <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
      );
}

export default CustomBarChart;