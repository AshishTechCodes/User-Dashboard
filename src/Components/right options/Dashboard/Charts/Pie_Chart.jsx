import React from "react";
import { PieChart, Pie, Cell, Tooltip} from "recharts";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const Pie_Chart = () => {
  const data = [
    { name: "Group A", value: 400, color: "#0088FE" },
    { name: "Group B", value: 300, color: "#00C49F" },
    { name: "Group C", value: 300, color: "#FFBB28" },
    { name: "Group D", value: 200, color: "#FF8042" },
    { name: "Group E", value: 278, color: "#845EC2" },
    { name: "Group F", value: 189, color: "#D65DB1" },
  ];

  return (
    <div className="size" style={{direction:"ltr"}}>
      <PieChart width={400} height={190}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={50}
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
};

export default Pie_Chart;